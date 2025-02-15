import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#0062FF",
  "#12c6ff",
  "#ff647f",
  "#ff9354",
  "#22c55e",
  "#f59e0b",
];

const PieVariant = ({ data }) => {
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
    }
  );
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="right"
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
                      <span className="text-sm">
                        {entry.payload?.percent
                          ? (entry.payload?.percent * 100).toFixed(2) + "%"
                          : "0%"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }}
        />
        <Tooltip />
        <Pie
          data={[aggregatedData]}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={90}
          innerRadius={60}
          paddingAngle={2}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieVariant;
