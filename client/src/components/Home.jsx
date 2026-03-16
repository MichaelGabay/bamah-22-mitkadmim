function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white antialiased">
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-20 left-1/2 h-64 w-64 rounded-full bg-teal-500/15 blur-[80px]" />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Wave<span className="text-cyan-400">Rider</span>
        </span>
        <nav className="flex items-center gap-3 sm:gap-5">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-white/5 hover:text-white"
          >
            Log in
          </a>
          <a
            href="/register"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#0a1628] transition hover:bg-cyan-400"
          >
            Sign up
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400/90">
          Surf Shop
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Ride the wave.
          <br />
          <span className="text-cyan-400">Live the line.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-300 sm:text-xl">
          Boards, wetsuits, and gear for every break. From first foamie to your next shortboard.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-[#0a1628] shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 hover:shadow-cyan-500/30"
          >
            Get started
          </a>
          <a
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Log in
          </a>
        </div>
      </section>

      {/* Category strip */}
      <section className="relative z-10 border-t border-white/10 bg-black/20 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Shop by style
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/10">
              <span className="text-4xl" aria-hidden>🏄</span>
              <h3 className="mt-4 font-semibold text-white">Boards</h3>
              <p className="mt-2 text-sm text-slate-400">Shortboards, longboards, foamies</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/10">
              <span className="text-4xl" aria-hidden>🤿</span>
              <h3 className="mt-4 font-semibold text-white">Wetsuits & rash guards</h3>
              <p className="mt-2 text-sm text-slate-400">Stay warm, stay protected</p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/10">
              <span className="text-4xl" aria-hidden>🌊</span>
              <h3 className="mt-4 font-semibold text-white">Accessories</h3>
              <p className="mt-2 text-sm text-slate-400">Leashes, wax, bags & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center">
        <p className="text-slate-500">
          WaveRider Surf Shop — gear for the ocean.{" "}
          <a href="/login" className="text-cyan-400 hover:underline">Log in</a>
          {" · "}
          <a href="/register" className="text-cyan-400 hover:underline">Sign up</a>
        </p>
      </footer>
    </main>
  )
}

export default Home
