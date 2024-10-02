import React, { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Loader } from "./components/ui/loader";

const Metrics = React.lazy(() => import("@/components/Metrics/index"));
const DataVisualization = React.lazy(
  () => import("./components/DataVisualization")
);
const SongsTable = React.lazy(() => import("./components/SongsTable"));

function App() {
  return (
    <div className="w-full min-h-screen max-h-max pb-4">
      <Navbar />
      <div className="w-[90%] mx-auto mt-3 flex flex-col gap-6">
        <p className="w-full text-4xl font-bold text-center">
          Analytics Dashboard
        </p>
        <Suspense fallback={<Loader />}>
          <Metrics />
          <DataVisualization />
          <SongsTable />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
