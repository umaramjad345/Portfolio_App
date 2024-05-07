const selectOptions = ["Web Application", "Mobile Application", "UI/UX Design"];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium px-4 sm:px-6 py-2 w-full md:w-1/2 lg:w-1/4 borderdark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option value={setSelectProject} className="text-sm sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
