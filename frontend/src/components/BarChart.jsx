import {
  BarChart,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";

const BarVariant = ({ data }) => {
  // Aggregate data across all repositories
  const aggregatedData = data.reduce(
    (acc, repo) => {
      acc.stargazers_count += repo.stargazers_count || 0;
      acc.forks_count += repo.forks_count || 0;
      acc.open_issues_count += repo.open_issues_count || 0;
      acc.watchers_count += repo.watchers_count || 0;
      return acc;
    },
    {
      period: "Total",
      stargazers_count: 0,
      forks_count: 0,
      open_issues_count: 0,
      watchers_count: 0,
    }
  );

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
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVariant;
