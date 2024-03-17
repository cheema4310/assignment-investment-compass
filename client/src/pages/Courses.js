import { useEffect, useState } from 'react';
import CoursesList from '../components/CoursesShowcase/CoursesList';
import LoadingSPinner from '../components/shared/LoadingSpinner/LoadingSpinner';

export default function Courses() {
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

  return (
    <div className="bg-lightest py-20">
      <h2 className="my-heading text-center py-10">
        Find the Course That Matters to You
      </h2>
      {courses ? <CoursesList courses={courses} /> : <LoadingSPinner />}
    </div>
  );
}
