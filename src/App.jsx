import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import ConfigWorkspace from "./components/ConfigWorkspace";

export default function App() {
  const [section, setSection] = useState("Dashboard");
  const [mode, setMode] = useState("Inbound");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ECEAFF] via-[#F7F6FF] to-[#ECF4FF]">
      <div className="mx-auto max-w-[1400px] px-2 sm:px-4 py-3 flex">
        <Sidebar
          current={section}
          onNavigate={(s) => {
            setSection(s);
            if (s === "Inbound" || s === "Outbound") setMode(s);
          }}
        />
        <main className="flex-1 flex flex-col min-h-[calc(100vh-24px)]">
          <Topbar />
          <div className="flex-1">
            {section === "Dashboard" && <Dashboard />}
            {(section === "Inbound" || section === "Outbound") && (
              <ConfigWorkspace type={mode} />
            )}
            {section === "Settings" && (
              <div className="p-4">
                <div className="rounded-2xl bg-white/55 backdrop-blur-xl ring-1 ring-white/50 shadow-lg p-6 text-gray-700">
                  Account settings will appear here.
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
