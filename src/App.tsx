import "./App.css";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import CreateModelModal from "./components/CreateModelModal";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <main className="grid grid-cols-[auto_1fr] min-h-dvh">
        <Sidebar />
        <div>
          <Navbar />
          <Dashboard />
        </div>
      </main>
      <CreateModelModal />
      <Toaster />
    </>
  );
}

export default App;
