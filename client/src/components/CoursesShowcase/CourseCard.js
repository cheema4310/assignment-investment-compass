import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  const { _id: id, title, desc, imageUrl } = course;

  const modifyDesc = desc.length > 170 ? desc.substring(0, 170) + '...' : desc;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="col-span-2 pb-6 bg-dark hover:bg-darker rounded-md shadow-2xl ">
      <div className="flex flex-col items-center gap-4">
        <img
          src={imageUrl}
          className="w-full h-[40vh] object-cover rounded-md"
          alt={`course ${imageUrl}`}
        />
        <h4 className="my-heading-normal text-lightest">{title}</h4>
        <p className="my-para px-4 text-center text-lighter w-full h-28">
          {modifyDesc}
        </p>
        <Link
          to={`/courses/${id}`}
          onClick={handleClick}
          className="my-btn-light"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
