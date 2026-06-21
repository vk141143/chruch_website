import { useState } from "react";
import { Bell, Lock, Moon, Globe, Trash2, Shield } from "lucide-react";

interface Toggle {
  key: string;
  label: string;
  desc: string;
}

const NOTIF_TOGGLES: Toggle[] = [
  { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
  { key: "sermons", label: "New Sermons", desc: "Alert when a new sermon is uploaded" },
  { key: "events", label: "Event Reminders", desc: "Reminders 24h before events" },
  { key: "prayer", label: "Prayer Responses", desc: "When someone prays for your request" },
  { key: "courses", label: "Course Updates", desc: "New lessons and course releases" },
];

const PREF_TOGGLES: Toggle[] = [
  { key: "darkMode", label: "Dark Mode", desc: "Switch to dark theme" },
  { key: "autoPlay", label: "Auto-play Next Lesson", desc: "Continue to next lesson automatically" },
  { key: "publicProfile", label: "Public Profile", desc: "Allow others to see your profile" },
];

export function SettingsPage() {
  const [notif, setNotif] = useState<Record<string, boolean>>({
    email: true, sermons: true, events: true, prayer: false, courses: true,
  });
  const [pref, setPref] = useState<Record<string, boolean>>({
    darkMode: false, autoPlay: true, publicProfile: true,
  });

  const Toggle = ({
    enabled,
    onToggle,
  }: {
    enabled: boolean;
    onToggle: () => void;
  }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors ${
        enabled ? "bg-gradient-gold" : "bg-border"
      }`}
    >
      <span
        className={`mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
          enabled ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
      <h2 className="font-serif text-2xl text-navy">Settings</h2>

      {/* Notifications */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="h-5 w-5 text-gold" />
          <h3 className="font-serif text-lg text-navy">Notifications</h3>
        </div>
        <div className="space-y-4">
          {NOTIF_TOGGLES.map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-navy">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
              <Toggle
                enabled={notif[key]}
                onToggle={() =>
                  setNotif((p) => ({ ...p, [key]: !p[key] }))
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <Moon className="h-5 w-5 text-gold" />
          <h3 className="font-serif text-lg text-navy">Preferences</h3>
        </div>
        <div className="space-y-4">
          {PREF_TOGGLES.map(({ key, label, desc }) => (
            <div key={key} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-navy">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
              <Toggle
                enabled={pref[key]}
                onToggle={() => setPref((p) => ({ ...p, [key]: !p[key] }))}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-gold" />
          <h3 className="font-serif text-lg text-navy">Privacy & Security</h3>
        </div>
        <div className="space-y-2">
          {[
            { icon: Lock, label: "Change Password", desc: "Update your account password" },
            { icon: Globe, label: "Privacy Settings", desc: "Manage who sees your activity" },
          ].map(({ icon: Icon, label, desc }) => (
            <button
              key={label}
              className="w-full flex items-center gap-4 rounded-xl p-3 hover:bg-cream transition-colors text-left"
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-cream">
                <Icon className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-navy">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5">
        <h3 className="font-serif text-lg text-red-700 mb-3">Danger Zone</h3>
        <button className="flex items-center gap-2 rounded-full border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors">
          <Trash2 className="h-4 w-4" /> Delete My Account
        </button>
        <p className="text-xs text-red-400 mt-2">
          This action is permanent and cannot be undone.
        </p>
      </div>
    </div>
  );
}
