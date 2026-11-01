export function IconHome({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 10.8 12 4.5l7.5 6.3V20a1.2 1.2 0 0 1-1.2 1.2H5.7A1.2 1.2 0 0 1 4.5 20v-9.2Z"
        fill={active ? '#E12533' : 'none'}
        stroke={active ? '#E12533' : '#59677E'}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconLearn({ active }) {
  const color = active ? '#E12533' : '#59677E'
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 5q5-2 9 1 4-3 9-1v14q-5-2-9 1-4-3-9-1Z" fill={active ? color : 'none'} stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M12 6v14" stroke={active ? '#fff' : color} strokeWidth="1.5"/>
  </svg>
}

export function IconEmergency({ active }) {
  const color = active ? '#E12533' : '#59677E'
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21S3 15.8 3 9.5C3 3.8 9.5 2.7 12 7c2.5-4.3 9-3.2 9 2.5C21 15.8 12 21 12 21Z" fill={active ? color : 'none'} stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M5 12h4l1.5-3 2.5 7 2-4h4" stroke={active ? '#fff' : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

export function IconAedDevice({ active }) {
  const color = active ? '#E12533' : '#59677E'
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 5V3.7C8 2.8 8.8 2 9.7 2h4.6c.9 0 1.7.8 1.7 1.7V5" stroke={color} strokeWidth="1.7"/>
    <rect x="4" y="5" width="16" height="17" rx="3" stroke={color} strokeWidth="1.7" fill={active ? color : 'none'}/>
    <path d="m13 8-5 7h4l-1 5 6-8h-4l1-4Z" fill={active ? '#fff' : color}/>
    <circle cx="17" cy="19" r="1" fill={active ? '#fff' : color}/>
  </svg>
}

export function IconProfile({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.1" stroke={active ? '#E12533' : '#8B93A7'} strokeWidth="1.8" />
      <path
        d="M5.6 19c.8-3.1 3.2-4.7 6.4-4.7s5.6 1.6 6.4 4.7"
        stroke={active ? '#E12533' : '#8B93A7'}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconBack() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5.5 8.5 12 15 18.5" stroke="#1B2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconExit() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 5H6.5A1.5 1.5 0 0 0 5 6.5v11A1.5 1.5 0 0 0 6.5 19H10" stroke="#E12533" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 12h9M16.5 8.5 20 12l-3.5 3.5" stroke="#E12533" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconSpeaker() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 9.5h3.2L12 5.8v12.4L7.2 14.5H4V9.5Z" fill="#1B2744" />
      <path d="M16 9.2a4.2 4.2 0 0 1 0 5.6M18.4 7a7 7 0 0 1 0 10" stroke="#1B2744" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function IconPhone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.2 3.8c.4-.4 1.1-.5 1.6-.2l2.2 1.3c.5.3.7.9.6 1.5l-.5 2.3a1.2 1.2 0 0 1-.7.8l-1.6.6a11 11 0 0 0 5.1 5.1l.6-1.6c.2-.4.5-.6.8-.7l2.3-.5c.6-.1 1.2.1 1.5.6l1.3 2.2c.3.5.2 1.2-.2 1.6l-1.3 1.3c-.5.5-1.2.7-1.9.6C11.4 18.3 5.7 12.6 5.3 7c-.1-.7.1-1.4.6-1.9L7.2 3.8Z"
        fill="#E12533"
      />
    </svg>
  )
}

export function IconHeartPulse() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20S4.8 15.4 4.8 10.4C4.8 7.7 7 5.8 9.5 5.8c1.4 0 2.4.7 2.5 2 .1-1.3 1.1-2 2.5-2 2.5 0 4.7 1.9 4.7 4.6C19.2 15.4 12 20 12 20Z"
        fill="#E12533"
      />
      <path d="M7.2 11.2h2.2l1.3-2.4 1.8 4.6 1.2-2.2H16.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconStopwatch() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="7.2" stroke="#E12533" strokeWidth="1.8" />
      <path d="M12 13V9.4M9.5 4.2h5M12 4.2V6" stroke="#E12533" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconPause() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1.2" fill="#E12533" />
      <rect x="14" y="5" width="4" height="14" rx="1.2" fill="#E12533" />
    </svg>
  )
}

export function IconPlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13L19 12 8 5.5Z" fill="#E12533" />
    </svg>
  )
}

