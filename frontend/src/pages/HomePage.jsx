import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";
import { GraphContainer } from "../components/GraphContainer";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [stars, setStars] = useState(0);
  // const [forks, setForks] = useState(0);
  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "SriNikethanP") => {
      setLoading(true);
      try {
        if (!username) {
          console.error("Username is undefined!");
          return;
        }

        const res = await fetch(`/api/users/profile/${username}`);
        const { repos, userProfile, stars, forks } = await res.json();

        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first

        setRepos(repos);
        // setStars(stars);
        // setForks(forks);
        setUserProfile(userProfile);

        return { userProfile, repos, stars, forks };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();

    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);

    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {/* {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />} */}
      <div className="flex gap-4 flex-col lg:flex-row justify-start items-start ">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}

        {!loading && <Repos repos={repos} />}
        {!loading && <GraphContainer data={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};
export default HomePage;
