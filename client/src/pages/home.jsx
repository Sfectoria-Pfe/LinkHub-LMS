import Banner from "../components/Home/Banner";
import CoursesCategories from "../components/Home/CoursesCategories";
import PopularCourses from "../components/Home/PopularCourses";
import Proud from "../components/Home/Proud";
import Rate from "../components/Home/Rate";

function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <Proud />
      <CoursesCategories />
      <PopularCourses />
      <Rate />
    </div>
  );
}

export default Home;
