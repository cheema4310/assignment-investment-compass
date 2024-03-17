import { useEffect, useState } from 'react';
import CoursesList from './CoursesList';
import LoadingSPinner from '../shared/LoadingSpinner/LoadingSpinner';

export default function CoursesShowcase() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    // Reminder: Change the URL before Production
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/courses');
        const data = await response.json();
        if (response.ok) {
          setCourses(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourses();
  }, []);
  // Three Courses Required for Landing Page
  const threeCourses = courses?.slice(0, 3);

  return (
    <section id="courses-showcase">
      <div className="bg-lightest">
        <h2 className="my-heading text-center py-10">
          Reach Your Financial Goals Faster with Our Proven Strategies
        </h2>
        {courses ? <CoursesList courses={threeCourses} /> : <LoadingSPinner />}
      </div>
    </section>
  );
}
