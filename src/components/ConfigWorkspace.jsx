import { useState } from "react";

const tabs = ["Setup", "Agents", "Analytics", "Call Logs", "Callbacks"];

export default function ConfigWorkspace({ type = "Inbound" }) {
  const [current, setCurrent] = useState("Setup");
  const [hasNumber, setHasNumber] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-white/40 shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-gray-900">{type} Configuration</div>
            <div className="text-sm text-gray-600">Connect a phone number to begin.</div>
          </div>
          {!hasNumber && (
            <button onClick={() => setHasNumber(true)} className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#8A5CF6] to-[#6C63FF] text-white text-sm font-medium shadow-lg">
              Add Number
            </button>
          )}
        </div>
      </div>

      {hasNumber ? (
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-white/40 shadow-lg">
          <div className="border-b border-white/40 px-4 pt-2">
            <div className="flex gap-1 overflow-auto">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setCurrent(t)}
                  className={`px-4 py-2 rounded-xl text-sm transition ${
                    current === t
                      ? "bg-gradient-to-r from-[#8A5CF6]/90 to-[#6C63FF]/80 text-white"
                      : "text-gray-700 hover:bg-white/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 min-h-[260px]">
            {current === "Setup" && (
              <div className="space-y-3">
                <div className="text-sm text-gray-700">Configure routing, greeting, and fallback behavior.</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/50 ring-1 ring-white/40">
                    <div className="text-xs text-gray-600">Greeting Message</div>
                    <input className="w-full mt-1 text-sm p-2 rounded-lg bg-white/70 ring-1 ring-white/40 outline-none" defaultValue="Hi! You're speaking with our AI agent."/>
                  </div>
                  <div className="p-3 rounded-xl bg-white/50 ring-1 ring-white/40">
                    <div className="text-xs text-gray-600">Forward To</div>
                    <input className="w-full mt-1 text-sm p-2 rounded-lg bg-white/70 ring-1 ring-white/40 outline-none" placeholder="+1 (555) 123-4567"/>
                  </div>
                </div>
              </div>
            )}
            {current === "Agents" && (
              <div className="text-sm text-gray-700">Manage prompt, voice, and handoff logic for this number.</div>
            )}
            {current === "Analytics" && (
              <div className="text-sm text-gray-700">Charts and KPIs for this number will appear here.</div>
            )}
            {current === "Call Logs" && (
              <div className="text-sm text-gray-700">Recent calls with transcripts and outcomes.</div>
            )}
            {current === "Callbacks" && (
              <div className="text-sm text-gray-700">Webhook configuration and delivery history.</div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl ring-1 ring-white/40 shadow-lg p-8 text-center text-gray-700">
          Connect a number to get started with {type.toLowerCase()} flows.
        </div>
      )}
    </div>
  );
}
