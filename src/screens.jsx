import {
  IconAccess,
  IconAed,
  IconBook,
  IconCallPlus,
  IconCheck,
  IconChevron,
  IconClose,
  IconHeartPulse,
  IconHospital,
  IconPause,
  IconPeople,
  IconPhone,
  IconPlay,
  IconShield,
  IconStopwatch,
  IconTipArms,
  IconTipChest,
  IconTipHand,
} from './icons.jsx'
import { GuideHeader, Stepper, VoiceToggle } from './components.jsx'
import { formatElapsed } from './useCprTimer.js'

export function HomeScreen({ onStart, onComingSoon }) {
  return (
    <div className="screen home-screen">
      <div className="home-sky">
        <img src="/illustrations/logo-heart.png" alt="" className="home-logo" />
        <h1 className="brand">
          CPR <span>Ready</span>
        </h1>
        <p className="tagline">
          Immediate CPR guidance
          <br />
          when every second counts.
        </p>
        <div className="home-hero">
          <img src="/illustrations/home-cpr-white.png" alt="Responder performing chest compressions" />
        </div>
      </div>

      <div className="home-body">
        <button type="button" className="cta-emergency" onClick={onStart}>
          <span className="cta-icon">
            <IconCallPlus />
          </span>
          <span className="cta-copy">
            <strong>Start Emergency Guide</strong>
            <small>Get step-by-step help now</small>
          </span>
          <IconChevron />
        </button>

        <div className="feature-grid">
          <FeatureCard
            icon={<IconBook />}
            title="Learn CPR"
            subtitle="Learn and practice life-saving skills."
            onClick={() => onComingSoon('Learn CPR')}
          />
          <FeatureCard
            icon={<IconAed />}
            title="Find AED"
            subtitle="Locate nearest defibrillator."
            onClick={() => onComingSoon('Find AED')}
          />
          <FeatureCard
            icon={<IconHospital />}
            title="Nearby Hospitals"
            subtitle="Find hospitals near you."
            onClick={() => onComingSoon('Nearby Hospitals')}
          />
          <FeatureCard
            icon={<IconAccess />}
            title="Accessibility"
            subtitle="Language, audio, and more."
            onClick={() => onComingSoon('Accessibility')}
          />
        </div>

        <div className="prepare-banner">
          <IconShield />
          <div>
            <strong>Be prepared. You can make a difference.</strong>
            <span>Your actions can save a life.</span>
          </div>
          <IconPeople />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, subtitle, onClick }) {
  return (
    <button type="button" className="feature-card" onClick={onClick}>
      <span className="feature-icon">{icon}</span>
      <span className="feature-text">
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <IconChevron />
    </button>
  )
}

export function CheckScreen({ voiceOn, onToggleVoice, onBack, onExit, onYes, onNo }) {
  return (
    <div className="screen guide-screen check-screen">
      <GuideHeader onBack={onBack} onExit={onExit} />
      <Stepper current={1} />
      <p className="step-chip">Step 1 of 5</p>

      <div className="check-layout">
        <div className="check-copy">
          <h2>
            Is the person
            <br />
            responsive?
          </h2>
          <p>
            Tap or gently shake their shoulders and ask loudly,{' '}
            <em>“Are you okay?”</em>
          </p>
        </div>
        <img
          className="check-art"
          src="/illustrations/check-shake-clean.png"
          alt="Responder checking if a person is responsive"
        />
      </div>

      <div className="choice-row">
        <button type="button" className="choice-card yes" onClick={onYes}>
          <span className="choice-badge green">
            <IconCheck />
          </span>
          <strong>Yes, Responsive</strong>
          <small>The person is awake and breathing.</small>
        </button>
        <button type="button" className="choice-card no" onClick={onNo}>
          <span className="choice-badge red">
            <IconClose />
          </span>
          <strong>No, Not Responsive</strong>
          <small>The person is not responding or not breathing normally.</small>
        </button>
      </div>

      <VoiceToggle on={voiceOn} onToggle={onToggleVoice} />
    </div>
  )
}

export function ResponsiveOkScreen({ onBack, onHome }) {
  return (
    <div className="screen guide-screen alt-screen">
      <GuideHeader title="Person is responsive" onBack={onBack} />
      <div className="alt-body">
        <p className="overlay-kicker">Alternative demo path</p>
        <h2>Stay with them and keep checking.</h2>
        <p>
          This branch is a simple demonstration for when the person is awake and breathing. It is
          not medical advice and does not contact emergency services.
        </p>
        <button type="button" className="btn-primary" onClick={onHome}>
          Return to Home
        </button>
        <button type="button" className="btn-outline" onClick={onBack}>
          Back to Check
        </button>
      </div>
    </div>
  )
}

