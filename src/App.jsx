import React, { useState } from "react";
import "./styles.css";
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Activity,
  Globe,
  ShieldCheck,
  Bot,
  Cpu,
  Waves,
  LineChart,
  Rocket,
  Mail,
  Send,
} from "lucide-react";

const metrics = [
  { value: "Engineering", label: "Manufacturing & R&D workflows" },
  { value: "Python", label: "Data-driven desktop applications" },
  { value: "Analytics", label: "Experiments, inspection & reporting" },
  { value: "Product Design", label: "Practical tools for everyday work" },
];

const products = [
  { name: "Engineering Data & Desktop Tools", image: "/images/ai_eng.png", audience: "Engineering teams, labs & small manufacturers", description: "Custom Python applications for processing test data, comparing datasets, visualizing results, and preparing reports.", example: "Example project: consolidate CSV test files and generate consistent plots and summaries." },
  { name: "Predictive SPC Platform", image: "/images/ai_eng.png", audience: "Manufacturing & process-development teams", description: "An engineering analytics initiative focused on statistical process control, trend analysis, and process monitoring.", example: "Discuss your process data, monitoring needs, and current demonstration options." },
  { name: "AI Engineering Assistant", image: "/images/aiassistant.png", audience: "Engineering & product-development teams", description: "A planned assistant for organizing technical questions, exploring development approaches, and guiding software and engineering workflows.", example: "Share a workflow you would like to simplify or discuss a potential pilot." },
  { name: "Ride Akagali", image: "/images/akagali.png", audience: "Cyclists & cycling groups", description: "A cycling project focused on ride tracking, route information, and group coordination.", example: "Ask about current features, demonstrations, and opportunities to provide feedback." },
  { name: "DeskHealth", image: "/images/deskhealth.png", audience: "Desk-based workers & workplace teams", description: "A workplace wellness project focused on hydration, movement, and everyday desk habits.", example: "Discuss the experience and whether it fits your workplace or personal routine." },
];

