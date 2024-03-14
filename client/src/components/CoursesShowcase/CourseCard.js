import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const { title, desc, imageUrl, link } = course;

  return (
    <div className="pb-5 bg-dark hover:bg-darker rounded-md shadow-2xl">
      <div className="flex flex-col items-center gap-4">
        <img
          src={imageUrl}
          className="w-full h-[40vh] rounded-md"
          alt={`course ${imageUrl}`}
        />
        <h4 className="my-heading-normal text-lightest">{title}</h4>
        <p className="my-para px-4 text-center text-lighter">{desc}</p>
        <Link to={link} className="my-btn-light">
          Learn More
        </Link>
      </div>
    </div>
  );
}
