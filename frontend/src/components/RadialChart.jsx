import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0062FF",
  "#12c6ff",
  "#ff647f",
  "#ff9354",
  "#22c55e",
  "#f59e0b",
];

const RadialVariant = ({ data, commitCounts }) => {
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

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="30%"
        outerRadius="90%"
        barSize={10}
        data={[aggregatedData].map((item, index) => ({
          ...item,
          fill: COLORS[index % COLORS.length],
        }))}
      >
        <RadialBar
          label={{ position: "insideStart", fill: "#fff", fontSize: "12px" }}
          background
          dataKey="value"
        />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          content={(props) => {
            const { payload } = props;
            if (!payload) return null;
            return (
              <ul className="flex flex-col space-y-2">
                {payload.map((entry, index) => (
                  <li
                    key={`item-${index}`}
                    className="flex items-center space-x-2"
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <div className="space-x-1">
                      <span className="text-sm text-muted-foreground">
                        {entry.value}
                      </span>
                      <span className="text-sm">{entry.payload?.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialVariant;
