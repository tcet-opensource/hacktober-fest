import { useEffect, useState } from "react";
import axios from "axios";

function Explore() {
  const [repos, setRepos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const token = "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";

    const axiosInstance = axios.create({
      baseURL: "https://api.github.com",
      headers: {
        Authorization: `token ${token}`,
      },
    });

    axiosInstance
      .get("/orgs/tcet-opensource/repos")
      .then(async (response) => {
        const repositories = response.data;
        console.log(repositories);
        const repositoriesWithDetails = await Promise.all(
          repositories.map(async (repo) => {
            try {
              const collaboratorsResponse = await axiosInstance.get(
                `/repos/tcet-opensource/${repo.name}/collaborators`,
              );
              const collaborators = collaboratorsResponse.data;
              const languagesResponse = await axiosInstance.get(
                `/repos/tcet-opensource/${repo.name}/languages`,
              );
              const languages = languagesResponse.data;
              const firstLanguage =
                Object.keys(languages)[0] || Object.keys(languages)[1] || null;

              return { ...repo, collaborators, firstLanguage };
            } catch (error) {
              console.error(`Error fetching data for ${repo.name}:`, error);
              return { ...repo, collaborators: [], firstLanguage: null };
            }
          }),
        );

        setRepos(repositoriesWithDetails);
      })
      .catch((error) => {
        console.error("Error fetching data from GitHub API:", error);
      });
  }, []);

  const displayedRepos = showMore ? repos.slice(1, 10) : repos.slice(1, 7);

  return (
    <div className="p-4 md:px-16">
      <h2 className="text-indigo-100 text-4xl font-medium leading-9 my-6">
        Explore Open-Source Repo
      </h2>
      <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {displayedRepos.map((repo) => (
          <div
            key={repo.id}
            className=" w-full border-slate-700 border rounded-2xl overflow-hidden p-4  flex flex-col justify-between item-between gap-12 bg-gradient-custom"
          >
            <div className="p-4">
              <h1 className="self-stretch text-violet-200 text-xl font-semibold leading-8">
                {repo.name}
              </h1>
              <p className="self-stretch text-slate-400 text-base font-normal leading-normal">
                {repo.description}
              </p>
            </div>
            <div className="flex items-center justify-between p-4 relative bottom-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/exploreSection/star.svg"
                  alt="Star Icon"
                  className="w-4 h-4"
                />
                <span className="text-stone-300 text-base font-medium leading-normal">
                  {repo.stargazers_count}
                </span>

                {repo.firstLanguage ? (
                  <div className="px-2.5 py-0.5 rounded-[32px] border border-slate-700 justify-center items-center gap-2 flex">
                    {" "}
                    <div className="text-slate-400 text-base font-normal leading-normal">
                      {" "}
                      {repo.firstLanguage}
                    </div>{" "}
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
      {repos.length > 9 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className=" text-white text-lg font-medium leading-7 mt-4 px-4 py-2 rounded-lg border border-slate-700 "
          >
            {showMore ? "Show Less " : "Show More "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Explore;
