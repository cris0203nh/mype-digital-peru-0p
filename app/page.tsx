import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { DiagnosticForm } from '@/components/diagnostic_form'
import { ToolsSection } from '@/components/tools_section'
import { TrainingCards } from '@/components/training_cards'
import { ResultsSection } from '@/components/results_section'
import { MetricsSection } from '@/components/metrics_section'
import { SocialNetworks } from '@/components/social_networks'
import { Footer } from '@/components/footer'
import { DigitalAssistant } from '@/components/digital_assistant'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DiagnosticForm />
        <ToolsSection />
        <TrainingCards />
        <ResultsSection />
        <MetricsSection />
        <SocialNetworks />
      </main>
      <Footer />
      <DigitalAssistant />
    </div>
  )
}
