import { TrendingUp, Users, Activity, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

function MetricCard({ title, value, delta, icon: Icon, accent = "from-[#8A5CF6] to-[#6C63FF]" }) {
  return (
    <div className="rounded-2xl bg-white/55 backdrop-blur-xl ring-1 ring-white/50 shadow-lg p-4 flex flex-col gap-3 transition duration-300 hover:shadow-xl hover:bg-white/65">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">{title}</div>
        <div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow` }>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="text-2xl font-semibold text-gray-900">{value}</div>
      {delta && (
        <div className={`text-xs ${delta.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>{delta} vs last week</div>
      )}
    </div>
  );
}

function HaloPanel({ children, title, icon: Icon }) {
  return (
    <div className="relative rounded-2xl bg-white/55 backdrop-blur-xl ring-1 ring-white/50 shadow-lg p-4 overflow-hidden">
      <div className="pointer-events-none absolute -inset-16 bg-gradient-to-br from-[#8A5CF6]/10 via-[#6C63FF]/5 to-transparent blur-3xl" />
      <div className="relative z-0">
        {title && (
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-700">
            {Icon && <Icon className="h-4 w-4 text-[#8A5CF6]" />} <span>{title}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function UpcomingCalls() {
  const calls = [
    { name: "Acme Co.", time: "10:30 AM", type: "Inbound" },
    { name: "Nimbus LLC", time: "11:15 AM", type: "Outbound" },
    { name: "Orbital AI", time: "1:00 PM", type: "Inbound" },
  ];
  return (
    <HaloPanel title="Upcoming Calls">
      <div className="space-y-2">
        {calls.map((c, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/60 ring-1 ring-white/50">
            <div>
              <div className="text-sm font-medium text-gray-900">{c.name}</div>
              <div className="text-xs text-gray-600">{c.type}</div>
            </div>
            <div className="text-sm text-gray-700">{c.time}</div>
          </div>
        ))}
      </div>
    </HaloPanel>
  );
}

export default function Dashboard() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-transparent" />
      </div>

      <div className="relative z-0 p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <HaloPanel title="Realtime Overview" icon={Sparkles}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MetricCard title="Engagement" value="2,341" delta="+12%" icon={TrendingUp} />
              <MetricCard title="Active Agents" value="27" delta="+3%" icon={Users} accent="from-blue-500 to-indigo-500" />
              <MetricCard title="Activity" value="85%" delta="+5%" icon={Activity} accent="from-fuchsia-500 to-violet-500" />
            </div>
          </HaloPanel>

          <HaloPanel title="Task Summary">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/60 ring-1 ring-white/50">
                <div className="text-sm font-medium text-gray-900">Onboarding new number</div>
                <div className="text-xs text-gray-600">Setup SIP + IVR routing</div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 ring-1 ring-white/50">
                <div className="text-sm font-medium text-gray-900">Fine-tune Sales Agent</div>
                <div className="text-xs text-gray-600">Improve objection handling</div>
              </div>
            </div>
          </HaloPanel>
        </div>
        <div className="space-y-4">
          <UpcomingCalls />
        </div>
      </div>
    </div>
  );
}
