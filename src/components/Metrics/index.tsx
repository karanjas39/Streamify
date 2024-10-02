import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { metricsApi } from "@/store/api/metricsApi";
import { Loader } from "../ui/loader";

export function Metrics() {
  const { data, isLoading } = metricsApi.useAllMetricsQuery();

  if (!data && isLoading) return <Loader />;

  const activeUsers = data?.activeUsers || 0;
  const revenue = data?.revenue || 0;
  const topArtist = data?.topArtist || "";
  const totalStreams = data?.totalStreams || 0;
  const totalUsers = data?.totalUsers || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Platform Overview</CardTitle>
        <CardDescription>
          A summary of key metrics showcasing user activity, streaming
          performance, and revenue generation.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-5 sm:grid-cols-1 gap-3">
        <MetricValue description="Total Users" value={totalUsers} />
        <MetricValue description="Active Users" value={activeUsers} />
        <MetricValue description="Revenue" value={revenue} />
        <MetricValue description="Top Artist" value={topArtist} />
        <MetricValue description="Total Streams" value={totalStreams} />
      </CardContent>
    </Card>
  );
}

function MetricValue({
  description,
  value,
}: {
  description: string;
  value: string | number;
}) {
  return (
    <Card>
      <CardContent className="text-center flex flex-col gap-2 pt-4">
        <p className="font-bold text-3xl">{value}</p>
        <p className="text-base text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
