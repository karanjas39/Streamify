import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

type TopSongsType = {
  song: string;
  artist: string;
  streamCount: number;
}[];

const topSongsConfig = {
  streams: {
    label: "Stream Count",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="font-medium">{label}</div>
      <div className="text-sm text-muted-foreground">
        Artist: {payload[0].payload.artist}
      </div>
      <div className="text-sm">
        <span style={{ color: payload[0].color }}>Streams: </span>
        <span className="font-medium">{payload[0].value.toLocaleString()}</span>
      </div>
    </div>
  );
};

export function TopSongsChart({ data }: { data: TopSongsType }) {
  return (
    <ChartContainer config={topSongsConfig} className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="song" tickLine={false} axisLine={false} height={60} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value.toLocaleString()}`}
          />
          <ChartTooltip content={<CustomTooltip />} />
          <Bar
            dataKey="streamCount"
            fill={topSongsConfig.streams.color}
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
