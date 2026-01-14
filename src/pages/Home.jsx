import React from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowUpRight, Mail, Linkedin } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectCard = ({ project, index }) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className={`project-card animate-in delay-${index + 1}`}
    >
      {project.hasVideo && (
        <div className="project-card-badge">
          <Play size={12} />
          Video
        </div>
      )}
      
      <div className="project-card-image">
        {/* Replace with actual image when available */}
        <span>[ {project.thumbnail} ]</span>
      </div>
      
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-subtitle">{project.subtitle}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ 
        padding: 'var(--space-5xl) 0 var(--space-3xl)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <div className="animate-in">
            <h1 style={{ marginBottom: 'var(--space-sm)' }}>Sid Torres</h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'var(--text-secondary)',
              fontWeight: 300 
            }}>
              Selected Work
            </p>
          </div>
          
          <p className="animate-in delay-1" style={{ 
            marginTop: 'var(--space-lg)',
            color: 'var(--text-muted)',
            fontSize: '14px',
            fontFamily: 'var(--font-mono)'
          }}>
            Senior Product Designer — AI · Enterprise · Developer Tools
          </p>
        </div>
      </header>

      {/* Reader's Note */}
      <section style={{ padding: 'var(--space-3xl) 0' }}>
        <div className="container">
          <div 
            className="animate-in delay-2"
            style={{
              maxWidth: '680px',
              padding: 'var(--space-xl)',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)'
            }}
          >
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '15px',
              lineHeight: 1.7,
              marginBottom: 'var(--space-md)'
            }}>
              This is a curated selection of recent design outcomes — shipped features 
              and production-ready interfaces across AI products, enterprise tools, 
              and consumer applications.
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '14px',
              lineHeight: 1.7
            }}>
              For detailed process narratives and full case studies, visit{' '}
              <a 
                href="https://sidtorres.design" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', textDecoration: 'underline' }}
              >
                sidtorres.design
              </a>
              {' '}— password available on request.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: 'var(--space-2xl) 0 var(--space-5xl)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-xl)',
          }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <p className="label" style={{ marginBottom: 'var(--space-md)' }}>
                Full Case Studies
              </p>
              <a 
                href="https://sidtorres.design"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '15px'
                }}
              >
                sidtorres.design
                <ArrowUpRight size={16} />
              </a>
            </div>
            
            <div className="footer-links">
              <a 
                href="mailto:yesidtorresa@gmail.com"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}
              >
                <Mail size={16} />
                Email
              </a>
              <a 
                href="https://linkedin.com/in/sidtorres"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .container > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
