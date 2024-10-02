import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { recentStreamsType } from "@/store/api/types/types";
import { ColumnDef } from "@tanstack/react-table";

const multiFieldFilter = (row: any, columnId: string, filterValue: string) => {
  if (!filterValue) return true;

  const { song, artist } = row.original;
  const lowerFilterValue = filterValue.toLowerCase();

  return (
    song.toLowerCase().includes(lowerFilterValue) ||
    artist.toLowerCase().includes(lowerFilterValue)
  );
};

export const columns: ColumnDef<recentStreamsType>[] = [
  {
    id: "serialNumber",
    header: () => <div className="font-bold">Sr no.</div>,
    cell: ({ row }) => {
      const index = row.index + 1;
      return <div>{index}.</div>;
    },
  },
  {
    accessorKey: "song",
    header: () => {
      return <div className="text-center font-bold">Song</div>;
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.original.song}</div>
    ),
    filterFn: multiFieldFilter,
  },
  {
    accessorKey: "artist",
    header: () => {
      return <div className="text-center font-bold">Artist</div>;
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.original.artist}</div>
    ),
    filterFn: multiFieldFilter,
  },
  {
    accessorKey: "dateStreamed",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-bold"
          >
            Date
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.original.dateStreamed}</div>
    ),
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-bold"
          >
            Streams
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.original.streamCount}</div>
    ),
  },
];
