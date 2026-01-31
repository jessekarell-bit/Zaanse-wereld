import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Tabs from '@/components/Tabs'
import { 
  Target,
  BookOpen,
  MapPin,
  Lightbulb,
  Megaphone,
  Brain,
  Compass,
  Layers,
  Percent,
  GraduationCap,
  Users,
  Sparkles,
} from 'lucide-react'

export default function DidactiekPage() {
  // Spiraalcurriculum tabs data
  const spiraalTabs = [
    {
      id: 'onderbouw',
      label: 'onderbouw',
      content: (
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-deep-water-blue mb-4">
            Zintuiglijk ervaren
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-polder-green text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                1
              </span>
              <span className="text-gray-700">Wind, water en beweging - de molen voelen en ervaren</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-polder-green text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                2
              </span>
              <span className="text-gray-700">Verhalen en mythes (de molens als reuzen) als eerste kennismaking</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-polder-green text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                3
              </span>
              <span className="text-gray-700">Eenvoudige begrippen: wind, kracht, beweging</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'middenbouw',
      label: 'middenbouw',
      content: (
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-deep-water-blue mb-4">
            Ontdekken & techniek
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-water-blue text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                1
              </span>
              <span className="text-gray-700">Hoe werkt een molen? Technische principes ontdekken</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-water-blue text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                2
              </span>
              <span className="text-gray-700">Historische sporen in het landschap (molens, fabrieken)</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-deep-water-blue text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                3
              </span>
              <span className="text-gray-700">Onderzoek naar de transitie van wind naar stoom</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'bovenbouw',
      label: 'bovenbouw',
      content: (
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-deep-water-blue mb-4">
            Analyse & beleid
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brick-red text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                1
              </span>
              <span className="text-gray-700">Systeemdenken: industrie als complex systeem</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brick-red text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                2
              </span>
              <span className="text-gray-700">Energietransitie: dilemma's en toekomstscenario's</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brick-red text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                3
              </span>
              <span className="text-gray-700">Debat over duurzaamheid en innovatie</span>
            </li>
          </ul>
        </div>
      )
    }
  ]

  // 5-Fasen methodiek data
  const fasen = [
    {
      nummer: 1,
      titel: 'Doelbepaling',
      beschrijving: 'We starten vanuit de leerlijnen (SLO), niet vanuit de activiteit.',
      icon: Target,
      kleurClass: 'bg-deep-water-blue'
    },
    {
      nummer: 2,
      titel: 'Narratieve inbedding',
      beschrijving: 'Een pakkend verhaal (bijv. de Verkade-meisjes) als \'haakje\' voor het leren.',
      icon: BookOpen,
      kleurClass: 'bg-polder-green'
    },
    {
      nummer: 3,
      titel: 'Activering',
      beschrijving: 'De klas uit! Naar het Zaans Museum, de molen of het bedrijf (Authentiek leren).',
      icon: MapPin,
      kleurClass: 'bg-brick-red'
    },
    {
      nummer: 4,
      titel: 'Concretisering',
      beschrijving: 'Verwerking in de klas (onderzoek, experimenten, maken).',
      icon: Lightbulb,
      kleurClass: 'bg-polder-green'
    },
    {
      nummer: 5,
      titel: 'Authentieke afsluiting',
      beschrijving: 'Presenteren aan een echt publiek (ouders, experts), niet alleen een toetsje.',
      icon: Megaphone,
      kleurClass: 'bg-deep-water-blue'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-water-blue mb-6 leading-tight">
              Onderwijs met de voeten in de Zaan en de blik op de wereld
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hoe we landelijke SLO-kerndoelen (70%) verbinden met de kracht van de Zaanstreek (30%) in een doorlopende leerlijn.
            </p>
          </div>
        </section>

        {/* Het 70/30 Model Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-12">
              Het 70/30 model: de kernvisie
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* 70% De Basis */}
              <Card className="border-2 border-deep-water-blue/20">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-deep-water-blue to-blue-800 rounded-lg p-3 mr-4">
                      <Percent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-2xl">70% de basis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Landelijke eisen, Taal, Rekenen, Burgerschap. Wij tornen niet aan de basis, wij verrijken hem.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-deep-water-blue mr-2"></span>
                      SLO-kerndoelen als fundament
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-deep-water-blue mr-2"></span>
                      Taal en rekenen verankerd
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-deep-water-blue mr-2"></span>
                      Burgerschapsvorming
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* 30% De Context */}
              <Card className="border-2 border-polder-green/20">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-polder-green to-green-700 rounded-lg p-3 mr-4">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-2xl">30% de context</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    De Zaanstreek als het 'levend laboratorium'. Hier passen we de kennis toe in de praktijk.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-polder-green mr-2"></span>
                      Regionale verankering
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-polder-green mr-2"></span>
                      Praktijkgericht leren
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-polder-green mr-2"></span>
                      Herkenbare context
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quote */}
            <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-polder-green max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic text-center font-serif">
                "Leren is effectiever als de context herkenbaar is."
              </p>
            </div>
          </div>
        </section>

        {/* De 5-Fasen Methodiek Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-4">
              De 5-fasen methodiek: de motor
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Dit is de kern van onze didactiek. Elke fase bouwt voort op de vorige en zorgt voor diepgaand, betekenisvol leren.
            </p>
            
            {/* Simple vertical timeline */}
            <div className="max-w-4xl mx-auto space-y-6">
              {fasen.map((fase, index) => {
                const Icon = fase.icon
                return (
                  <Card key={fase.nummer} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`${fase.kleurClass} rounded-full p-4 flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-gray-500">Stap {fase.nummer}</span>
                            <h3 className="font-serif text-xl font-bold text-deep-water-blue">
                              {fase.titel}
                            </h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {fase.beschrijving}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Het Spiraalcurriculum Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-6">
              Het spiraalcurriculum: verticale samenhang
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
              Hoe één wereld (bijv. De Molens) meegroeit met het kind van onderbouw tot bovenbouw.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Tabs tabs={spiraalTabs} defaultTab="onderbouw" />
            </div>
          </div>
        </section>

        {/* Kwaliteitsborging Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-water-blue text-center mb-12">
              Kwaliteitsborging: Biesta & spinnenweb
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Curriculair Spinnenweb */}
              <Card className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg p-3 mb-4">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl">Curriculair Spinnenweb</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4 text-center">
                    We werken met het Curriculair Spinnenweb van <strong>Thijs van den Akker</strong> om balans te houden tussen:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gray-700 mr-2"></span>
                      Visie en doelen
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gray-700 mr-2"></span>
                      Inhoud en activiteiten
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gray-700 mr-2"></span>
                      Materialen en bronnen
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-gray-700 mr-2"></span>
                      Rol van de leerkracht
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Biesta's Drie Doeldomeinen */}
              <Card className="bg-white border-2 border-gray-200">
                <CardHeader>
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="bg-gradient-to-br from-deep-water-blue to-blue-800 rounded-lg p-3 mb-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl">Biesta's Drie Doeldomeinen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-polder-green pl-4">
                      <h4 className="font-semibold text-deep-water-blue mb-1 flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Kwalificatie
                      </h4>
                      <p className="text-sm text-gray-600">Kennis en vaardigheden verwerven</p>
                    </div>
                    <div className="border-l-4 border-deep-water-blue pl-4">
                      <h4 className="font-semibold text-deep-water-blue mb-1 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Socialisatie
                      </h4>
                      <p className="text-sm text-gray-600">Cultuur en traditie (Wie ben ik in de Zaanstreek?)</p>
                    </div>
                    <div className="border-l-4 border-brick-red pl-4">
                      <h4 className="font-semibold text-deep-water-blue mb-1 flex items-center">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Persoonsvorming
                      </h4>
                      <p className="text-sm text-gray-600">Eigen identiteit ontwikkelen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
