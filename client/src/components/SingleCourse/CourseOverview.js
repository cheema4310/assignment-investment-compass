export default function CourseOverview({ course }) {
  const { detailDesc, overview, modules } = course;

  const CourseModule = ({ courseModule, index }) => {
    return (
      <p className="px-6 py-2">
        <span className="font-bold text-xl font-para">{`Module ${
          index + 1
        }:`}</span>
        <span className="font-semibold text-lg font-para underline pl-4">{`${courseModule}`}</span>
      </p>
    );
  };
  return (
    <div className="w-full bg-lightest py-40">
      <div className="w-4/5 mx-auto flex flex-col gap-16">
        <div>
          <h2 className="my-heading py-8">Course Description</h2>
          <p className="my-para text-justify">{detailDesc}</p>
        </div>
        <div>
          <h2 className="my-heading py-8">Course Overview</h2>
          <p className="my-para text-justify">{overview}</p>
        </div>
        <div>
          <h2 className="my-heading py-8">Course Structure</h2>
          {modules?.map((courseModule, index) => (
            <CourseModule
              key={index}
              index={index}
              courseModule={courseModule}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
