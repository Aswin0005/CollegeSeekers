// pages/index.js

import AdBlock5 from './AdBlock5';
import CollegeCard from './CollegeCard2';

export default function Section4() {
  return (
    <div className="bg-[#8477FF14]">
      <h1 className="text-3xl sm:text-4xl font-bold mt-20 py-10 text-center">
        Top Recommended Colleges For You
      </h1>

      <div className=" p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CollegeCard
          imageSrc="https://via.placeholder.com/300"
          collegeName="Anna University"
          location="Chennai, Tamil Nadu"
          rank="17"
          programsOffered="B.Tech, and more."
          salaryPackage="7 LPA"
          fees="2 Lakhs / Year"
        />

        <CollegeCard
          imageSrc="https://via.placeholder.com/300"
          collegeName="Anna University"
          location="Chennai, Tamil Nadu"
          rank="17"
          programsOffered="B.Tech, and more."
          salaryPackage="7 LPA"
          fees="2 Lakhs / Year"
        />

        <CollegeCard
          imageSrc="https://via.placeholder.com/300"
          collegeName="Anna University"
          location="Chennai, Tamil Nadu"
          rank="17"
          programsOffered="B.Tech, and more."
          salaryPackage="7 LPA"
          fees="2 Lakhs / Year"
        />
      </div>

      <AdBlock5 />
    </div>
  );
}
