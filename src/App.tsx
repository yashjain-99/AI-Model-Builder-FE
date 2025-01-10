import "./App.css";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <main className="grid grid-cols-[auto_1fr] min-h-dvh">
      <Sidebar />
      <div className="overflow-y-auto">
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
