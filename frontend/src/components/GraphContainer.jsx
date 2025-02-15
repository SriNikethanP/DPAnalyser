import { useState } from "react";
import BarVariant from "./BarChart";
import PieVariant from "./PieChart";
import RadialVariant from "./RadialChart";

export const GraphContainer = ({ data }) => {
  const [selectedChart, setSelectedChart] = useState("bar");

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Heading & Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">GitHub Analysis</h2>

        <select
          className="w-40 p-2 border border-gray-300 rounded-md"
          value={selectedChart}
          onChange={(e) => setSelectedChart(e.target.value)}
        >
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
          <option value="radial">Radial Chart</option>
        </select>
      </div>

      {/* Chart Display */}
      <div className="bg-gray-100 p-4 rounded-lg max-h-[360px] overflow-auto">
        {selectedChart === "bar" && <BarVariant data={data} />}
        {selectedChart === "pie" && <PieVariant data={data} />}
        {selectedChart === "radial" && <RadialVariant data={data} />}
      </div>
    </div>
  );
};
