import {
  BarChart,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";

const BarVariant = ({ data, commitCounts }) => {
  // Aggregate data across all repositories
  const aggregatedData = data.reduce(
    (acc, repo) => {
      acc.stargazers_count += repo.stargazers_count;
      acc.forks_count += repo.forks_count;
      acc.open_issues_count += repo.open_issues_count;
      acc.watchers_count += repo.watchers_count;
      return acc;
    },
    {
      period: "Total",
      stargazers_count: 0,
      forks_count: 0,
      open_issues_count: 0,
      watchers_count: 0,
      total_commits: 0,
    }
  );

    aggregatedData.total_commits = commitCounts;
    // .split("~") // Split the string into an array
    // .reduce((sum, count) => sum + Number(count), 0);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={[aggregatedData]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="period"
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip />
        <Bar dataKey="stargazers_count" fill="#3b82f6" />
        <Bar dataKey="forks_count" fill="#f43f5e" />
        <Bar dataKey="open_issues_count" fill="#22c55e" />
        <Bar dataKey="watchers_count" fill="#f59e0b" />
        <Bar dataKey="total_commits" fill="#f24832" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVariant;
