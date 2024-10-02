import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Loader } from "../ui/loader";
import { dataVisualizationApi } from "@/store/api/dataVisualizationApi";
import { RevenueDistributionChart } from "./RevenueChart";
import { UserGrowthChart } from "./UserGrowthChart";
import { TopSongsChart } from "./TopSongsChart";

export function DataVisualization() {
  const { data: revenueDistributionData, isLoading: isLoadingRevenueDist } =
    dataVisualizationApi.useGetRevenueDistributionQuery();
  const { data: userGrowthData, isLoading: isLoadingUserGrowth } =
    dataVisualizationApi.useGetUserGrowthQuery();
  const { data: topSongsData, isLoading: isLoadingtopSongs } =
    dataVisualizationApi.useGetTopSongsQuery();

  if (
    isLoadingRevenueDist ||
    isLoadingUserGrowth ||
    isLoadingtopSongs ||
    !topSongsData ||
    !revenueDistributionData ||
    !userGrowthData
  )
    return <Loader />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Data Insights</CardTitle>
        <CardDescription>
          Visual representations of user growth, revenue distribution, and
          top-streamed content to provide actionable insights into platform
          performance.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-center">User Growth Overview</p>
          <UserGrowthChart data={userGrowthData} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-center">Revenue Distribution</p>
          <RevenueDistributionChart data={revenueDistributionData} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-center">Top 5 Streamed Songs</p>
          <TopSongsChart data={topSongsData} />
        </div>
      </CardContent>
    </Card>
  );
}