export default function App() {
  const [interest, setInterest] = useState("");

  return (
    <main className="app">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <nav className="navbar">
        <div className="logo">DAVECY LLC</div>

        <div className="nav-links">
          <a href="#services">Engineering Services</a>
          <a href="#products">Products</a>
          <a href="#ai">Python + AI</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Build With Us
        </a>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="tag">ENGINEERING SERVICES & SOFTWARE</p>

            <h1>
              Engineering Expertise.
              <br />
              <span>Data-Driven Desktop Apps.</span>
              <br />
              Practical Product Development.
            </h1>

            <p>
              DAVECY LLC develops engineering software and provides support for manufacturing, R&D, and product development. Turn test data, repetitive tasks, and technical ideas into useful desktop applications, clear analysis, and practical designs.

            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-btn">
                Explore Products <ArrowRight size={18} />
              </a>

              <a href="#services" className="glass-btn">
                Engineering Services <BrainCircuit size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/images/nature1.jpg" alt="Nature" />

            <div className="floating-card top">
              <Sparkles size={20} />
              <div>
                <strong>Engineering & Software</strong>
                <span>Design · Analyze · Automate</span>
              </div>
            </div>

            <div className="floating-card bottom">
              <Activity size={20} />
              <div>
                <strong>Purpose-Built Tools</strong>
                <span>Desktop · Data · Product Development</span>
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
          <p className="tag">OUR APPROACH</p>

          <h2>
            Start with the engineering problem. Build around the workflow.
          </h2>

          <p>
              DAVECY LLC focuses on research, design, and the development of intelligent
              engineering systems that combine modern software with practical real-world
              applications. The company actively explores secure offline AI technologies
              designed to remain available without constant internet access, enabling
              reliable performance, privacy, and resilience. By integrating AI workflows
              with mechanical calculations, engineering analytics, predictive systems,
              and modern user experiences, DAVECY aims to create innovative tools that
              bridge the gap between advanced technology and practical engineering solutions.
          </p>
          
        </div>

        <div className="vision-panel">
          <img src="/images/nature2.jpg" alt="Visual Identity" />
        </div>
      </section>

      
      <section className="company-strength-section">
        <div className="company-strength-grid">

          <div className="strength-copy">
            <p className="tag">WHY DAVECY LLC</p>

            <h2>
              Engineering-focused products built for real-world impact.
            </h2>

            <p>
              DAVECY LLC develops modern digital systems that combine engineering,
              AI workflows, analytics, mobility, wellness, and scalable product design.
              Every product is designed around practical real-world use cases rather than
              trends alone.
            </p>

            <p>
              The DAVECY ecosystem focuses on intelligent software experiences,
              practical engineering workflows, clear design, and meaningful user interaction.
            </p>

            <div className="strength-highlights">
              <div>
                <strong>Engineering Precision</strong>
                <span>Built with analytical and technical thinking.</span>
              </div>

              <div>
                <strong>Modern Product Systems</strong>
                <span>Cross-platform experiences for mobile and web.</span>
              </div>

              <div>
                <strong>AI + Analytics</strong>
                <span>Smart workflows, automation, and data-driven systems.</span>
              </div>

              <div>
                <strong>Human-Centered Design</strong>
                <span>Clean calm interfaces inspired by nature and simplicity.</span>
              </div>
            </div>
          </div>

          <div className="strength-panel">
            <img src="/images/nature3.jpg" alt="DAVECY Systems" />

            <div className="strength-overlay">
              <div>
                <strong>DAVECY Product Ecosystem</strong>
                <span>Engineering • AI • Analytics • Mobility • Wellness</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="services" className="engineering-services">
        <div className="section-center"><p className="tag">ENGINEERING SERVICES</p><h2>Technical experience. Useful deliverables.</h2><p className="contact-intro">Support for manufacturing, R&D, and product-development teams, with a defined scope built around your project.</p></div>
        <div className="engineering-grid">
          <article><h3>Data-driven desktop applications</h3><p>Python interfaces for test data, file conversion, dataset comparison, visualization, and automated reporting.</p><strong>Example engagement</strong><p>Replace a repetitive CSV-processing workflow with a desktop tool for importing, reviewing, and exporting results.</p></article>
          <article><h3>Engineering data analysis</h3><p>Experimental analysis using DOE, ANOVA, regression, and statistical visualization.</p><strong>Example engagement</strong><p>Compare process trials and summarize the relationships between settings and measured responses.</p></article>
          <article><h3>CAD, fixtures & product development</h3><p>Mechanical design, CAD/CAM support, tolerance evaluation, and fixtures for prototyping, inspection, and testing.</p><strong>Example engagement</strong><p>Develop a fixture concept and drawings around your part, measurement requirements, and intended use.</p></article>
          <article><h3>Inspection & engineering visualization</h3><p>Custom tools for calibrated image measurements, STL exploration, and engineering data visualization.</p><strong>Example engagement</strong><p>Define a measurement workflow and build an interface that helps users review and export findings.</p></article>
        </div>
        <p className="scope-note">Project scope, deliverables, and validation needs are agreed before work begins.</p>
        <a href="#contact" className="primary-btn" onClick={() => setInterest("Engineering services")}>Discuss an engineering project <ArrowRight size={18} /></a>
      </section>
      <section id="products" className="products-section">
        <div className="section-center"><p className="tag">SOFTWARE & PRODUCT PROJECTS</p><h2>Find the right tool for your work.</h2><p className="contact-intro">Explore Davecy’s engineering, cycling, and workplace tools. Contact us to confirm current availability, features, and demonstration options.</p></div>
        <div className="product-grid">
          {products.map((item) => (
            <article className="product-card" key={item.name}>
              <div className="product-image"><img src={item.image} alt={`${item.name} project illustration`} loading="lazy" /></div>
              <div className="product-copy">
                <p className="product-audience">{item.audience}</p><h3>{item.name}</h3>
                <p>{item.description}</p><p className="product-example">{item.example}</p>
                <div className="product-actions"><a href="#contact" onClick={() => setInterest(item.name)} aria-label={`Ask about ${item.name}`}>Ask about this product <ArrowRight size={16} /></a></div>
              </div>
            </article>
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
            <img src="/images/nature4.jpg" alt="AI" />

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
          <h2>Discuss Your Project or Product Interest</h2>
          <p className="contact-intro">
            Tell us about your engineering challenge or the product you’re interested in. Include the data, workflow, or outcome you need help with.
          </p>
        </div>

        <form
          className="contact-form improved"
          action="https://formspree.io/f/mojbpknv"
          method="POST"
        >

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
              Product or Service
              <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} required>
                <option value="" disabled>Select a product or service</option>
                <option value="Engineering services">Engineering services</option>
                {products.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
                <option value="Other project">Other project</option>
              </select>
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


          </form>
      </section>

      
<style jsx="true">{`
.ecosystem-strength-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
  margin-bottom:56px;
}

.ecosystem-strength-card{
  padding:30px 26px;
  border-radius:30px;
  backdrop-filter:blur(18px);
  background:rgba(255,255,255,.05);
  border:1px solid rgba(83,213,132,.18);
  transition:.3s ease;
}

.ecosystem-strength-card:hover{
  transform:translateY(-6px);
  border-color:rgba(83,213,132,.42);
}

.ecosystem-strength-card h3{
  font-size:1.45rem;
  font-weight:300;
  margin-bottom:14px;
}

.ecosystem-strength-card p{
  color:#c8c8c8;
  line-height:1.7;
}

@media(max-width:1100px){
  .ecosystem-strength-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:760px){
  .ecosystem-strength-grid{
    grid-template-columns:1fr;
  }
}


.company-strength-section{
  padding:40px 6vw 120px;
  position:relative;
  z-index:2;
}

.company-strength-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
}

.strength-copy h2{
  font-size:clamp(2.8rem,5vw,5rem);
  font-weight:200;
  line-height:1;
  margin-bottom:24px;
}

.strength-copy p{
  color:#d0d0d0;
  line-height:1.85;
  margin-bottom:20px;
}

.strength-highlights{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
  margin-top:34px;
}

.strength-highlights div{
  padding:22px;
  border-radius:24px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(83,213,132,.16);
}

.strength-highlights strong{
  display:block;
  margin-bottom:8px;
  color:white;
  font-weight:400;
}

.strength-highlights span{
  color:#c8c8c8;
  line-height:1.6;
}

.strength-panel{
  position:relative;
  overflow:hidden;
  border-radius:38px;
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 30px 100px rgba(0,0,0,.35);
}

.strength-panel img{
  width:100%;
  height:680px;
  object-fit:cover;
  display:block;
}

.strength-overlay{
  position:absolute;
  left:24px;
  right:24px;
  bottom:24px;
  padding:22px;
  border-radius:24px;
  backdrop-filter:blur(18px);
  background:rgba(16,18,17,.62);
  border:1px solid rgba(255,255,255,.12);
}

.strength-overlay strong{
  display:block;
  margin-bottom:8px;
}

.strength-overlay span{
  color:#53d584;
}

.platform-section{
  padding:0 6vw 120px;
  position:relative;
  z-index:2;
}

.platform-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
}

.platform-card{
  padding:34px 28px;
  border-radius:30px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(83,213,132,.18);
  backdrop-filter:blur(18px);
}

.platform-card h3{
  font-size:1.5rem;
  font-weight:300;
  margin-bottom:16px;
}

.platform-card p{
  color:#c8c8c8;
  line-height:1.75;
}

@media(max-width:1100px){
  .company-strength-grid,
  .platform-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:760px){
  .company-strength-grid,
  .platform-grid,
  .strength-highlights{
    grid-template-columns:1fr;
  }

  .company-strength-section,
  .platform-section{
    padding:80px 5vw;
  }

  .strength-panel img{
    height:420px;
  }
}
`}</style>

      <footer>
        <h2>DAVECY LLC</h2>
        <p>
          Engineering precision. Nature calmness. Modern AI systems.
        </p>
      </footer>
    </main>
  );
}