export function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6.5 12.2 3.6 3.6 7.4-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m7 7 10 10M17 7 7 17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 6.5h11.5A2.5 2.5 0 0 1 19 9v9H7.2A2.2 2.2 0 0 1 5 16V6.5Z" stroke="#3B82F6" strokeWidth="1.7" />
      <path d="M8 9.2h7.5M8 12.2h5" stroke="#3B82F6" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function IconAed() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20S5.5 15.6 5.5 10.8C5.5 8.2 7.5 6.4 9.8 6.4c1.3 0 2.2.7 2.2 1.9.1-1.2 1-1.9 2.3-1.9 2.3 0 4.2 1.8 4.2 4.4C18.5 15.6 12 20 12 20Z" fill="#22C55E" />
      <path d="m11.1 8.6 1.2 3H9.8l3.2 4.6-.9-3H15l-3.9-4.6Z" fill="#fff" />
    </svg>
  )
}

export function IconHospital() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="14" height="12" rx="2" stroke="#7C5CFF" strokeWidth="1.7" />
      <path d="M12 9.2v6M9 12.2h6" stroke="#7C5CFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconAccess() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="6.4" r="1.8" fill="#F59E0B" />
      <path d="M8.2 10.2c2.4-1 5.2-1 7.6 0M12 10.6v3.2l2.6 4.2M12 13.8 8.6 16" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function IconChevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCallPlus() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.8 7.6c.3-2 2-3.3 4-3.1l1.2.1c.6.1 1 .6 1 1.2l.1 1.8c0 .5-.3 1-.7 1.2L8.8 9.6a8.8 8.8 0 0 0 5.6 5.6l.8-1.6c.2-.4.7-.7 1.2-.7l1.8.1c.6 0 1.1.4 1.2 1l.1 1.2c.2 2-1.1 3.7-3.1 4-2.7.4-7.3-.4-10.4-3.5C5.2 14.9 4.4 10.3 4.8 7.6Z" fill="#fff" />
      <circle cx="18.2" cy="6" r="3.2" fill="#fff" />
      <path d="M18.2 4.6v2.8M16.8 6h2.8" stroke="#E12533" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 19 6.2v5.3c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6.2L12 3.5Z" fill="#3B82F6" />
      <path d="m8.8 12.2 2.2 2.2 4.4-4.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPeople() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" aria-hidden="true">
      <path d="M26 21c0-3.4 2.2-5.2 5-5.2S36 17.6 36 21" stroke="#1B2744" strokeWidth="1.6" />
      <circle cx="31" cy="8.2" r="2.4" stroke="#1B2744" strokeWidth="1.6" />
      <path d="M12 21c0-4.2 3-6.4 7-6.4s7 2.2 7 6.4" stroke="#1B2744" strokeWidth="1.6" />
      <circle cx="19" cy="7.4" r="3" stroke="#1B2744" strokeWidth="1.6" />
      <path d="M1 21c0-3.4 2.2-5.2 5-5.2S11 17.6 11 21" stroke="#1B2744" strokeWidth="1.6" />
      <circle cx="6" cy="8.2" r="2.4" stroke="#1B2744" strokeWidth="1.6" />
      <path d="M22.2 4.2c1.3-1.6 3.6-1.6 4.6 0" stroke="#E12533" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconTipHand() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#E12533" strokeWidth="1.5" />
      <path d="M8.2 13.2c0-2 1.2-3.4 2.4-3.4.3-1.2 1.2-2 2.2-1.5.4-1 1.4-1.3 2.1-.6.6.6.6 1.5.4 2.3h.3c.8 0 1.4.7 1.4 1.5 0 2.2-1.6 4.3-4.4 4.3-2.2 0-4.4-1.2-4.4-2.6Z" stroke="#E12533" strokeWidth="1.4" />
    </svg>
  )
}

export function IconTipArms() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#E12533" strokeWidth="1.5" />
      <path d="M8 16.5c.4-3 1.6-6.2 4-8.8 2.4 2.6 3.6 5.8 4 8.8" stroke="#E12533" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="6.8" r="1.1" fill="#E12533" />
    </svg>
  )
}

export function IconTipChest() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#E12533" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="#E12533" strokeWidth="1.4" />
      <path d="M12 7.4V6.2M12 17.8v-1.2M16.6 12h1.2M6.2 12h1.2" stroke="#E12533" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
