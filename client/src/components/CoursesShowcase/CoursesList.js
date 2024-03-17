import CourseCard from './CourseCard';

export default function CoursesList({ courses }) {
  return (
    <div className="p-12 grid grid-cols-6 gap-4">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
}
