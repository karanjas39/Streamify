import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "../ui/loader";
import { recentStreamsApi } from "@/store/api/recentStreamsApi";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function SongsTable() {
  const { data, isLoading } = recentStreamsApi.useGetRecentStreamsQuery();

  if (!data && isLoading) return <Loader />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Recent Streams</CardTitle>
        <CardDescription>
          A detailed overview of the most recent streams, highlighting song
          titles, artists, and user interactions to provide insights into
          content performance and user engagement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data?.length ? <DataTable columns={columns} data={data} /> : null}
      </CardContent>
    </Card>
  );
}