export function CallScreen({ voiceOn, onToggleVoice, onBack, onExit, onConfirm, onSimulateCall }) {
  return (
    <div className="screen guide-screen">
      <GuideHeader onBack={onBack} onExit={onExit} />
      <Stepper current={2} />
      <p className="step-chip">Step 2 of 5</p>

      <div className="call-hero">
        <div>
          <h2>
            Call Emergency
            <br />
            Services
          </h2>
          <p>Call 911 or your local emergency number now.</p>
        </div>
        <button type="button" className="dial-circle" onClick={onSimulateCall}>
          <span className="dial-main"><IconPhone /><strong>911</strong></span>
          <span className="dial-caption">Tap to call</span>
        </button>
      </div>

      <div className="tip-list">
        <div className="tip">
          <span className="tip-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 9.5h3.2L15 6v12l-3.8-3.5H8V9.5Z" fill="#E12533" />
            </svg>
          </span>
          <p>Stay on the line and follow the instructions.</p>
        </div>
        <div className="tip">
          <span className="tip-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="2.4" stroke="#E12533" strokeWidth="1.6" />
              <path d="M7 17c.6-2.4 2.4-3.6 5-3.6s4.4 1.2 5 3.6" stroke="#E12533" strokeWidth="1.6" />
            </svg>
          </span>
          <p>If someone is with you, ask them to get an AED.</p>
        </div>
      </div>

      <button type="button" className="btn-primary" onClick={onConfirm}>
        I’ve Called
      </button>
      <button type="button" className="btn-outline" onClick={onConfirm}>
        Someone Else is Calling
      </button>

      <p className="countdown-note">
        Starting CPR in <span>10</span> sec
      </p>
      <p className="fine-print">Demo display only — this timer does not start CPR automatically.</p>

      <VoiceToggle on={voiceOn} onToggle={onToggleVoice} />
    </div>
  )
}

export function CprScreen({
  voiceOn,
  onToggleVoice,
  onBack,
  onExit,
  timer,
  onRhythm,
  onHelp,
}) {
  const cycle = 30
  const progress = (timer.compressions % cycle) / cycle
  const size = 210
  const stroke = 14
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dash = circumference * progress

  return (
    <div className="screen guide-screen cpr-screen">
      <GuideHeader onBack={onBack} onExit={onExit} />
      <Stepper current={3} />
      <p className="step-chip">Step 3 of 5</p>
      <p className="status-live">
        <span /> CPR in progress
      </p>

      <div className="ring-wrap">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="cpr-ring">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#FDE7EA"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E12533"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="ring-label">
          <small>{timer.compressions > 0 ? 'Good job!' : 'Simulated count'}</small>
          <strong>{timer.compressions}</strong>
          <span>Compressions</span>
        </div>
      </div>
      <p className="coach">Keep it up! Push hard and fast.</p>
      <p className="fine-print center">
        Compression counts are simulated. This demo does not detect CPR quality.
      </p>

      <div className="stat-row">
        <div className="stat-card">
          <IconHeartPulse />
          <div>
            <strong>{timer.bpm || '--'}</strong>
            <span>BPM</span>
          </div>
        </div>
        <div className="stat-card">
          <IconStopwatch />
          <div>
            <strong>{formatElapsed(timer.elapsedMs)}</strong>
            <span>Time Elapsed</span>
          </div>
        </div>
      </div>

      <VoiceToggle on={voiceOn} onToggle={onToggleVoice} />

      <button type="button" className="btn-outline pause-btn" onClick={timer.toggle}>
        {timer.running ? <IconPause /> : <IconPlay />}
        {timer.running ? 'Pause' : 'Resume'}
      </button>

      <div className="demo-nav">
        <p>Demo navigation</p>
        <button type="button" className="text-link" onClick={onRhythm}>
          Rhythm guidance (scenario)
        </button>
        <button type="button" className="text-link" onClick={onHelp}>
          Help is on the way (scenario)
        </button>
      </div>
    </div>
  )
}

export function RhythmScreen({ onBack, timer }) {
  return (
    <div className="screen plain-screen">
      <GuideHeader title="Stay on Track" onBack={onBack} />
      <p className="scenario-flag">Scenario demonstration — not a quality reading</p>
      <div className="rhythm-body">
        <h2>Great Rhythm!</h2>
        <p className="subtitle">You’re doing it right.</p>
        <div className="heart-halo">
          <svg width="92" height="92" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 20.6S4.2 15.6 4.2 10.2C4.2 7.2 6.6 5 9.4 5c1.6 0 2.6.8 2.6 2.2.2-1.4 1.2-2.2 2.8-2.2 2.8 0 5 2.2 5 5.2 0 5.4-7.8 10.4-7.8 10.4Z"
              fill="#E12533"
            />
            <path
              d="M6.8 11.2h2.4l1.4-2.6 2 5 1.3-2.4H17"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul className="rhythm-tips">
          <li>
            <IconTipHand />
            Push hard and fast.
          </li>
          <li>
            <IconTipArms />
            Keep arms straight.
          </li>
          <li>
            <IconTipChest />
            Let chest rise fully.
          </li>
        </ul>
        <button type="button" className="btn-outline" onClick={timer.toggle}>
          {timer.running ? 'Pause Timer' : 'Resume Timer'}
        </button>
      </div>
    </div>
  )
}

export function HelpScreen({ onBack, onContinue }) {
  return (
    <div className="screen plain-screen">
      <GuideHeader title="Help is on the Way" onBack={onBack} />
      <p className="scenario-flag">Scenario demonstration — services have not been contacted</p>
      <div className="help-body">
        <div className="ambulance-art">
          <img src="/illustrations/ambulance.png" alt="Ambulance illustration" />
        </div>
        <h2>
          Keep going.
          <br />
          Help is on the way.
        </h2>
        <p className="subtitle">
          Continue CPR until
          <br />
          medical professionals
          <br />
          take over.
        </p>
        <button type="button" className="btn-primary help-cta" onClick={onContinue}>
          Continue CPR
        </button>
      </div>
    </div>
  )
}
