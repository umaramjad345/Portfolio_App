import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner.jsx";
import ProjectsGrid from "../components/projects/ProjectGrid.jsx";
import { ProjectsProvider } from "../context/ProjectsContext.jsx";

const Home = () => {
  return (
    <div className="container mx-auto">
      <AppBanner />

      <ProjectsProvider>
        <ProjectsGrid></ProjectsGrid>
      </ProjectsProvider>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link to="/projects">
          <button className="text-lg text-nowrap text-ternary-light w-fit px-4 py-3 transition-all duration-500 rounded-lg bg-indigo-500 hover:bg-indigo-600">
            More Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
