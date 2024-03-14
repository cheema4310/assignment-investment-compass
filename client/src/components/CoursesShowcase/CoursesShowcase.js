import CoursesList from './CoursesList';

// Reminder: Fetch courses from Database Later
const Dummy_Courses = [
  {
    id: '101',
    title: 'Master the Market',
    desc: 'Trading and investment training from basic to advance of trading and investment. Get one month of training and three months of support',
    imageUrl:
      'https://img.freepik.com/free-photo/collage-finance-banner-concept_23-2150608846.jpg?t=st=1710391516~exp=1710395116~hmac=a8ba1e4e0440536bc25c9eae75db3ab0b5b5fdf256a2eb0e4a8b5cb6972b29eb&w=900',
    link: '/courses/101',
  },
  {
    id: '102',
    title: 'Learn and Compete',
    desc: 'Get benefit of both learning and competition with other exciting offers also. First get the trained and participate in the competition',
    imageUrl:
      'https://img.freepik.com/free-photo/cardano-blockchain-platform-collage_23-2150827491.jpg?t=st=1710391197~exp=1710394797~hmac=74e0b3b0389157dd75c8a88fabf37bd6a72758c6c03a1eacb31775b56b4b0f47&w=900',
    link: '/courses/102',
  },
  {
    id: '103',
    title: 'Trade & Win',
    desc: 'Participate in trading competetion and get a chance to win price upto One Lakh rupee along with other exciting offers',
    imageUrl:
      'https://img.freepik.com/free-photo/confident-handsome-hispanic-financial-broker-showing-fist-computer-screen-while-trading-from-home_662251-757.jpg?t=st=1710391432~exp=1710395032~hmac=d52722f9a1ca2061146bce38fb6b5feedf021a22f1f935cb34d7b6e0e70c715b&w=900',
    link: '/courses/103',
  },
];

export default function CoursesShowcase() {
  return (
    <section id="courses-showcase">
      <div className="bg-lightest">
        <h2 className="my-heading text-center py-10">
          Reach Your Financial Goals Faster with Our Proven Strategies
        </h2>
        <CoursesList courses={Dummy_Courses} />
      </div>
    </section>
  );
}
