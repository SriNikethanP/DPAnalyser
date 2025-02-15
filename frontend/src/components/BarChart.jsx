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
      acc.commits += repo.commits || 0;
      acc.merges += repo.merges || 0;
      acc.repoEngagement += repo.repoEngagement || 0;
      acc.requestedChanges += repo.requestedChanges || 0;
      acc.bugsFixed += repo.bugsFixed || 0;
      acc.issuesSolved += repo.issuesSolved || 0;
      return acc;
    },
    {
      period: "Total",
      commits: 0,
      merges: 0,
      repoEngagement: 0,
      requestedChanges: 0,
      bugsFixed: 0,
      issuesSolved: 0,
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
        <Bar dataKey="commits" fill="#3b82f6" />
        <Bar dataKey="merges" fill="#f43f5e" />
        <Bar dataKey="repoEngagement" fill="#22c55e" />
        <Bar dataKey="requestedChanges" fill="#f59e0b" />
        <Bar dataKey="bugsFixed" fill="#6366f1" />
        <Bar dataKey="issuesSolved" fill="#ec4899" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarVariant;
