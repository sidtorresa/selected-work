// =============================================================================
// PROJECT DATA
// All 5 projects with their content
// =============================================================================

export const projects = [
  {
    id: 'cast-ai',
    title: 'Cast AI',
    subtitle: 'Assignment Rules Suggestions',
    
    // Hero intro section (matches your screenshot layout)
    heroTitle: 'ML-Powered Assignment Rules',
    overview: "Cast AI's Kubernetes platform had powerful optimization tools—but most users never touched them. I designed an ML-powered flow that makes the right configuration feel automatic.",
    heroMetrics: [
      { value: '73%', label: 'Fewer Steps' },
      { value: '87%', label: 'Faster' },
      { value: '90%', label: 'Adoption' }
    ],
    
    // Metadata bar
    duration: '8 Weeks',
    role: 'Contract Designer',
    industry: 'DevOps, Cloud Infrastructure',
    businessModel: 'B2B Enterprise',
    focus: 'AI/ML Feature',
    
    // Rest of content
    tagline: 'ML-powered policy suggestions for Kubernetes workload optimization',
    hasVideo: true,
    videoLabel: 'Watch the Flow',
    videoDuration: '0:45',
    
    // Figma prototype - only shown when hasVideo is false
    figmaUrl: null, // Add your Figma share URL here when ready
    
    shift: {
      from: '90% of workloads stuck on default policies — 7+ steps and 15 minutes to configure each',
      to: 'ML-powered suggestions users can review, preview, and apply in 2-3 clicks — human always in control'
    },
    metrics: [
      { value: '73%', label: 'Fewer steps', sublabel: '7+ → 2-3' },
      { value: '87%', label: 'Faster setup', sublabel: '15min → 2min' },
      { value: '✓', label: 'Human-in-the-loop', sublabel: 'preserved' }
    ],
    carouselImages: [
      { label: 'Scaling Policies table', placeholder: 'castai-01.png' },
      { label: 'Matching Workloads column', placeholder: 'castai-02.png' },
      { label: 'Drawer — Current tab', placeholder: 'castai-03.png' },
      { label: 'Drawer — Suggested tab', placeholder: 'castai-04.png' },
      { label: 'Rule preview modal', placeholder: 'castai-05.png' },
      { label: 'Success state', placeholder: 'castai-06.png' }
    ],
    thumbnail: 'castai-thumb.png'
  },
  {
    id: 'monks-flow',
    title: 'Monks.Flow / Pathways',
    subtitle: 'Visual AI Orchestration',
    
    // Hero intro section (from your screenshot)
    heroTitle: 'AI Orchestration, Made Visual',
    overview: "I designed Pathways—the visual canvas where creatives build AI workflows without code. Teams went from 4-hour manual processes to 8-minute pipelines.",
    heroMetrics: [
      { value: '75%', label: 'Faster' },
      { value: '$2.3M', label: 'Saved' },
      { value: '87%', label: 'Adoption' }
    ],
    
    // Metadata bar
    duration: '16+ Months',
    role: 'Sr Product Designer',
    industry: 'Creative Tech, Advertising',
    businessModel: 'B2B SaaS, Enterprise',
    focus: 'AI',
    
    // Rest of content
    tagline: 'Drag-and-drop workflow builder for enterprise AI automation',
    hasVideo: true,
    videoLabel: 'Watch Product Demo',
    videoDuration: '2:30',
    
    // Figma prototype - only shown when hasVideo is false
    figmaUrl: null,
    
    shift: {
      from: '15+ disconnected tools, 72-hour iteration cycles, zero visibility into what AI did or what it cost',
      to: 'Drag-and-drop workflow builder with smart checkpoints, live telemetry, and human-in-the-loop at every decision'
    },
    metrics: [
      { value: '75%', label: 'Faster workflow builds' },
      { value: '60%', label: 'Shorter delivery cycles' },
      { value: '$2.3M', label: 'Saved across 5 clients' }
    ],
    carouselImages: [
      { label: 'Canvas overview', placeholder: 'pathways-01.png' },
      { label: 'Neuron library', placeholder: 'pathways-02.png' },
      { label: 'Checkpoint modal', placeholder: 'pathways-03.png' },
      { label: 'Execution telemetry', placeholder: 'pathways-04.png' },
      { label: 'Pipeline run view', placeholder: 'pathways-05.png' },
      { label: 'Output preview', placeholder: 'pathways-06.png' }
    ],
    thumbnail: 'pathways-thumb.png'
  },
  {
    id: 'helium',
    title: 'Helium Explorer',
    subtitle: 'Network Visualization',
    
    // Hero intro section (from your screenshot)
    heroTitle: 'Making the Invisible Network Visible',
    overview: "The world's largest decentralized wireless network existed—but nobody could see it. I transformed terabytes of coverage data into an intuitive visualization.",
    heroMetrics: [
      { value: '47%', label: 'Better Comprehension' },
      { value: '65%', label: 'Weekly Active' },
      { value: '$380K', label: 'Savings' }
    ],
    
    // Metadata bar
    duration: '5 Months',
    role: 'Contract Designer',
    industry: 'Web3, Telecom, DePIN',
    businessModel: 'B2C',
    focus: 'DataViz',
    
    // Rest of content
    tagline: 'Making the world\'s largest decentralized wireless network visible',
    hasVideo: false,
    
    // Figma prototype - shows automatically since hasVideo is false
    figmaUrl: null, // Add Figma URL to show interactive prototype
    
    shift: {
      from: '950K+ hotspots with no way to verify coverage — 12+ minutes across 8 tools per session',
      to: 'Unified hex-based visualization with progressive disclosure, network stats dashboard, and mobile parity'
    },
    metrics: [
      { value: '47%', label: 'Better comprehension' },
      { value: '65%', label: 'Weekly active usage' },
      { value: '$380K', label: 'Annual support savings' }
    ],
    carouselImages: [
      { label: 'Globe view with hexagons', placeholder: 'helium-01.png' },
      { label: 'Hotspot detail card', placeholder: 'helium-02.png' },
      { label: 'Network stats dashboard', placeholder: 'helium-03.png' },
      { label: 'Mobile view', placeholder: 'helium-04.png' },
      { label: 'Search + filter interface', placeholder: 'helium-05.png' },
      { label: 'Zoom progressive disclosure', placeholder: 'helium-06.png' }
    ],
    thumbnail: 'helium-thumb.png'
  },
  {
    id: 'apple-ovt',
    title: 'Apple — Build Matrices',
    subtitle: 'Version Control for Supply Chain',
    
    // Hero intro section (proposed - matching your pattern)
    heroTitle: 'Version Control for Hardware at Scale',
    overview: "Apple's supply chain teams managed critical build data in disconnected Keynote files—version errors once caused thousands of mis-shipped units. I designed native editing and diff views that eliminated external tool dependency.",
    heroMetrics: [
      { value: '100%', label: 'Tool Consolidation' },
      { value: '0', label: 'Version Errors' },
      { value: 'Cell-level', label: 'Precision' }
    ],
    
    // Metadata bar
    duration: '3 Months',
    role: 'Sr Product Designer',
    industry: 'Supply Chain, Manufacturing',
    businessModel: 'B2B Enterprise',
    focus: 'Enterprise Tools',
    
    // Rest of content
    tagline: 'Intelligent versioning for hardware supply chain data at scale',
    hasVideo: false,
    
    // Figma prototype - shows automatically since hasVideo is false
    figmaUrl: null, // Add Figma URL to show interactive prototype
    
    shift: {
      from: 'EPMs maintaining Keynote/Numbers files externally — version errors once caused thousands of mis-shipped units',
      to: 'Native "Show Changes" diff view, draft/publish workflow, and cell-level editing with full traceability'
    },
    metrics: [
      { value: '✓', label: 'Eliminated external tool dependency' },
      { value: '✓', label: 'Prevented costly version errors' },
      { value: '✓', label: 'Cell-level precision at scale' }
    ],
    carouselImages: [
      { label: 'Build matrix table', placeholder: 'ovt-01.png' },
      { label: 'Show Changes diff view', placeholder: 'ovt-02.png' },
      { label: 'Draft/Published states', placeholder: 'ovt-03.png' },
      { label: 'Cell-level editing', placeholder: 'ovt-04.png' },
      { label: 'Revision history panel', placeholder: 'ovt-05.png' },
      { label: 'Vendor acknowledgment', placeholder: 'ovt-06.png' }
    ],
    thumbnail: 'ovt-thumb.png'
  },
  {
    id: 'content-portal',
    title: 'Content Portal',
    subtitle: 'Enterprise Search & Discovery',
    
    // Hero intro section (proposed - matching your pattern)
    heroTitle: 'Enterprise Discovery, Rebuilt on Trust',
    overview: "First American's underwriters had watched three content portals fail in five years. I designed a unified search experience that earned 95% voluntary adoption—by solving for trust, not just features.",
    heroMetrics: [
      { value: '7.5×', label: 'Faster Search' },
      { value: '95%', label: 'Adoption' },
      { value: '$2.4M', label: 'Saved' }
    ],
    
    // Metadata bar
    duration: '12-18 Months',
    role: 'Lead Product Designer',
    industry: 'Title Insurance, Legal',
    businessModel: 'B2B Enterprise',
    focus: 'Enterprise Search',
    
    // Rest of content
    tagline: 'Unifying 7 legacy systems for 150+ underwriters at First American',
    hasVideo: false,
    
    // Figma prototype - shows automatically since hasVideo is false
    figmaUrl: null, // Add Figma URL to show interactive prototype
    
    shift: {
      from: '7 disconnected systems, 13,000 scattered documents — users downloading locally because they couldn\'t trust internal tools',
      to: 'Unified search with version badges, progressive filtering, and freshness signals — 95% voluntary adoption, no mandate required'
    },
    metrics: [
      { value: '7.5×', label: 'Faster search', sublabel: '12min → 90s' },
      { value: '87%', label: 'Search success rate' },
      { value: '95%', label: 'Voluntary adoption' },
      { value: '$2.4M', label: 'Annual savings' }
    ],
    carouselImages: [
      { label: 'Search interface with filters', placeholder: 'portal-01.png' },
      { label: 'Document detail view', placeholder: 'portal-02.png' },
      { label: 'Version badge & freshness', placeholder: 'portal-03.png' },
      { label: 'Related documents panel', placeholder: 'portal-04.png' },
      { label: 'Filter by state flow', placeholder: 'portal-05.png' },
      { label: 'Add document workflow', placeholder: 'portal-06.png' }
    ],
    thumbnail: 'portal-thumb.png'
  }
];

export const getProjectById = (id) => projects.find(p => p.id === id);
