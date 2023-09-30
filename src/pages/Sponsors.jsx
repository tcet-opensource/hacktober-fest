import CommunitySection from "../components/SponsorSection/CommunitySection.jsx";
import CollabSection from "../components/SponsorSection/CollabSection.jsx";
import SpecialSection from "../components/SponsorSection/SpecialSection.jsx";
import SponsoredBy from "../components/SponsorSection/SponsoredBy.jsx";
import CloudSection from "../components/SponsorSection/CloudSection.jsx";
function Sponsors() {
  return (
    <section className="">
      <SponsoredBy />
      <CollabSection />
      <SpecialSection />
      <CloudSection />
      <CommunitySection />
    </section>
  );
}

export default Sponsors;
