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
  Phone,
  MapPin,
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

        <div className="contact-layout">
          <div className="contact-info-card">
            <p className="tag">DIRECT CONTACT</p>
            <h3>Let’s build something useful.</h3>
            <p>
              Share your idea, product need, or engineering challenge. I’ll review it and
              respond with the best next step.
            </p>

            <div className="contact-methods">
              <a href="mailto:support@davecy.com">
                <Mail size={20} />
                <span>support@davecy.com</span>
              </a>

              <a href="#contact">
                <Phone size={20} />
                <span>Available by request</span>
              </a>

              <a href="#contact">
                <MapPin size={20} />
                <span>Minnesota / Remote</span>
              </a>
            </div>

            <div className="response-box">
              <CheckCircle2 size={22} />
              <div>
                <strong>Best for</strong>
                <span>Mobile apps, AI tools, dashboards, automation, and engineering systems.</span>
              </div>
            </div>
          </div>

          <form className="contact-form improved" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Company / Organization
                <input type="text" name="company" placeholder="Company name" />
              </label>

              <label>
                Project Type
                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>Select project type</option>
                  <option>AI Platform</option>
                  <option>Engineering System</option>
                  <option>Mobile App</option>
                  <option>Website</option>
                  <option>Data / Analytics Dashboard</option>
                  <option>Consulting</option>
                </select>
              </label>
            </div>

            <label>
              Budget Range
              <select name="budget" defaultValue="">
                <option value="">Select optional budget range</option>
                <option>Under $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label>
              Timeline
              <select name="timeline" defaultValue="">
                <option value="">Select optional timeline</option>
                <option>ASAP</option>
                <option>2 - 4 weeks</option>
                <option>1 - 3 months</option>
                <option>Flexible</option>
              </select>
            </label>

            <label>
              Project Message
              <textarea
                rows="6"
                name="message"
                placeholder="Tell me what you want to build, improve, automate, or analyze..."
                required
              ></textarea>
            </label>

            <button className="primary-btn form-submit" type="submit">
              Send Project Inquiry <Send size={18} />
            </button>

            {sent && (
              <div className="success-message">
                <CheckCircle2 size={20} />
                <span>
                  Message captured in the demo form. Connect this to Formspree, EmailJS,
                  Firebase, Resend, or your backend to receive real emails.
                </span>
              </div>
            )}
          </form>
        </div>
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
