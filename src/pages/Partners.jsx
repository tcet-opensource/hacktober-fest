import CommunitySection from "../components/PartnerSection/CommunitySection.jsx";
import CollabSection from "../components/PartnerSection/CollabSection.jsx";
import SpecialSection from "../components/PartnerSection/SpecialSection.jsx";
import MLH from "../components/PartnerSection/mlh.jsx";
// import SponsoredBy from "../components/PartnerSection/SponsoredBy.jsx";
// import CloudSection from "../components/PartnerSection/CloudSection.jsx";
function Partners() {
  return (
    <section className="">
      < MLH />
      {/*<SponsoredBy />*/}
      <CollabSection />
      <SpecialSection />
      {/* <CloudSection /> */}
      <CommunitySection />
    </section>
  );
}

export default Partners;
