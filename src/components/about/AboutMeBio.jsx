import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src="/profile.png" className="rounded-full w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((elem) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
            key={elem.id}
          >
            {elem.point}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
