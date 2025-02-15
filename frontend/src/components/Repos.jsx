import Repo from "./Repo";

const Repos = ({ repos, alwaysFullWidth = false }) => {
  const className = alwaysFullWidth ? "w-full" : "lg:w-1/2 w-full";

  return (
    <div
      className={`${className} bg-black rounded-lg px-8 py-6 max-h-[450px] mb-4 overflow-auto`}
    >
      <ol className="relative border-s border-gray-200">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center justify-center h-32 ">
            No repos found
          </p>
        )}
      </ol>
    </div>
  );
};
export default Repos;
