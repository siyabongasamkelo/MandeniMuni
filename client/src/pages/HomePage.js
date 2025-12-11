import Home from "../components/HomePageComponents/Home";
import MobileHome from "../components/HomePageComponents/MobileHome";
import TabletHome from "../components/HomePageComponents/TabletHome";
import ImMandeni from "../components/ImMandeniComponents/ImMandeni";
import ImMandeniMobile from "../components/ImMandeniComponents/ImMandeniMobile";
import ImMandeniTablet from "../components/ImMandeniComponents/ImMandeniTablet";

const HomePage = () => {
  return (
    <>
      <Home />
      <MobileHome />
      <TabletHome />

      <ImMandeni />
      <ImMandeniMobile />
      <ImMandeniTablet />
    </>
  );
};

export default HomePage;
