import React, { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { Loader } from "./components/ui/loader";
import { BACKEND_URL } from "./lib/constants";

const Metrics = React.lazy(() => import("@/components/Metrics/index"));
const DataVisualization = React.lazy(
  () => import("./components/DataVisualization")
);
const SongsTable = React.lazy(() => import("./components/SongsTable"));

function App() {
  const [serverRunning, setServerRunning] = useState<boolean | null>(null);

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch(BACKEND_URL);
        if (response.ok) {
          setServerRunning(true);
        } else {
          setServerRunning(false);
        }
      } catch (error) {
        setServerRunning(false);
      }
    };

    checkServer();
  }, []);

  if (serverRunning === null) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen max-h-max pb-4">
      <Navbar />
      <div className="w-[90%] mx-auto mt-3 flex flex-col gap-6">
        <p className="w-full text-4xl font-bold text-center">
          Analytics Dashboard
        </p>
        {!serverRunning ? (
          <div className="text-center text-red-500 text-sm">
            <p>The JSON server is not running.</p>
            <p>
              Please start the JSON server and refresh the page. Click{" "}
              <a
                href="https://github.com/karanjas39/Streamify"
                className="underline font-bold"
                target="_blank"
              >
                here
              </a>{" "}
              to know more.
            </p>
          </div>
        ) : (
          <Suspense fallback={<Loader />}>
            <Metrics />
            <DataVisualization />
            <SongsTable />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
