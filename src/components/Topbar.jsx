import { Bell, Calendar, User } from "lucide-react";

export default function Topbar({ onDateClick }) {
  return (
    <header className="w-full p-4">
      <div className="rounded-2xl bg-white/55 backdrop-blur-xl shadow-lg shadow-black/5 ring-1 ring-white/50 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-xl bg-white/50 ring-1 ring-white/60 text-sm font-medium text-gray-800">
            ConvAI
          </div>
          <div className="h-6 w-px bg-white/60" />
          <div className="text-sm text-gray-600">Overview</div>
        </div>
        <button
          onClick={onDateClick}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#8A5CF6] to-[#6C63FF] text-white text-sm font-medium shadow-lg hover:shadow-xl transition"
        >
          <Calendar className="h-4 w-4" />
          <span>Today</span>
        </button>
        <button className="p-2 rounded-xl bg-white/50 ring-1 ring-white/60 hover:bg-white/70 transition">
          <Bell className="h-5 w-5 text-gray-700" />
        </button>
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#8A5CF6]/30 to-[#6C63FF]/30 ring-1 ring-white/60 flex items-center justify-center text-gray-800">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
