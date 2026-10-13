import { profile } from "@/data/profile";

export default function ProfilePage() {
  return (
    <div>
      {/* Top section: name, role, buttons */}
      <section className="animate-rise">
        <p className="text-sm font-semibold uppercase tracking-widest text-profile">
          Hello, I&apos;m
        </p>
        <h1 className="mt-2 font-display text-5xl font-bold sm:text-7xl">
          <span className="bg-gradient-to-r from-profile via-interests to-articles bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-4 text-xl text-muted">{profile.role}</p>
        <p className="mt-2 max-w-xl text-lg">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-profile/50 px-5 py-2 text-sm font-medium text-profile transition hover:bg-profile hover:text-bg"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Bottom section: about card and facts card */}
      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="animate-rise rounded-2xl border border-white/10 bg-surface p-6 md:col-span-2">
          <h2 className="font-display text-2xl font-semibold text-profile">About me</h2>
          <div className="mt-4 space-y-4 text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="animate-rise rounded-2xl border border-white/10 bg-surface p-6">
          <h2 className="font-display text-2xl font-semibold text-profile">Quick facts</h2>
          <dl className="mt-4 space-y-3 text-sm">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-muted">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}