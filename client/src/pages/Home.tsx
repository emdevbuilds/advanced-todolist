import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
      }}
    >
      {/* Subtle rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-400/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-emerald-400/[0.07] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-5">
        <span className="font-bold text-lg tracking-tight text-white">
          task<span className="text-emerald-400">flow</span>
        </span>
        <div className="flex gap-3">
          <NavLink to="/login">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/15 text-white hover:bg-white/5 hover:text-white"
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button
              size="sm"
              className="bg-emerald-400 text-black hover:bg-emerald-300 font-semibold"
            >
              Get Started
            </Button>
          </NavLink>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400 text-xs">
            Now with smart task grouping
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-xl">
          Stay Organized, <br />
          Stay <span className="text-emerald-400">Creative.</span>
        </h1>

        <p className="text-white/50 text-base leading-relaxed max-w-sm font-light">
          Organize your tasks and unleash your creativity with a powerful todo
          app built for focused people.
        </p>

        <div className="flex gap-3">
          <NavLink to="/signup">
            <Button
              className="bg-emerald-400 text-black hover:bg-emerald-300 font-bold px-6"
              size="lg"
            >
              Get Started — Free
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/15 text-white hover:bg-white/5 hover:text-white px-6"
            >
              Login
            </Button>
          </NavLink>
        </div>

        {/* Stats */}
        <div className="flex gap-10 pt-4">
          {[
            { num: "10k+", label: "Users" },
            { num: "99%", label: "Uptime" },
            { num: "4.9★", label: "Rating" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-emerald-400 font-bold text-xl">{num}</div>
              <div className="text-white/30 text-[11px] uppercase tracking-widest mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
