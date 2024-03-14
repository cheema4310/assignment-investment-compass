import CourseCard from './CourseCard';

export default function CoursesList({ courses }) {
  return (
    <div className="my-flex p-12 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
