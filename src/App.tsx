import { Metrics } from "@/components/Metrics";
import Navbar from "@/components/Navbar/Navbar";
import { DataVisualization } from "./components/DataVisualization";

function App() {
  return (
    <div className="w-full min-h-screen max-h-max pb-4">
      <Navbar />
      <div className="w-[90%] mx-auto mt-3 flex flex-col gap-6">
        <p className="w-full text-4xl font-bold text-center">
          Analytics Dashboard
        </p>
        <Metrics />
        <DataVisualization />
      </div>
    </div>
  );
}

export default App;
