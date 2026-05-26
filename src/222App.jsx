import React, { useState } from "react";
import "./styles.css";
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Github,
  Apple,
  Activity,
  Globe,
  ShieldCheck,
  Bot,
  Cpu,
  Waves,
  LineChart,
  Rocket,
  Play,
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  { value: "15+", label: "Systems Designed" },
  { value: "AI", label: "Integrated Workflows" },
  { value: "Flutter + React", label: "Cross Platform Stack" },
  { value: "24/7", label: "Innovation Pipeline" },
];

const products = [
  "Ride Akagali",
  "DeskHealth",
  "AI Engineering Assistant",
  "Predictive SPC Platform",
];

export default function App() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="app">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <nav className="navbar">
        <div className="logo">DAVECY LLC</div>

        <div className="nav-links">
          <a href="#vision">Vision</a>
          <a href="#products">Products</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Build With Us
        </a>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="tag">PHASE 7 • ELITE VISUAL DIRECTION</p>

            <h1>
              Engineering Precision.
              <br />
              <span>Nature Calmness.</span>
              <br />
              Modern AI Systems.
            </h1>

            <p>
              DAVECY LLC blends engineering intelligence, product design,
              AI systems, analytics, mobility, and calm modern experiences
              into premium digital ecosystems.
            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-btn">
                Explore Products <ArrowRight size={18} />
              </a>

              <a href="#ai" className="glass-btn">
                AI Experience <BrainCircuit size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/nature.jpg" alt="Nature" />

            <div className="floating-card top">
              <Sparkles size={20} />
              <div>
                <strong>Modern Product Identity</strong>
                <span>Engineering + Nature + AI</span>
              </div>
            </div>

            <div className="floating-card bottom">
              <Activity size={20} />
              <div>
                <strong>Live Product Systems</strong>
                <span>Interactive Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        {metrics.map((item) => (
          <div className="metric-card" key={item.label}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section id="vision" className="vision-section">
        <div className="vision-copy">
          <p className="tag">VISUAL IDENTITY</p>

          <h2>
            Calm futuristic experiences with engineering-grade precision.
          </h2>

          <p>
            The DAVECY design language combines emerald lighting,
            dark graphite environments, glassmorphism, cinematic spacing,
            AI interaction systems, and nature-inspired calmness.
          </p>

          <div className="vision-icons">
            <div><Cpu size={26} /><span>Engineering</span></div>
            <div><Waves size={26} /><span>Nature</span></div>
            <div><BrainCircuit size={26} /><span>AI</span></div>
            <div><Globe size={26} /><span>Systems</span></div>
          </div>
        </div>

        <div className="vision-panel">
          <img src="/images/nature.jpg" alt="Visual Identity" />
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="section-center">
          <p className="tag">PRODUCT ECOSYSTEM</p>
          <h2>Interactive Product Universe</h2>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item}>
              <div className="product-image">
                <img src="/images/nature.jpg" alt={item} />
              </div>

              <div className="product-copy">
                <h3>{item}</h3>

                <p>
                  Intelligent product ecosystem with scalable engineering and AI workflows.
                </p>

                <div className="product-actions">
                  <a href="#contact">
                    <Apple size={16} />
                    App Store
                  </a>

                  <a href="#contact">
                    <Github size={16} />
                    GitHub
                  </a>

                  <a href="#contact">
                    <Play size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="ai-section">
        <div className="ai-panel">
          <div className="ai-copy">
            <p className="tag">AI ASSISTANT</p>

            <h2>Future DAVECY AI Experience</h2>

            <p>
              A future intelligent assistant capable of helping users:
            </p>

            <ul>
              <li>Choose engineering directions</li>
              <li>Plan AI product development</li>
              <li>Understand manufacturing systems</li>
              <li>Select technology stacks</li>
              <li>Build online/offline platforms</li>
            </ul>

            <a href="#contact" className="primary-btn">
              Discuss AI Systems <ArrowRight size={18} />
            </a>
          </div>

          <div className="ai-visual">
            <img src="/images/nature.jpg" alt="AI" />

            <div className="glass-overlay">
              <Bot size={24} />
              <span>AI Guidance System</span>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-center">
          <p className="tag">INNOVATION TIMELINE</p>
          <h2>Company Evolution</h2>
        </div>

        <div className="timeline">
          <div className="timeline-card">
            <Rocket size={26} />
            <h3>Engineering Systems</h3>
            <p>SPC platforms, analytics, and process intelligence.</p>
          </div>

          <div className="timeline-card">
            <LineChart size={26} />
            <h3>AI + Product Systems</h3>
            <p>Integrated AI workflows and intelligent product ecosystems.</p>
          </div>

          <div className="timeline-card">
            <ShieldCheck size={26} />
            <h3>Interactive Platforms</h3>
            <p>Scalable applications with real-world engineering impact.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-center">
          <p className="tag">CONTACT</p>
          <h2>Start a Project</h2>
          <p className="contact-intro">
            Reach out for app development, engineering tools, AI systems, product strategy,
            analytics dashboards, or collaboration opportunities.
          </p>
        </div>

        <form className="contact-form improved" onSubmit={handleSubmit}>

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                placeholder="Company or organization"
              />
            </label>

            <label>
              Reason for Contact
              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project, idea, or reason for reaching out..."
                required
              ></textarea>
            </label>

            <button className="primary-btn form-submit" type="submit">
              Send Message <Send size={18} />
            </button>

            {sent && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                <span>
                  Message captured successfully.
                </span>
              </div>
            )}
          </form>
      </section>

      <footer>
        <h2>DAVECY LLC</h2>
        <p>
          Engineering precision. Nature calmness. Modern AI systems.
        </p>
      </footer>
    </main>
  );
}
