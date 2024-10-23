import React from 'react'
import SelectionPanel from './SelectionPanel'
import CollegeCard from './CollegeCard'
import EntranceExams from './EntranceExams'
import PopularCourses from './PopularCourses'

export default function Section3() {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">Explore Your Dream College In India</h1>
        <p className="mt-4 text-lg italic text-gray-600 max-w-screen-lg mx-auto px-4 sm:px-12 md:px-64">
          &quot;Easily explore colleges, entrance exams, and career opportunities tailored to your interests.&quot;
        </p>
      </div>
        <SelectionPanel/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
          <CollegeCard/>
          <EntranceExams/>
          <PopularCourses/>
        </div>
    </div>
  )
}
