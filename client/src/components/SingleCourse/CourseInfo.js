import { Link } from 'react-router-dom';
import KeyPoints from './KeyPoints';

export default function CourseInfo({ course }) {
  const { id, title, desc, imageUrl } = course;
  return (
    <div
      className="h-[60vh] w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative bg-gradient-to-br from-glassOrange to-glassDarkest h-full w-full">
        <div className="w-4/5 mx-auto py-12">
          <div className="w-1/2">
            <h2 className="my-heading text-lightest">{title}</h2>
            <p className="my-para pt-4 pb-10  text-lightest">{desc}</p>
          </div>
          <div className="flex gap-4">
            <Link
              className="py-2 px-6 text-lightest bg-orange-600 border border-orange-600 font-semibold rounded-lg shadow-lg hover:text-orange-600 hover:bg-transparent"
              to={`/enroll?id=${id}`}
            >
              Enroll
            </Link>
            <button className="py-2 px-4 text-lightest font-semibold bg-transparent rounded-lg shadow-lg border border-lightest transition hover:text-orange-600 hover:border-orange-600">
              Syllabus
            </button>
          </div>
          <div className="absolute py-6 w-4/5 top-[100%] rounded-2xl shadow-2xl -translate-y-1/2 bg-lightest">
            <KeyPoints />
          </div>
        </div>
      </div>
    </div>
  );
}
