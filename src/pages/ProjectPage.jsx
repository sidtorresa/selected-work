import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Play, Image, ArrowUpRight, Figma } from 'lucide-react'
import { getProjectById } from '../data/projects'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Infinite Carousel Component with Arrows
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalSlides = images.length

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalSlides
    goToSlide(nextIndex)
  }, [currentIndex, totalSlides, goToSlide])

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides
    goToSlide(prevIndex)
  }, [currentIndex, totalSlides, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {/* Left Arrow */}
        <button 
          className="carousel-arrow prev" 
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Track */}
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <div className="image-placeholder">
                <div className="image-placeholder-icon">
                  <Image size={24} />
                </div>
                <span>{image.label}</span>
                <span style={{ fontSize: '12px', color: 'var(--accent)' }}>
                  → {image.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className="carousel-arrow next" 
          onClick={goNext}
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>
      
      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <p style={{ 
        textAlign: 'center', 
        marginTop: 'var(--space-sm)',
        fontSize: '13px',
        color: 'var(--text-muted)'
      }}>
        {currentIndex + 1} / {totalSlides}
      </p>
    </div>
  )
}

// Video Placeholder Component
const VideoPlaceholder = ({ label, duration }) => {
  return (
    <div className="video-placeholder">
      <div className="video-play-button">
        <Play size={28} fill="white" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ 
          color: 'var(--text-primary)', 
          fontSize: '16px', 
          fontWeight: 500,
          marginBottom: 'var(--space-xs)'
        }}>
          {label}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
          {duration}
        </p>
      </div>
    </div>
  )
}

// Figma Prototype Embed Component
const FigmaEmbed = ({ figmaUrl }) => {
  if (!figmaUrl) {
    return (
      <div className="prototype-placeholder">
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background: 'var(--accent-dim)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Figma size={24} style={{ color: 'var(--accent)' }} />
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          Interactive prototype coming soon
        </p>
      </div>
    )
  }

  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`

  return (
    <div className="prototype-embed">
      <iframe 
        src={embedUrl}
        allowFullScreen
        title="Figma Prototype"
      />
    </div>
  )
}

// Metric Card Component
const MetricCard = ({ value, label, sublabel }) => {
  return (
    <div className="metric-card">
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
      {sublabel && (
        <p style={{ 
          fontSize: '12px', 
          color: 'var(--text-muted)',
          marginTop: 'var(--space-xs)'
        }}>
          {sublabel}
        </p>
      )}
    </div>
  )
}

// Hero Intro Section - Clean minimal style
const HeroIntro = ({ project }) => {
  return (
    <header className="hero-intro">
      <div className="container">
        {/* Title */}
        <div className="animate-in">
          <h1 className="hero-title">{project.heroTitle || project.title}</h1>
          
          {/* Overview section */}
          {project.overview && (
            <div className="hero-overview">
              <span className="hero-overview-label">Overview</span>
              <p className="hero-overview-text">{project.overview}</p>
            </div>
          )}
          
          {/* Metrics row */}
          {project.heroMetrics && (
            <div className="hero-metrics">
              {project.heroMetrics.map((metric, i) => (
                <div key={i} className="hero-metric">
                  <span className="hero-metric-value">{metric.value}</span>
                  <span className="hero-metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Metadata bar */}
        <div className="hero-meta-bar animate-in delay-1">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Duration</span>
            <span className="hero-meta-value">{project.duration}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Role</span>
            <span className="hero-meta-value">{project.role}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Industry</span>
            <span className="hero-meta-value">{project.industry}</span>
          </div>
          {project.businessModel && (
            <div className="hero-meta-item">
              <span className="hero-meta-label">Business Model</span>
              <span className="hero-meta-value">{project.businessModel}</span>
            </div>
          )}
          {project.focus && (
            <div className="hero-meta-item">
              <span className="hero-meta-label">Focus</span>
              <span className="hero-meta-value">{project.focus}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="container" style={{ padding: 'var(--space-5xl) 0' }}>
        <ScrollToTop />
        <h1>Project not found</h1>
        <Link to="/" className="back-link" style={{ marginTop: 'var(--space-xl)' }}>
          <ArrowLeft size={16} />
          Back to Selected Work
        </Link>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <ScrollToTop />
      
      {/* Navigation */}
      <nav style={{ 
        padding: 'var(--space-xl) 0',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <Link to="/" className="back-link" style={{ marginBottom: 0 }}>
            <ArrowLeft size={16} />
            Back to Selected Work
          </Link>
        </div>
      </nav>

      {/* Hero Intro Section */}
      <HeroIntro project={project} />

      {/* The Shift */}
      <section style={{ padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <div className="section-label">
            <span className="label">The Shift</span>
          </div>
          
          <div className="shift-container animate-in delay-2">
            <span className="shift-label from">From</span>
            <p className="shift-text">{project.shift.from}</p>
            
            <span className="shift-label to">To</span>
            <p className="shift-text" style={{ color: 'var(--text-primary)' }}>
              {project.shift.to}
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section style={{ paddingBottom: 'var(--space-4xl)' }}>
        <div className="container">
          <div className="section-label">
            <span className="label">Final Designs</span>
          </div>
          
          <div className="animate-in delay-3">
            <Carousel images={project.carouselImages} />
          </div>
        </div>
      </section>

      {/* Video OR Prototype - mutually exclusive */}
      {project.hasVideo ? (
        // Show Video section
        <section style={{ paddingBottom: 'var(--space-4xl)' }}>
          <div className="container">
            <div className="section-label">
              <span className="label">In Action</span>
            </div>
            
            <div className="animate-in delay-4">
              <VideoPlaceholder 
                label={project.videoLabel}
                duration={project.videoDuration}
              />
            </div>
          </div>
        </section>
      ) : (
        // Show Prototype section (for projects without video)
        <section style={{ paddingBottom: 'var(--space-4xl)' }}>
          <div className="container">
            <div className="section-label">
              <span className="label">Interactive Prototype</span>
            </div>
            
            <div className="animate-in delay-4">
              <FigmaEmbed figmaUrl={project.figmaUrl} />
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      <section style={{ 
        padding: 'var(--space-4xl) 0',
        background: 'linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg-primary) 100%)'
      }}>
        <div className="container">
          <div className="section-label">
            <span className="label">Impact</span>
          </div>
          
          <div 
            className="animate-in delay-5"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(project.metrics.length, 4)}, 1fr)`,
              gap: 'var(--space-lg)'
            }}
          >
            {project.metrics.map((metric, index) => (
              <MetricCard 
                key={index}
                value={metric.value}
                label={metric.label}
                sublabel={metric.sublabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-4xl) 0 var(--space-5xl)' }}>
        <div className="container">
          <div 
            className="animate-in delay-5"
            style={{
              textAlign: 'center',
              maxWidth: '480px',
              margin: '0 auto'
            }}
          >
            <p style={{ 
              color: 'var(--text-secondary)',
              fontSize: '17px',
              marginBottom: 'var(--space-xl)'
            }}>
              Want the full story?
            </p>
            
            <a 
              href="https://sidtorres.xyz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-md) var(--space-xl)',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '9999px',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'transform var(--transition-fast), opacity var(--transition-fast)'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Read full case study
              <ArrowUpRight size={16} />
            </a>
            
            <p style={{ 
              color: 'var(--text-muted)',
              fontSize: '13px',
              marginTop: 'var(--space-md)'
            }}>
              Password available on request
            </p>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .container > div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
