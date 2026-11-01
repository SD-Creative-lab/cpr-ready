import {
  IconBack,
  IconBook,
  IconPlay,
  IconCheck,
  IconStopwatch,
  IconHospital,
  IconPhone,
  IconEmergency,
  IconExit,
  IconHome,
  IconLearn,
  IconAedDevice,
  IconSpeaker,
} from './icons.jsx'

const STEPS = [
  { n: 1, label: 'Check' },
  { n: 2, label: 'Call' },
  { n: 3, label: 'CPR' },
  { n: 4, label: 'AED' },
  { n: 5, label: 'Continue' },
]

export function PhoneShell({ children }) {
  return (
    <div className="stage">
      <div className="phone" role="application" aria-label="CPR Ready demo">
        {children}
      </div>
    </div>
  )
}

export function DemoBanner() {
  return (
    <div className="demo-banner" role="note">
      Demo only — not for emergency use
    </div>
  )
}

export function TabBar({ active, onHome, onLearn, onEmergency, onAed }) {
  return (
    <nav className="tabbar" aria-label="Primary">
      <button type="button" aria-current={active === 'home' ? 'page' : undefined} className={active === 'home' ? 'tab active' : 'tab'} onClick={onHome}>
        <IconHome active={active === 'home'} />
        Home
      </button>
      <button type="button" aria-current={active === 'learn' ? 'page' : undefined} className={active === 'learn' ? 'tab active' : 'tab'} onClick={onLearn}>
        <IconLearn active={active === 'learn'} />
        Learn
      </button>
      <button
        type="button"
        aria-current={active === 'emergency' ? 'page' : undefined} className={active === 'emergency' ? 'tab active' : 'tab'}
        onClick={onEmergency}
      >
        <IconEmergency active={active === 'emergency'} />
        Emergency
      </button>
      <button
        type="button"
        aria-current={active === 'aed' ? 'page' : undefined} className={active === 'aed' ? 'tab active' : 'tab'}
        onClick={onAed}
      >
        <IconAedDevice active={active === 'aed'} />
        AED
      </button>
    </nav>
  )
}

export function GuideHeader({ title = 'Emergency Guide', onBack, onExit }) {
  return (
    <header className="guide-header">
      <button type="button" className="icon-btn" onClick={onBack} aria-label="Back">
        <IconBack />
      </button>
      <h1>{title}</h1>
      {onExit ? (
        <button type="button" className="exit-btn" onClick={onExit}>
          <IconExit />
          Exit
        </button>
      ) : (
        <span className="header-spacer" />
      )}
    </header>
  )
}

