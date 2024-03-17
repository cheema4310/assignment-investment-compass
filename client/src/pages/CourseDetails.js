import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseInfo from '../components/SingleCourse/CourseInfo';
import CourseOverview from '../components/SingleCourse/CourseOverview';

export default function CourseDetails() {
  const [course, setCourse] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/courses/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCourse();
  }, []);

  if (course.message) {
    return <div>No Course Found</div>;
  }

  return (
    <div className="bg-lightest">
      <CourseInfo course={course} />
      <CourseOverview course={course} />
    </div>
  );
}
