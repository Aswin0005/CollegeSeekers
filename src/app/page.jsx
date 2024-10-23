import Image from "next/image";
import Section1 from "./components/LandingPageComponents/Section_1";
import Section_2 from "./components/LandingPageComponents/Section_2";
import Section3 from "./components/LandingPageComponents/Section_3";
import Section4 from "./components/LandingPageComponents/Section_4";
import Footer from "./components/LandingPageComponents/Footer";

export default function Home() {
  return (
  <div>
    <Section1/>
    <Section_2/>
    <Section3/>
    <Section4/>
    <Footer/>
  </div>
  );
}
