import { useEffect, useState } from 'react';
import CoursesList from '../components/CoursesShowcase/CoursesList';
import LoadingSPinner from '../components/shared/LoadingSpinner/LoadingSpinner';

const PRO_URL =
  'https://assignment-investment-compass.onrender.com/api/courses';
// const DEV_URL = 'http://localhost:5001/api/courses';

export default function Courses() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    // Reminder: Change the URL before Production
    const fetchCourses = async () => {
      try {
        const response = await fetch(PRO_URL);
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

  return (
    <div className="bg-lightest py-20">
      <h2 className="my-heading text-center py-10">
        Find the Course That Matters to You
      </h2>
      {courses ? <CoursesList courses={courses} /> : <LoadingSPinner />}
    </div>
  );
}
