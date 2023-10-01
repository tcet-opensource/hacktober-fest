import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import reposData from "./data";

const token = import.meta.env.VITE_GITHUB_TOKEN;

function Explore() {
  const [repos, setRepos] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = sessionStorage.getItem("githubData");

        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setRepos(parsedData);
          setIsDataFetched(true);
        } else {
          const org = "tcet-opensource";
          const octokit = new Octokit({
            auth: token,
            baseUrl: "https://api.github.com",
            userAgent: "Hacktober-Fest",
            request: {
              headers: {
                accept: "application/vnd.github.v3+json",
              },
            },
          });

          const repoNames = reposData.map((repo) => repo.name);

          const repositoriesToFetch = [];

          for (const repoName of repoNames) {
            const repoResponse = await octokit.request(
              "GET /repos/{owner}/{repo}",
              {
                owner: org,
                repo: repoName,
              },
            );
            repositoriesToFetch.push(repoResponse.data);
          }

          const repositoriesWithDetails = await Promise.all(
            repositoriesToFetch.map(async (repo) => {
              try {
                const collaboratorsResponse = await octokit.request(
                  "GET /repos/{owner}/{repo}/collaborators",
                  {
                    owner: org,
                    repo: repo.name,
                  },
                );
                const collaborators = collaboratorsResponse.data;

                const languagesResponse = await octokit.request(
                  "GET /repos/{owner}/{repo}/languages",
                  {
                    owner: org,
                    repo: repo.name,
                  },
                );
                const languages = languagesResponse.data;
                const firstLanguage = Object.keys(languages)[0] || null;

                return { ...repo, collaborators, firstLanguage };
              } catch (error) {
                console.error(`Error fetching data for ${repo.name}:`, error);
                return { ...repo, collaborators: [], firstLanguage: null };
              }
            }),
          );

          sessionStorage.setItem(
            "githubData",
            JSON.stringify(repositoriesWithDetails),
          );

          setRepos(repositoriesWithDetails);
          setIsDataFetched(true);
        }
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowMoreClick = () => {
    if (displayedCount >= repos.length) {
      setDisplayedCount(6);
    } else {
      setDisplayedCount(displayedCount + 3);
    }
  };

  const displayedRepos = repos
    ? windowWidth > 640
      ? repos.slice(0, displayedCount)
      : repos.slice(0, displayedCount - 3)
    : windowWidth < 640
      ? repos.slice(0, displayedCount)
      : repos.slice(0, displayedCount);

  return (
    <section className="p-6 sm:p-16">
      <h2 className="my-6 text-3xl font-medium leading-10 text-indigo-100 sm:text-4xl">
        Explore Open-Source Repo
      </h2>
      <div className="relative">
        <img
          className="absolute w-full h-full -left-6 sm:-left-16"
          src="/exploreSection/Ellipse23.svg"
          alt=""
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {displayedRepos.map((repo) => (
          <div
            key={repo.id}
            className="flex flex-col justify-between w-full h-auto gap-6 overflow-hidden border border-b-2 border-[#3C3E5F] rounded-2xl sm:p-2 item-between"
            style={{
              background:
                "linear-gradient(108deg, #161136 5.21%, #0e0b23 98.76%)",
            }}
          >
            <div className="p-3">
              <a
                href={`https://github.com/tcet-opensource/${repo.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <h1 className="self-stretch text-xl xl:text-2xl font-semibold leading-8 text-violet-200 hover:underline items-center flex">
                  {repo.name}
                </h1>
              </a>
              <p className="self-stretch text-base xl:text-lg font-normal leading-normal text-slate-400">
                {repo.description}
              </p>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-1 sm:space-x-2 text-base xl:text-lg font-normal leading-normal">
                <img
                  src="/exploreSection/star.svg"
                  alt="Star Icon"
                  className="w-4 xl:w-6"
                />
                <span className="text-stone-300">{repo.stargazers_count}</span>

                {repo.firstLanguage ? (
                  <div className="px-2.5 py-0.5 rounded-full border border-slate-700 text-center">
                    {" "}
                    <h4 className="text-slate-400">
                      {" "}
                      {repo.firstLanguage}
                    </h4>{" "}
                  </div>
                ) : null}
              </div>
              <div className="flex -space-x-2">
                {repo.collaborators &&
                  repo.collaborators.length > 0 &&
                  repo.collaborators
                    .slice(0, 3)
                    .map((collaborator) => (
                      <img
                        key={collaborator.id}
                        src={collaborator.avatar_url}
                        alt={`${collaborator.login}'s avatar`}
                        className="w-6 h-6 rounded-full border border-solid border-[#201529]"
                      />
                    ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isDataFetched && repos && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMoreClick}
            className="px-4 py-2 mt-4 text-lg font-medium leading-7 text-white border rounded-lg border-slate-700 flex gap-x-2 hover:border-slate-300"
          >
            <h5>
              {displayedCount >= repos.length ? "Show Less" : "Show More"}
            </h5>
            <svg
              className="mt-1.5"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              fill="#ACB1FF"
            >
              <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default Explore;
