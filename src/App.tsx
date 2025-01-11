import "./App.css";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="grid grid-cols-[auto_1fr] min-h-dvh">
      <Sidebar />
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