export function Stepper({ current }) {
  return (
    <ol className="stepper" aria-label="Emergency guide steps">
      {STEPS.map((step, index) => {
        const state = step.n < current ? 'done' : step.n === current ? 'current' : 'todo'
        const connectorOn = step.n < current
        return (
          <li key={step.n} className={`step ${state}`}>
            {index > 0 && <span className={`connector ${connectorOn ? 'on' : ''}`} />}
            <span className="bubble">{step.n}</span>
            <span className="step-label">{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}

export function VoiceToggle({ on, onToggle }) {
  return (
    <div className="voice-row">
      <span className="voice-label">
        <IconSpeaker />
        Voice Guidance
      </span>
      <button
        type="button"
        className={on ? 'toggle on' : 'toggle'}
        onClick={onToggle}
        role="switch"
        aria-checked={on}
        aria-label="Voice Guidance"
      >
        <span className="knob" />
      </button>
    </div>
  )
}

export function Overlay({ children, onClose }) {
  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <button type="button" className="overlay-scrim" aria-label="Close dialog" onClick={onClose} />
      <div className="overlay-card">{children}</div>
    </div>
  )
}

export function ExitDialog({ onCancel, onConfirm }) {
  return (
    <Overlay onClose={onCancel}>
      <p className="overlay-kicker">Demo only</p>
      <h2>End this demo?</h2>
      <p className="overlay-copy">
        This prototype has not contacted emergency services. Ending returns you to the home screen.
      </p>
      <button type="button" className="btn-primary" onClick={onConfirm}>
        End demo
      </button>
      <button type="button" className="btn-outline" onClick={onCancel}>
        Keep going
      </button>
    </Overlay>
  )
}

export function CallDialog({ onClose }) {
  return (
    <Overlay onClose={onClose}>
      <p className="overlay-kicker">Simulated call</p>
      <h2>No real call will be placed</h2>
      <p className="overlay-copy">
        In a real emergency, call your local emergency number from your phone. This button is for
        the portfolio demonstration only.
      </p>
      <div className="fake-call">
        <span>911</span>
        <small>Demo keypad — not connected</small>
      </div>
      <button type="button" className="btn-primary" onClick={onClose}>
        Close
      </button>
    </Overlay>
  )
}

const FEATURE_PREVIEWS = {
  'Learn CPR': {
    kind: 'learn', heading: 'Learn at your own pace',
    description: 'A preview of future learning and practice tools.',
    items: ['Short lessons', 'Guided practice', 'Knowledge checks'],
    icons: [IconBook, IconPlay, IconCheck],
  },
  'Find AED': {
    kind: 'aed', heading: 'Find an AED nearby',
    description: 'A preview of a future AED location tool.',
    items: ['Nearby locations', 'Access details', 'Availability information'],
    icons: [IconPin, IconBook, IconStopwatch],
  },
  'Nearby Hospitals': {
    kind: 'hospital', heading: 'Explore nearby hospitals',
    description: 'A preview of a future hospital directory.',
    items: ['Hospital details', 'Contact information', 'Location and directions'],
    icons: [IconHospital, IconPhone, IconPin],
  },
  Accessibility: {
    kind: 'access', heading: 'Make it easier to use',
    description: 'A preview of future display and audio preferences.',
    items: ['Text size', 'Audio preferences', 'Language options'],
    icons: [IconText, IconSpeaker, IconGlobe],
  },
}

function IconPin() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-7.2 7-13a7 7 0 1 0-14 0c0 5.8 7 13 7 13Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>
}
function IconText() {
  return <span className="preview-aa" aria-hidden="true">Aa</span>
}
function IconGlobe() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 7h14M5 17h14"/></svg>
}

function FeatureIllustration({ kind }) {
  return (
    <div className={`feature-illustration feature-illustration-${kind}`} aria-hidden="true">
      <svg viewBox="0 0 240 200" fill="none">
        {kind === 'learn' && <>
          <ellipse cx="120" cy="174" rx="82" ry="9" fill="#dbe9f8"/>
          <path d="M34 64Q78 48 120 72Q162 48 206 64V160Q163 148 120 174Q77 148 34 160Z" fill="#154c9f"/>
          <path d="M43 52Q86 41 120 67V163Q85 141 43 150Z" fill="#53adf4"/>
          <path d="M197 52Q154 41 120 67V163Q155 141 197 150Z" fill="#2c86e9"/>
          <path d="M120 67V164M58 76q25-5 44 7M58 94q25-5 44 7M58 112q25-5 44 7M138 83q19-12 44-7M138 101q19-12 44-7M138 119q19-12 44-7" stroke="#eaf7ff" strokeWidth="4" strokeLinecap="round"/>
          <path d="M120 18v17M82 26l9 13M158 26l-9 13" stroke="#2384dc" strokeWidth="5" strokeLinecap="round"/>
        </>}
        {kind === 'aed' && <>
          <rect x="15" y="13" width="210" height="174" rx="24" fill="#edf0f2"/>
          <path d="m15 57 210 58M15 133 225 43M60 13l38 174M156 13l-18 174M15 164l210-17" stroke="white" strokeWidth="11"/>
          <path d="m30 23 32 3 5 22-34-7ZM177 145l32 9-8 21-27-9Z" fill="#c5e6d0"/>
          <path d="M120 156s47-47 47-78a47 47 0 0 0-94 0c0 31 47 78 47 78Z" fill="#12a660" stroke="white" strokeWidth="5"/>
          <path d="M120 105s-26-15-26-32c0-13 17-18 26-7 9-11 26-6 26 7 0 17-26 32-26 32" fill="white"/>
          <path d="m123 67-12 18h10l-5 16 17-22h-11Z" fill="#12a660"/>
          <circle cx="47" cy="117" r="9" fill="#e12533" stroke="white" strokeWidth="3"/><circle cx="193" cy="67" r="9" fill="#e12533" stroke="white" strokeWidth="3"/>
        </>}
        {kind === 'hospital' && <>
          <path d="M24 162V83h55v79M161 162V83h55v79" fill="#a8d8f5"/>
          <path d="M71 162V38h98v124" fill="#d5ecfb"/>
          <path d="M70 38h100M23 82h48M170 82h48" stroke="#69acd9" strokeWidth="8" strokeLinecap="round"/>
          <path d="M107 162v-35h27v35" fill="#67addc"/>
          <path d="M113 51h15v12h12v15h-12v12h-15V78h-12V63h12Z" fill="#e12533"/>
          <path d="M88 103h11v12H88ZM142 103h11v12h-11ZM36 100h11v15H36ZM54 100h11v15H54ZM179 100h11v15h-11ZM197 100h11v15h-11ZM36 125h11v15H36ZM197 125h11v15h-11Z" fill="#70b4e0"/>
          <path d="M15 166h210" stroke="#b9d5e5" strokeWidth="5" strokeLinecap="round"/>
          <path d="M183 172s30-29 30-50a30 30 0 1 0-60 0c0 21 30 50 30 50Z" fill="#e12533" stroke="white" strokeWidth="3"/><circle cx="183" cy="121" r="11" fill="white"/>
          <path d="M29 164v-35" stroke="#448c65" strokeWidth="5"/><ellipse cx="29" cy="127" rx="15" ry="23" fill="#6bb785"/>
        </>}
        {kind === 'access' && <>
          <text x="30" y="89" fill="#13284d" fontSize="67" fontWeight="700" fontFamily="sans-serif">Aa</text>
          <path d="M37 118h19l25-18v56l-25-18H37Z" fill="#e12533"/>
          <path d="M94 115q13 14 0 28M104 104q24 25 0 50" stroke="#e12533" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="169" cy="130" r="35" stroke="#13284d" strokeWidth="5"/>
          <ellipse cx="169" cy="130" rx="15" ry="35" stroke="#13284d" strokeWidth="4"/>
          <path d="M134 130h70M140 113h58M140 147h58" stroke="#13284d" strokeWidth="4"/>
        </>}
      </svg>
    </div>
  )
}

export function ComingSoon({ title, onBack }) {
  const feature = FEATURE_PREVIEWS[title === 'Learn' ? 'Learn CPR' : title]
  if (!feature) return (
    <div className="screen coming-soon">
      <GuideHeader title={title} onBack={onBack} />
      <div className="coming-body">
        <p className="overlay-kicker">Planned feature</p><h2>{title}</h2>
        <p>A future place to manage your learning preferences.</p>
        <button type="button" className="btn-outline" onClick={onBack}>Back to demo</button>
      </div>
    </div>
  )
  return (
    <div className="screen feature-preview-screen">
      <GuideHeader title={title === 'Learn' ? 'Learn CPR' : title} onBack={onBack} />
      <div className="feature-preview-body">
        <p className="feature-preview-pill">Planned feature</p>
        <FeatureIllustration kind={feature.kind} />
        {feature.kind === 'aed' && <p className="feature-map-caption">Illustrative map</p>}
        <h2>{feature.heading}</h2>
        <p className="feature-preview-description">{feature.description}</p>
        <ul className="feature-preview-items">
          {feature.items.map((item, index) => {
            const ItemIcon = feature.icons[index]
            return <li key={item}><span className="feature-preview-icon"><ItemIcon /></span><span>{item}</span></li>
          })}
        </ul>
        <button type="button" className="btn-outline feature-preview-back" onClick={onBack}>Back to demo</button>
      </div>
    </div>
  )
}
