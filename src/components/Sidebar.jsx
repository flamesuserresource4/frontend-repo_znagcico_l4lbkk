import { Home, Inbox, PhoneCall, Settings } from "lucide-react";

export default function Sidebar({ current, onNavigate }) {
  const items = [
    { key: "Dashboard", label: "Projects", icon: Home },
    { key: "Inbound", label: "Inbound", icon: Inbox },
    { key: "Outbound", label: "Outbound", icon: PhoneCall },
  ];

  return (
    <aside className="h-full w-64 shrink-0 p-4">
      <div className="h-full rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 ring-1 ring-white/40 flex flex-col">
        <div className="p-4 pb-2 border-b border-white/40">
          <div className="text-xl font-semibold tracking-tight text-gray-900">ConvAI</div>
          <div className="text-xs text-gray-600">AI Conversation Orchestration</div>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {items.map(({ key, label, icon: Icon }) => {
            const active = current === key;
            return (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition shadow-sm ${
                  active
                    ? "bg-gradient-to-r from-[#8A5CF6]/90 to-[#6C63FF]/80 text-white shadow-lg"
                    : "bg-white/50 hover:bg-white/70 text-gray-800"
                }`}
              >
                <Icon className={`h-5 w-5 ${active ? "text-white" : "text-gray-700"}`} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto p-2 border-t border-white/40">
          <button
            onClick={() => onNavigate("Settings")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition bg-white/50 hover:bg-white/70 text-gray-800`}
          >
            <Settings className="h-5 w-5 text-gray-700" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
