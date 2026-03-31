import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaWindows, FaApple, FaShieldAlt, FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';
import { VscAzure, VscTerminalPowershell } from 'react-icons/vsc';
import { MdSecurity, MdComputer, MdCloud, MdSupportAgent, MdManageAccounts, MdPhoneIphone } from 'react-icons/md';
import headshot from './headshot.jpeg';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Cross-Platform Intune Fleet Management',
      description: 'Administer Microsoft Intune across a multi-site enterprise fleet encompassing Windows, macOS, and iOS devices — managing compliance policies, configuration profiles, app deployments, and Proactive Remediations.',
      tags: ['Intune', 'MDM/MAM', 'Cross-Platform', 'Compliance'],
    },
    {
      title: 'Zero-Touch Autopilot Provisioning',
      description: 'Deployed Windows Autopilot for zero-touch provisioning across the organization, reducing onboarding time and ensuring consistent security baselines on every new endpoint.',
      tags: ['Autopilot', 'Windows 11', 'Intune', 'Zero Touch'],
    },
    {
      title: 'Conditional Access & Zero Trust Architecture',
      description: 'Architected and maintain Conditional Access policies in Microsoft Entra ID, enforcing Zero Trust principles including device compliance gates, MFA requirements, and platform-specific access controls.',
      tags: ['Entra ID', 'Conditional Access', 'Zero Trust', 'MFA'],
    },
    {
      title: 'Endpoint Security & Defender Onboarding',
      description: 'Led cross-platform endpoint security initiatives including Microsoft Defender for Endpoint onboarding, Full Disk Access PPPC profiles for macOS, BitLocker key escrow, and Secure Boot remediation fleet-wide.',
      tags: ['Defender for Endpoint', 'BitLocker', 'macOS', 'Security'],
    },
    {
      title: 'iPad Kiosk Deployment for Multi-Site ADP',
      description: 'Designed and deployed iPad kiosk configurations via Intune for ADP time clock use across multiple sites, including Wi-Fi profile management, managed app deployment, and Guided Access policies.',
      tags: ['iOS', 'Kiosk Mode', 'Intune', 'ADP'],
    },
    {
      title: 'PowerShell Fleet Remediation Automation',
      description: 'Developed and deployed PowerShell and Bash-based Proactive Remediations for fleet-wide debloat operations, unauthorized software detection, and configuration drift remediation.',
      tags: ['PowerShell', 'Bash', 'Proactive Remediations', 'Automation'],
    },
  ];

  const skills = [
    { name: 'Microsoft Intune', icon: <MdComputer /> },
    { name: 'Entra ID', icon: <VscAzure /> },
    { name: 'PowerShell', icon: <VscTerminalPowershell /> },
    { name: 'Windows 10/11', icon: <FaWindows /> },
    { name: 'Defender for Endpoint', icon: <MdSecurity /> },
    { name: 'Microsoft 365', icon: <MdCloud /> },
    { name: 'End User Support', icon: <MdSupportAgent /> },
    { name: 'Identity Governance', icon: <MdManageAccounts /> },
    { name: 'macOS Management', icon: <FaApple /> },
    { name: 'iOS / iPadOS', icon: <MdPhoneIphone /> },
  ];

  const experience = [
    {
      role: 'IT Engineer',
      company: 'Dober',
      location: 'Woodridge, IL',
      period: 'Sep 2024 - Present',
      highlights: [
        'Administer Microsoft Intune across a multi-site enterprise fleet (Windows, macOS, iOS)',
        'Architect Conditional Access policies enforcing Zero Trust principles in Entra ID',
        'Deploy Windows Autopilot for zero-touch provisioning with consistent security baselines',
        'Lead cross-platform endpoint security with Defender for Endpoint, BitLocker, and Secure Boot',
        'Manage M365 Defender incident response and Automated Investigation & Response workflows',
      ],
    },
    {
      role: 'Advanced Repair Agent',
      company: 'Geek Squad - Best Buy',
      location: 'Joliet, IL',
      period: 'Feb 2024 - Sep 2024',
      highlights: [
        'Diagnosed and repaired hardware/software issues across PCs, mobile devices, and peripherals',
        'Performed OS reinstallation, data migration, malware remediation, and network troubleshooting',
      ],
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="hero" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="about" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="skills" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="experience" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link to="projects" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="certifications" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Certs & Edu</Link>
          <Link to="contact" smooth duration={500} offset={-80} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img src={headshot} alt="Bryan Moses" className="hero-image" />
          </div>
          <h1 className="hero-title">Bryan Moses</h1>
          <p className="hero-subtitle">Endpoint Engineer | Identity & Security</p>
          <p className="hero-tagline">
            Building scalable, secure endpoint solutions with Microsoft Intune and Zero Trust architecture
          </p>
          <Link to="about" smooth duration={500} offset={-80} className="scroll-indicator">
            <FaChevronDown />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              Endpoint and identity management professional with hands-on expertise in Microsoft Intune,
              Entra ID, Microsoft Defender for Endpoint, and Zero Trust architecture across multi-site
              enterprise environments. I specialize in designing device lifecycle management strategies,
              Conditional Access policies, Autopilot provisioning, and cross-platform endpoint security
              for Windows, macOS, and iOS fleets.
            </p>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="experience-company">{job.company} — {job.location}</p>
                  </div>
                  <span className="experience-period">{job.period}</span>
                </div>
                <ul className="experience-highlights">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-card-accent" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <div className="section-container">
          <h2 className="section-title">Certifications & Education</h2>
          <div className="certs-grid">
            <a href="https://learn.microsoft.com/en-us/users/BryanMoses-9961/credentials/5A8C25F6145B9F27" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
              <div className="cert-badge">
                <FaShieldAlt className="cert-icon" />
              </div>
              <h3>MD-102</h3>
              <p>Endpoint Administrator</p>
              <span className="cert-issuer">Microsoft Certified</span>
            </a>
            <div className="cert-card">
              <div className="cert-badge cert-badge-progress">
                <MdManageAccounts className="cert-icon" />
              </div>
              <h3>SC-300</h3>
              <p>Identity & Access Administrator</p>
              <span className="cert-status">In Progress</span>
            </div>
            <div className="cert-card">
              <div className="cert-badge cert-badge-edu">
                <FaGraduationCap className="cert-icon" />
              </div>
              <h3>B.S. Computer Science</h3>
              <p>& Artificial Intelligence</p>
              <span className="cert-issuer">Lewis University — 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="section-container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            Interested in working together or want to talk endpoint management and identity security? Reach out!
          </p>
          <div className="social-links">
            <a href="https://github.com/Bryan-Moses" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/bryan-moses-093607250" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:bryanmoses@comcast.net" className="social-link">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bryan Moses. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
