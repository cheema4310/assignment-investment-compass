import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseInfo from '../components/SingleCourse/CourseInfo';
import CourseOverview from '../components/SingleCourse/CourseOverview';
import LoadingSPinner from '../components/shared/LoadingSpinner/LoadingSpinner';

export default function CourseDetails() {
  const [course, setCourse] = useState(null);

  const { id } = useParams();

  const PRO_URL = `https://assignment-investment-compass.onrender.com/api/courses/${id}`;
  // const DEV_URL = `http://localhost:5001/api/courses/${id}`;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(PRO_URL);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourse();
  }, []);

  // Handling Loading State and Not-Found State
  if (course?.message) {
    return <div>No Course Found</div>;
  } else if (course === null) {
    return (
      <div className="bg-lightest py-40">
        <LoadingSPinner />
      </div>
    );
  }

  return (
    <div className="bg-lightest">
      <CourseInfo course={course} />
      <CourseOverview course={course} />
    </div>
  );
}
