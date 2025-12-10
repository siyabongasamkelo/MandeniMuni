import Home from "../components/HomePageComponents/Home";
import MobileHome from "../components/HomePageComponents/MobileHome";
import TabletHome from "../components/HomePageComponents/TabletHome";
import ImMandeni from "../components/ImMandeniComponents/ImMandeni";

const HomePage = () => {
  return (
    <>
      <Home />
      <MobileHome />
      <TabletHome />

      <ImMandeni />
    </>
  );
};

export default HomePage;
