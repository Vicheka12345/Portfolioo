import photo from "../assets/photo.jpg";
import "./Hero.css";

const STACK = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"];

const PROJECTS = [
  {
    id: 1,
    title: "Viz Clinic",
    desc: "A clean, modern clinic website built with React and Vite.",
    tags: ["React", "Vite"],
    url: "https://viz-clinic.vercel.app/",
  },
  {
    id: 2,
    title: "Bakery",
    desc: "A simple React demo showcasing a fast, component-driven front end.",
    tags: ["React", "Vite"],
    url: "https://mytesting-tau.vercel.app/",
  },
  {
    id: 3,
    title: "Task Management",
    desc: "A task management app for organizing and tracking your daily work.",
    tags: ["React", "Vite"],
    url: "https://task-management-khaki-theta.vercel.app/",
  },
  {
    id: 4,
    title: "GitHub Projects",
    desc: "A collection of front-end builds and experiments — browse them all on GitHub.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    url: "https://github.com/Vicheka12345",
  },
];

export default function Hero() {
  return (
    <div className="hero-wrap">
      <header className="hero-top">
        <div className="hero-mark">VV / front-end</div>
        <nav>
          <a href="mailto:vichekaz990@gmail.com" target="_top" rel="noopener">
            contact
          </a>
          <a href="#work">work</a>
          <a href="tel:+85512621443" target="_top" rel="noopener">
            phone
          </a>
        </nav>
      </header>

      <main className="hero-main">
        <div>
          <p className="hero-role-line">
            <span className="hero-dot" />
            Available for front-end roles · Phnom Penh, Cambodia
          </p>

          <h1 className="hero-title">
            Vun Vicheka
            <span>builds clean, responsive interfaces.</span>
          </h1>

          <p className="hero-tagline">
            A front-end developer who turns designs into fast, component-driven
            websites with React and Tailwind CSS — with an eye for visual detail
            sharpened by years of graphic design work.
          </p>

          <div className="hero-stack">
            {STACK.map((item) => (
              <span className="hero-chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="hero-btn" href="#work">
              See my work ↓
            </a>
          </div>
        </div>

        <div className="hero-portrait-frame">
          <div className="hero-ring" />
          <img src={photo} alt="Portrait of Vun Vicheka" />
          <div className="hero-tag">Phnom Penh, KH</div>
        </div>
      </main>

      {/* ── Work Section ── */}
      <section id="work" className="work-section">
        <div className="work-inner">
          <p className="work-label">Selected Work</p>
          <h2 className="work-heading">Projects</h2>
          <div className="work-grid">
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                className="work-card"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="work-card-number">0{p.id}</div>
                <div className="work-card-body">
                  <h3 className="work-card-title">{p.title}</h3>
                  <p className="work-card-desc">{p.desc}</p>
                  <div className="work-card-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="work-card-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="work-card-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="hero-bottom">
        <span>vichekaz990@gmail.com</span>
        <span>+855 12 621 443</span>
        <span>© 2026 Vun Vicheka</span>
      </footer>
    </div>
  );
}
