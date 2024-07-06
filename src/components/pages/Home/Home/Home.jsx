import AboutUs from "../AboutUs/AboutUs";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import CompanyVideo from "../CompanyVideo/CompanyVideo";
import GrowthAndInovation from "../GrowthAndInovation/GrowthAndInovation";
import HowDoesWorkNest from "../HowDoesWorkNest/HowDoesWorkNest";
import Services from "../Services/Services";
import Sponsored from "../Sponsored/Sponsored";
import CompanyStatistics from "../Statistics/CompanyStatistics";
import Strength from "../Strength/Strength";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
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
