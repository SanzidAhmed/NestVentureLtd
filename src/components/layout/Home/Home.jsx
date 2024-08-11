import AboutUs from "../../pages/Home/AboutUs/AboutUs";
import Appointment from "../../pages/Home/Appointment/Appointment";
import Banner from "../../pages/Home/Banner/Banner";
import CompanyVideo from "../../pages/Home/CompanyVideo/CompanyVideo";
import GrowthAndInovation from "../../pages/Home/GrowthAndInovation/GrowthAndInovation";
import HowDoesWorkNest from "../../pages/Home/HowDoesWorkNest/HowDoesWorkNest";
import Services from "../../pages/Home/Services/Services";
import Sponsored from "../../pages/Home/Sponsored/Sponsored";
import CompanyStatistics from "../../pages/Home/Statistics/CompanyStatistics";
import Strength from "../../pages/Home/Strength/Strength";
import Testimonial from "../../pages/Home/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <GrowthAndInovation></GrowthAndInovation>
      <Services></Services>
      <Strength></Strength>
      <CompanyStatistics></CompanyStatistics>
      <CompanyVideo></CompanyVideo>
      <HowDoesWorkNest></HowDoesWorkNest>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Sponsored></Sponsored>
    </div>
  );
};

export default Home;
