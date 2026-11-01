import { useEffect, useRef, useState } from 'react'
import { CallDialog, ComingSoon, DemoBanner, ExitDialog, PhoneShell, TabBar } from './components.jsx'
import {
  CallScreen,
  CheckScreen,
  CprScreen,
  HelpScreen,
  HomeScreen,
  ResponsiveOkScreen,
  RhythmScreen,
} from './screens.jsx'
import { useCprTimer } from './useCprTimer.js'
import './App.css'

const GUIDE_SCREENS = new Set(['check', 'call', 'cpr', 'rhythm', 'help', 'responsive'])

export default function App() {
  const [screen, setScreen] = useState('home')
  const [, setHistory] = useState([])
  const [voiceOn, setVoiceOn] = useState(true)
  const [showExit, setShowExit] = useState(false)
  const [showCall, setShowCall] = useState(false)
  const [comingSoonTitle, setComingSoonTitle] = useState('Learn CPR')
  const timer = useCprTimer()
  const scrollRef = useRef(null)
  useEffect(() => { scrollRef.current?.scrollTo(0, 0) }, [screen, comingSoonTitle])

  const go = (next) => {
    setScreen((current) => {
      setHistory((stack) => [...stack, current])
      return next
    })
  }

  const jump = (next) => {
    setHistory((stack) => {
      const index = stack.lastIndexOf(next)
      return index >= 0 ? stack.slice(0, index) : stack
    })
    setScreen(next)
  }

  const back = () => {
    setHistory((stack) => {
      if (stack.length === 0) {
        setScreen('home')
        return stack
      }
      const previous = stack[stack.length - 1]
      setScreen(previous)
      return stack.slice(0, -1)
    })
  }

  const goHome = () => {
    setScreen('home')
    setHistory([])
    setShowExit(false)
  }

  const endDemo = () => {
    timer.reset()
    setShowExit(false)
    setShowCall(false)
    goHome()
  }

  const openCpr = () => {
    timer.start()
    go('cpr')
  }

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setShowCall(false)
        setShowExit(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const tabActive =
    GUIDE_SCREENS.has(screen) ? 'emergency' : screen === 'comingSoon' && comingSoonTitle === 'Find AED' ? 'aed' : screen === 'comingSoon' && ['Learn', 'Learn CPR'].includes(comingSoonTitle) ? 'learn' : 'home'

  return (
    <PhoneShell>
      <DemoBanner />
      <div className="screen-scroll" ref={scrollRef}>
        {screen === 'home' && (
          <HomeScreen
            onStart={() => go('check')}
            onComingSoon={(title) => {
              setComingSoonTitle(title)
              go('comingSoon')
            }}
          />
        )}
        {screen === 'check' && (
          <CheckScreen
            voiceOn={voiceOn}
            onToggleVoice={() => setVoiceOn((value) => !value)}
            onBack={back}
            onExit={() => setShowExit(true)}
            onYes={() => go('responsive')}
            onNo={() => go('call')}
          />
        )}
        {screen === 'responsive' && <ResponsiveOkScreen onBack={back} onHome={goHome} />}
        {screen === 'call' && (
          <CallScreen
            voiceOn={voiceOn}
            onToggleVoice={() => setVoiceOn((value) => !value)}
            onBack={back}
            onExit={() => setShowExit(true)}
            onConfirm={openCpr}
            onSimulateCall={() => setShowCall(true)}
          />
        )}
        {screen === 'cpr' && (
          <CprScreen
            voiceOn={voiceOn}
            onToggleVoice={() => setVoiceOn((value) => !value)}
            onBack={back}
            onExit={() => setShowExit(true)}
            timer={timer}
            onRhythm={() => go('rhythm')}
            onHelp={() => go('help')}
          />
        )}
        {screen === 'rhythm' && <RhythmScreen onBack={back} timer={timer} />}
        {screen === 'help' && (
          <HelpScreen
            onBack={back}
            onContinue={() => jump('cpr')}
          />
        )}
        {screen === 'comingSoon' && <ComingSoon title={comingSoonTitle} onBack={back} />}
      </div>
      <TabBar
        active={tabActive}
        onHome={goHome}
        onLearn={() => {
          setComingSoonTitle('Learn')
          go('comingSoon')
        }}
        onEmergency={() => {
          if (screen === 'home' || screen === 'comingSoon' || screen === 'responsive') go('check')
        }}
        onAed={() => {
          setComingSoonTitle('Find AED')
          go('comingSoon')
        }}
      />
      {showExit && <ExitDialog onCancel={() => setShowExit(false)} onConfirm={endDemo} />}
      {showCall && <CallDialog onClose={() => setShowCall(false)} />}
    </PhoneShell>
  )
}
