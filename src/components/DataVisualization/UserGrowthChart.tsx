import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  TooltipProps,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";
import { userGrowthType } from "@/store/api/types/types";

const userGrowthChartConfig = {
  totalUsers: {
    label: "Total User",
    color: "#2563eb",
  },
  activeUsers: {
    label: "Active User",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="font-medium">{label}</div>
      {payload.map((entry, index) => {
        const config =
          userGrowthChartConfig[
            entry.dataKey as keyof typeof userGrowthChartConfig
          ];
        return (
          <div key={index} className="text-muted-foreground">
            {config?.label}:{" "}
            <span className="font-medium text-foreground">{entry.value}</span>
          </div>
        );
      })}
    </div>
  );
};

const CustomLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex justify-center gap-4">
      {payload.map((entry: any, index: number) => {
        const config =
          userGrowthChartConfig[
            entry.dataKey as keyof typeof userGrowthChartConfig
          ];
        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span>{config?.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export function UserGrowthChart({ data }: { data: userGrowthType }) {
  const allValues = data.flatMap((d) => [d.totalUsers, d.activeUsers]);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);

  return (
    <ChartContainer config={userGrowthChartConfig} className="h-[400px] w-full">
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          domain={[minValue, maxValue]}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <ChartTooltip content={<CustomTooltip />} />
        <ChartLegend content={<CustomLegend />} />
        <Line
          type="monotone"
          dataKey="totalUsers"
          stroke={userGrowthChartConfig.totalUsers.color}
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="activeUsers"
          stroke={userGrowthChartConfig.activeUsers.color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
