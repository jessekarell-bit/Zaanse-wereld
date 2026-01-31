'use client'

import { ReactNode } from 'react'

interface MemberGateProps {
  children: ReactNode
}

export default function MemberGate({ children }: MemberGateProps) {
  // Voor nu tonen we alles, later kan hier authenticatie worden toegevoegd
  return <>{children}</>
}
