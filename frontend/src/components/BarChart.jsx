import {
  BarChart,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";

const BarVariant = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
