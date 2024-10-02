export interface metricsType {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: string;
}
export type userGrowthType = {
  month: string;
  totalUsers: number;
  activeUsers: number;
}[];

export type revenueDistributionType = {
  source: string;
  value: number;
}[];

export type topSongsType = {
  song: string;
  artist: string;
  streamCount: number;
}[];

export type recentStreamsType = {
  song: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: number;
};
