import { useParams } from 'react-router-dom';

export default function CourseDetails() {
  const { courseId } = useParams();
  return <>Course Outline: {courseId}</>;
}
