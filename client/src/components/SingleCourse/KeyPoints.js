const Dummy_Points = [
  {
    title: 'Duration',
    value: '6 Weeks',
  },
  {
    title: 'Total Class',
    value: '18 Classes',
  },
  {
    title: 'On Demand',
    value: '27 Hours',
  },
  {
    title: 'Level',
    value: 'Beginner',
  },
  {
    title: 'Timing',
    value: 'Flexible',
  },
];
export default function KeyPoints() {
  const CourseKeyPoint = ({ point }) => {
    return (
      <div className="flex-1 py-4 text-darkest text-center border-r-2 border-lighter last:border-r-0">
        <p className="my-para">{point.title}</p>
        <p className="pt-3 font-modern font-bold">{point.value}</p>
      </div>
    );
  };
  return (
    <div className="my-flex">
      {Dummy_Points.map((point, i) => (
        <CourseKeyPoint key={i} point={point} />
      ))}
    </div>
  );
}
