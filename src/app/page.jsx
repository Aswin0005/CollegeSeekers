import Image from 'next/image';
import Section1 from './components/LandingPageComponents/Section_1';
import Section_2 from './components/LandingPageComponents/Section_2';
import Section3 from './components/LandingPageComponents/Section_3';
import Section4 from './components/LandingPageComponents/Section_4';
import Footer from './components/LandingPageComponents/Footer';
import Section5 from './components/LandingPageComponents/Section_5';
import Testimonials from './components/LandingPageComponents/Section_5';
import CollegeSteps from './components/LandingPageComponents/section6';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section_2 />
      <CollegeSteps />
      <Section3 />
      <Section4 />
      <Testimonials />
      <Footer />
    </div>
  );
}
