import "./App.css";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <main className="grid grid-cols-[auto_1fr] min-h-dvh">
      <Sidebar />
      <div className="overflow-y-auto w-[1228px]"></div>
    </main>
  );
}

export default App;
