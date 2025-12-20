import Home from "../components/HomePageComponents/Home";
import MobileHome from "../components/HomePageComponents/MobileHome";
// import MobileHome from "../components/HomePageComponents/MobileHome";
import ImMandeni from "../components/ImMandeniComponents/ImMandeni";
import ImMandeniMobile from "../components/ImMandeniComponents/ImMandeniMobile";
import ImMandeniTablet from "../components/ImMandeniComponents/ImMandeniTablet";

const HomePage = () => {
  return (
    <>
      <Home />
      {/* <MobileHome /> */}
      <MobileHome />
      <ImMandeni />
      <ImMandeniMobile />
      <ImMandeniTablet />
    </>
  );
};

export default HomePage;
