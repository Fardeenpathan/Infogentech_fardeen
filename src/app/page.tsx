import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { BackgroundEffects } from '@/components/background-effects'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      {/* <StatsSection /> */}
    </main>
  )
}
