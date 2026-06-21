import { useState } from "react";
import { Camera, Save } from "lucide-react";
import type { AuthUser } from "@/lib/auth";

interface Props {
  user: AuthUser;
}

export function ProfilePage({ user }: Props) {
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: "+1 (555) 000-0000",
    location: "Lagos, Nigeria",
    bio: "A faithful servant of God, passionate about Bible study and community.",
    birthday: "1990-03-15",
  });
  const [saved, setSaved] = useState(false);

  const initials = form.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
      {/* Avatar */}
      <div className="rounded-2xl bg-navy text-white p-6 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-2xl shadow-gold">
            {initials}
          </div>
          <button className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-white text-navy shadow border border-border">
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="relative text-center sm:text-left">
          <h2 className="font-serif text-2xl">{form.name}</h2>
          <p className="text-white/60 text-sm mt-0.5">{form.email}</p>
          <span className="inline-block mt-2 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
            Member
          </span>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-2xl bg-background border border-border p-6 space-y-4">
        <h3 className="font-serif text-lg text-navy">Personal Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", key: "name", type: "text" },
            { label: "Email Address", key: "email", type: "email" },
            { label: "Phone Number", key: "phone", type: "tel" },
            { label: "Location", key: "location", type: "text" },
            { label: "Birthday", key: "birthday", type: "date" },
          ].map(({ label, key, type }) => (
            <div key={key}>
              <label className="text-xs font-medium text-navy mb-1.5 block">
                {label}
              </label>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-navy mb-1.5 block">
              Bio
            </label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
              rows={3}
              className="w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
            saved
              ? "bg-green-100 text-green-700"
              : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"
          }`}
        >
          <Save className="h-4 w-4" />
          {saved ? "Changes Saved ✓" : "Save Changes"}
        </button>
      </div>

      {/* Ministry Info */}
      <div className="rounded-2xl bg-background border border-border p-6">
        <h3 className="font-serif text-lg text-navy mb-4">Ministry Involvement</h3>
        <div className="space-y-3">
          {[
            { label: "Member Since", value: "January 2023" },
            { label: "Small Group", value: "Grace & Truth" },
            { label: "Ministry Team", value: "Worship & Media" },
            { label: "Baptism Date", value: "March 15, 2023" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className="text-sm font-medium text-navy">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
