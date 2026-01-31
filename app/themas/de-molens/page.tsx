'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MemberGate from '@/components/MemberGate'
import { ThemeTabs } from '@/components/ThemeTabs'
import { DidacticRoute } from '@/components/DidacticRoute'
import { getThemeConfig } from '@/src/data/theme-config'
import { ThemeTab } from '@/src/types/theme'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeft, 
  Wind, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Sprout,
  Lightbulb,
  Search,
  Gavel,
  Cog
} from 'lucide-react'

export default function MolensPage() {
  // State voor geselecteerde tab en route
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  // Routes per bouw
  const routes = {
    onderbouw: {
      titel: 'De Reus in het Landschap',
      focus: 'Verwondering, windkracht en beweging',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken dat wind kracht heeft en dat molens deze kracht gebruiken om te werken. Ze maken kennis met molens als grote, bewegende reuzen in het landschap.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Molen die Wou Draaien": Het verhaal van een molen die stil staat en wacht op de wind. De kinderen worden molenaars die de molen wakker moeten maken met hun adem (wind).',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie De Zaansche Molen: Een bezoek aan een werkende molen. De kinderen voelen de wind, zien de wieken draaien en horen het geluid van de molen. Ze ervaren de kracht van wind met hun zintuigen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Techniek: Windmolentjes knutselen en testen in de wind. Spel: De bouwhoek wordt een molenwerf waar molens worden gebouwd. Beweging: Windspelletjes - wat kan wind doen?',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Molenfeest: Ouders komen kijken naar de zelfgemaakte molentjes. De kinderen demonstreren hoe hun molens werken en vertellen het verhaal van de molen.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'De Molenmeester',
      focus: 'Techniek, verschillende molentypen en productie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over verschillende molentypen (houtzaagmolen, cacaomolen, oliemolen) en begrijpen wat elke molen produceert. Ze leren de basis van hoe een molen werkt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Molenmeester en zijn Vakmanschap": Het verhaal van een molenaar die verschillende molens beheert. Elke molen heeft een eigen taak: de ene zaagt hout, de andere maalt cacao. De leerlingen worden hulpjes van de molenmeester.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek aan Molens: Een excursie naar verschillende molens in de Zaanstreek. Leerlingen zien hoe een houtzaagmolen werkt, bezoeken een cacaomolen en leren over de productieprocessen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Constructie: Techniek: Het bouwen van een miniatuur molen met werkende onderdelen. Onderzoek: Verschillende molentypen vergelijken en categoriseren. Geschiedenis: Onderzoek naar de geschiedenis van molens in de Zaanstreek.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Molenmarkt: De klas wordt een molenmarkt. Leerlingen presenteren hun zelfgebouwde molens en vertellen over de verschillende molentypen en hun functies.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Van Wind naar Stoom',
      focus: 'Energietransitie, technologische ontwikkeling en industrie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen de transitie van windkracht naar stoomkracht. Ze leren over de industriële revolutie en hoe dit de Zaanstreek veranderde van molens naar fabrieken.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Strijd tussen Wind en Stoom": Het verhaal van de molens die langzaam worden vervangen door stoommachines. De leerlingen worden ingenieurs die moeten kiezen: wind of stoom?',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Contrast-Excursie: Een bezoek aan een werkende molen gevolgd door een bezoek aan een oude fabriek of museum. Leerlingen ervaren het verschil tussen windkracht en stoomkracht.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Ontwerp: Techniek: Het vergelijken van wind- en stoomkracht met proefjes. Onderzoek: De industriële ontwikkeling van de Zaanstreek in kaart brengen. Ontwerp: Een plan maken voor een moderne, duurzame molen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Energietentoonstelling: Leerlingen presenteren hun onderzoek naar wind- en stoomkracht en hun visie op duurzame energie voor de toekomst.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'De Toekomst van Energie',
      focus: 'Duurzaamheid, energietransitie en systeemdenken',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de energietransitie van wind naar stoom naar fossiel naar duurzaam. Ze ontwikkelen een visie op duurzame energie en begrijpen de complexiteit van energietransitie.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"2050: De Zaanstreek zonder Fossiel": Een scenario vanuit de toekomst. De wereld draait op duurzame energie. De leerlingen krijgen de opdracht om een plan te maken voor een volledig duurzame Zaanstreek.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Lab-Experience: Een bezoek aan een moderne windmolenpark of zonnepark. Leerlingen zien hoe moderne duurzame energie werkt en vergelijken dit met historische molens.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Debat: Onderzoek: De energietransitie in kaart brengen en analyseren. Burgerschap: Het Grote Energiedebat - wat is de beste route naar duurzaamheid? Ontwerp: Een plan maken voor een duurzame Zaanstreek met moderne technologie.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Energiecongres: Leerlingen presenteren hun visie op een duurzame toekomst aan een jury en verdedigen hun keuzes voor verschillende energievormen.',
          icon: Users
        }
      ]
    }
  }

  // Tabs data voor de vier bouwen
  const tabs = [
    {
      id: 'onderbouw',
      label: 'onderbouw',
      subtitle: 'Groep 1-2',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Reus in het Landschap
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Verwondering, windkracht en beweging</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Molen die Wou Draaien": Het verhaal van een molen die stil staat en wacht op de wind. De kinderen worden molenaars die de molen wakker moeten maken met hun adem (wind).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie De Zaansche Molen:</strong> Bezoek aan een werkende molen. Wind voelen, wieken zien draaien en geluid horen.</p>
              <p><strong>Maken:</strong> Windmolentjes knutselen en testen. De bouwhoek wordt een molenwerf. Windspelletjes spelen.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'middenbouw34',
      label: 'middenbouw',
      subtitle: 'Groep 3-4',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Molenmeester
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Techniek, verschillende molentypen en productie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Molenmeester en zijn Vakmanschap": Het verhaal van een molenaar die verschillende molens beheert. Elke molen heeft een eigen taak: de ene zaagt hout, de andere maalt cacao. De leerlingen worden hulpjes van de molenmeester.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek aan Molens:</strong> Excursie naar verschillende molens in de Zaanstreek. Zien hoe een houtzaagmolen werkt en een cacaomolen bezoeken.</p>
              <p><strong>Onderzoek:</strong> Het bouwen van een miniatuur molen. Verschillende molentypen vergelijken. Onderzoek naar de geschiedenis van molens.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'middenbouw56',
      label: 'middenbouw',
      subtitle: 'Groep 5-6',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              Van Wind naar Stoom
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Energietransitie, technologische ontwikkeling en industrie</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Strijd tussen Wind en Stoom": Het verhaal van de molens die langzaam worden vervangen door stoommachines. De leerlingen worden ingenieurs die moeten kiezen: wind of stoom?
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Contrast-Excursie:</strong> Bezoek aan een werkende molen gevolgd door een bezoek aan een oude fabriek. Ervaren het verschil tussen windkracht en stoomkracht.</p>
              <p><strong>Onderzoek:</strong> Het vergelijken van wind- en stoomkracht met proefjes. De industriële ontwikkeling in kaart brengen. Een plan maken voor een moderne, duurzame molen.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bovenbouw',
      label: 'bovenbouw',
      subtitle: 'Groep 7-8',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cyan-700 mb-3">
              De Toekomst van Energie
            </h3>
            <div className="bg-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-cyan-600">
              <p className="text-sm font-semibold text-cyan-900 mb-2">Focus:</p>
              <p className="text-gray-700">Duurzaamheid, energietransitie en systeemdenken</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-cyan-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "2050: De Zaanstreek zonder Fossiel": Een scenario vanuit de toekomst. De wereld draait op duurzame energie. De leerlingen krijgen de opdracht om een plan te maken voor een volledig duurzame Zaanstreek.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cyan-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-cyan-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Lab-Experience:</strong> Bezoek aan een moderne windmolenpark of zonnepark. Zien hoe moderne duurzame energie werkt en vergelijken met historische molens.</p>
              <p><strong>Analyse en Debat:</strong> De energietransitie in kaart brengen. Het Grote Energiedebat - wat is de beste route naar duurzaamheid? Een plan maken voor een duurzame Zaanstreek.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  // Handler voor tab wijziging
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    // Update selectedBouw op basis van de geselecteerde tab
    if (tabId === 'onderbouw') {
      setSelectedBouw('onderbouw')
    } else if (tabId === 'middenbouw34') {
      setSelectedBouw('middenbouw34')
    } else if (tabId === 'middenbouw56') {
      setSelectedBouw('middenbouw56')
    } else if (tabId === 'bovenbouw') {
      setSelectedBouw('bovenbouw')
    }
  }

  // Functie om de actieve route te bepalen op basis van de geselecteerde bouw
  const getActiveRoute = () => {
    return routes[selectedBouw]
  }

  const activeRoute = getActiveRoute()
  const themeConfig = getThemeConfig('de-molens')
  const colorScheme = themeConfig.colorScheme!

  // Rijke Teksten
  const boeken = {
    informatief: [
      'Wind in de wieken, Jort en Jikke en de wind',
      'Cacao langs de Zaan; de molens - de fabrieken',
      'De Zaanstreek: het oudste industriegebied'
    ],
    leesboeken: [
      'De molen van Jan (Annie M.G. Schmidt)',
      'Kikker en de wind (Velthuijs)',
      'De windmolen (Ton van Reen)'
    ]
  }

  // Downloads
  const downloads = [
    { title: 'Lesbrief_Molens_Gr1-2.pdf', type: 'PDF' },
    { title: 'Constructie_Mini_Molen_Gr3-4.pdf', type: 'PDF' },
    { title: 'Energietransitie_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          {/* Abstract wind/molen background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de Molens
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Windkracht & Industrie
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Zaanstreek is het oudste industriegebied van Europa, waar windmolens de motor waren van de eerste industriële revolutie. Van houtzaagmolens tot cacaomolens - ontdek hoe windkracht de Zaanstreek vormde.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Back button */}
          <Link 
            href="/themas"
            className="inline-flex items-center text-cyan-700 hover:text-cyan-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          {/* Main Content with Sidebar - 70/30 split */}
          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            {/* Main Content - 70% */}
            <div className="lg:col-span-7 px-2 sm:px-0">
              {/* Tabs System */}
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-cyan-600"
                activeBorderColor="border-cyan-600"
                onTabChange={handleTabChange}
              />

              {/* 5-Fasen Verticale Lijst */}
              <DidacticRoute
                phases={activeRoute.fasen}
                title={activeRoute.titel}
                focus={activeRoute.focus}
                colorScheme={colorScheme}
              />
            </div>

            {/* Sidebar - 30% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Boekenplank */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="h-10 w-10 text-cyan-700 mr-2" />
                    Boekenplank (rijke teksten)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MemberGate>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Informatief:</p>
                        <ul className="space-y-1">
                          {boeken.informatief.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-cyan-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-cyan-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-xs text-gray-500 italic mt-3">
                        Beschikbaar via Zaanse Bibliotheken
                      </p>
                    </div>
                  </MemberGate>
                </CardContent>
              </Card>

              {/* Partner Uitgelicht */}
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-cyan-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    De Zaansche Molen
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Bezoek werkende molens en ontdek hoe windkracht wordt omgezet in beweging en productie.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bekijk educatief aanbod
                  </Button>
                </CardContent>
              </Card>

              {/* Leerkracht Toolkit */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <FileText className="h-10 w-10 text-cyan-700 mr-2" />
                    Leerkracht toolkit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MemberGate>
                    <div className="space-y-3">
                      {downloads.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-cyan-600 hover:bg-cyan-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-cyan-600 group-hover:text-cyan-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-cyan-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-cyan-600 flex-shrink-0" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </MemberGate>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
