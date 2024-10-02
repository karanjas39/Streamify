import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";
import { revenueDistributionType } from "@/store/api/types/types";
import { COLORS } from "@/lib/constants";

const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const CustomLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm">{entry.payload.source}</span>
        </div>
      ))}
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div style={{ color: payload[0].payload.fill }}>{payload[0].name}</div>
      <div className="font-medium">${payload[0].value.toLocaleString()}</div>
    </div>
  );
};

export function RevenueDistributionChart({
  data,
}: {
  data: revenueDistributionType;
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithPercentage = data.map((item) => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1),
  }));

  return (
    <ChartContainer config={revenueChartConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithPercentage}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            nameKey="source"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <ChartTooltip content={<CustomTooltip />} />
          <ChartLegend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
