import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, isLoading, error, clearError } = useAuthStore();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async () => {
    const success = await signup(form.name, form.email, form.password);
    if (success) navigate("/dashboard");
  };

  return (
    <main className="min-h-screen grid md:grid-cols-2 bg-[#050505]">
      {/* Left panel */}
      <div
        className="hidden md:flex flex-col justify-center px-12 py-16 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(140% 140% at 50% 0%, #000 30%, #0a3a0a 100%)",
        }}
      >
        <div className="absolute w-[500px] h-[500px] rounded-full border border-emerald-400/[0.06] -bottom-48 -right-48 pointer-events-none" />
        <div className="relative z-10">
          <div className="font-bold text-xl text-white mb-14 tracking-tight">
            task<span className="text-emerald-400">flow</span>
          </div>
          <h2 className="text-3xl font-bold text-white leading-tight tracking-tight mb-3">
            Start organizing <br /> your life today.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs mb-10">
            Join thousands of focused people who ship more with taskflow.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: "✅", text: "Unlimited tasks, zero clutter" },
              { icon: "🎯", text: "Track completed tasks and stay motivated" },
              { icon: "🔒", text: "Your data is private and secure" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-sm flex-shrink-0">
                  {icon}
                </div>
                <span className="text-white/45 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex flex-col justify-center px-8 md:px-14 py-16 border-l border-white/[0.04]">
        {/* Mobile logo */}
        <div className="font-bold text-xl text-white mb-10 tracking-tight md:hidden">
          task<span className="text-emerald-400">flow</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          Create your account
        </h1>
        <p className="text-white/40 text-sm mb-8">
          Free forever. No credit card needed.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-[11px] text-white/40 uppercase tracking-wider">
              Full Name
            </Label>
            <Input
              placeholder="Emmanuel"
              value={form.name}
              onChange={(e) => {
                clearError();
                setForm({ ...form, name: e.target.value });
              }}
              className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 focus-visible:border-emerald-400/40 focus-visible:ring-0"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-[11px] text-white/40 uppercase tracking-wider">
              Email
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => {
                clearError();
                setForm({ ...form, email: e.target.value });
              }}
              className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 focus-visible:border-emerald-400/40 focus-visible:ring-0"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-[11px] text-white/40 uppercase tracking-wider">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => {
                clearError();
                setForm({ ...form, password: e.target.value });
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="bg-white/[0.03] border-white/[0.07] text-white placeholder:text-white/20 focus-visible:border-emerald-400/40 focus-visible:ring-0"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-emerald-400 text-black hover:bg-emerald-300 font-bold mt-1"
          >
            {isLoading ? "Creating account..." : "Create free account"}
          </Button>
        </div>

        <p className="text-center text-white/30 text-sm mt-6">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Log in
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default Signup;
