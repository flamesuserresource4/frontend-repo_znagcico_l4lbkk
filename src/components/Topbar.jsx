import { Bell, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Topbar({ onDateClick, section = "Overview" }) {
  return (
    <header className="w-full p-4">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-2xl bg-white/55 backdrop-blur-xl shadow-lg shadow-black/5 ring-1 ring-white/50 px-4 py-3 flex items-center gap-3"
      >
        <div className="flex-1 flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="px-3 py-1.5 rounded-xl bg-white/50 ring-1 ring-white/60 text-sm font-medium text-gray-800"
          >
            ConvAI
          </motion.div>
          <div className="h-6 w-px bg-white/60" />
          <div className="text-sm text-gray-600">{section}</div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDateClick}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#8A5CF6] to-[#6C63FF] text-white text-sm font-medium shadow-lg hover:shadow-xl transition"
        >
          <Calendar className="h-4 w-4" />
          <span>Today</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-xl bg-white/50 ring-1 ring-white/60 hover:bg-white/70 transition"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-gray-700" />
        </motion.button>
        <motion.div
          whileHover={{ rotate: 2 }}
          className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#8A5CF6]/30 to-[#6C63FF]/30 ring-1 ring-white/60 flex items-center justify-center text-gray-800"
          aria-label="Account"
          role="button"
        >
          <User className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </header>
  );
}
