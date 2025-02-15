// async function fetchGitHubStats(username) {
//   let totalStars = 0;
//   let totalForks = 0;
//   let page = 1;
//   let hasMore = true;

//   while (hasMore) {
//     const response = await fetch(
//       `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
//       {
//         headers: {
//           authorization: `token ${process.env.GITHUB_API_KEY}`,
//         },
//       }
//     );
//     const repos = await response.json();

//     if (repos.length === 0) {
//       hasMore = false;
//       break;
//     }

//     totalStars += repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
//     totalForks += repos.reduce((acc, repo) => acc + repo.forks_count, 0);

//     page++;
//   }

//   return { totalStars, totalForks };
// }
