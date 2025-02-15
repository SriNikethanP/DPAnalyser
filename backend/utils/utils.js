// export const getTotalCommits = async (username) => {
//   const reposResponse = await fetch(
//     `https://api.github.com/users/${username}/repos`
//   );
//   const repos = await reposResponse.json();

//   const commitCounts = await Promise.all(
//     repos.map(async (repo) => {
//       const commitsResponse = await fetch(
//         `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
//       );

//       const linkHeader = commitsResponse.headers.get("Link");
//       let totalCommits = 0;

//       if (linkHeader) {
//         const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
//         totalCommits = match ? parseInt(match[1], 10) : 1;
//       } else {
//         const commits = await commitsResponse.json();
//         totalCommits = commits.length;
//       }

//       return { repo: repo.name, commits: totalCommits };
//     })
//   );
// };
