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
  Waves, 
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
  Droplets
} from 'lucide-react'

export default function PoldersPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'Water en Droog Land',
      focus: 'Zintuiglijke ervaring, nat en droog, waterbeheer',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken het verschil tussen nat en droog. Ze ervaren water met al hun zintuigen. Ze maken kennis met polders als natte en droge plekken.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Guisveld: Nat en Droog": Het verhaal van een gebied dat soms nat is en soms droog. De kinderen worden waterbeheerders die moeten zorgen dat het land droog blijft.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Polders: Een bezoek aan het Guisveld of andere polders. De kinderen voelen water, zien sloten en leren over nat en droog.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Spel: Waterproeven en experimenten. Techniek: Dijken bouwen in de zandtafel. Beweging: Water en land verkennen.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Waterfeest: Ouders komen kijken naar de waterproeven. De kinderen demonstreren hun dijken en vertellen over nat en droog.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Waterbeheer en Polders',
      focus: 'Techniek, waterbeheer en polders',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over waterbeheer en hoe polders werken. Ze begrijpen hoe water wordt beheerd en hoe het land droog blijft.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Watermeester": Het verhaal van een watermeester die zorgt dat het water op de juiste plek blijft. De leerlingen worden hulpjes van de watermeester.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Guisveld: Een excursie naar het Guisveld. Leerlingen zien hoe water wordt beheerd en leren over polders.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Constructie: Techniek: Het bouwen van een waterbeheersysteem. Onderzoek: Polders in kaart brengen. Geschiedenis: Onderzoek naar waterbeheer.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Waterbeheer Tentoonstelling: De klas wordt een waterbeheercentrum. Leerlingen presenteren hun waterbeheersystemen en vertellen over polders.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Molenbiotoop en Waterhuishouding',
      focus: 'Systeemdenken, waterhuishouding en techniek',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat waterbeheer een systeem is. Ze leren over molenbiotoop en hoe waterhuishouding werkt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Waternetwerk": Het verhaal van een complex waternetwerk dat moet werken om het land droog te houden. De leerlingen worden ingenieurs die het systeem moeten begrijpen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Systeem Excursie: Een bezoek aan een waterbeheersysteem. Leerlingen zien hoe verschillende onderdelen samenwerken.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Analyse: Systeemdenken: Het waterbeheersysteem analyseren. Techniek: Het ontwerpen van een verbeterd systeem. Onderzoek: De waterhuishouding in kaart brengen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Watercongres: Leerlingen presenteren hun analyse van het waterbeheersysteem en hun verbeteringen.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Klimaatadaptatie en Toekomst',
      focus: 'Klimaatadaptatie, duurzaamheid en toekomstscenario\'s',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de uitdagingen van klimaatverandering voor waterbeheer. Ze ontwikkelen een visie op duurzame waterbeheer en klimaatadaptatie.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"2050: De Zaanstreek en het Water": Een scenario vanuit de toekomst. Het klimaat is veranderd en waterbeheer moet anders. De leerlingen krijgen de opdracht om een plan te maken voor klimaatadaptatie.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Toekomst Lab: Een bezoek aan een klimaatadaptatieproject of waterbeheercentrum. Leerlingen zien hoe toekomstscenario\'s worden voorbereid.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Ontwerp: Onderzoek: Toekomstscenario\'s analyseren. Burgerschap: Het Grote Klimaatdebat - hoe passen we ons aan? Ontwerp: Een plan maken voor klimaatadaptatie.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Klimaatcongres: Leerlingen presenteren hun visie op klimaatadaptatie aan een jury en verdedigen hun plannen voor de toekomst.',
          icon: Users
        }
      ]
    }
  }

  const tabs = [
    {
      id: 'onderbouw',
      label: 'onderbouw',
      subtitle: 'Groep 1-2',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-teal-700 mb-3">
              Water en Droog Land
            </h3>
            <div className="bg-teal-50 rounded-lg p-4 mb-4 border-l-4 border-teal-600">
              <p className="text-sm font-semibold text-teal-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuiglijke ervaring, nat en droog, waterbeheer</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-teal-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Guisveld: Nat en Droog": Het verhaal van een gebied dat soms nat is en soms droog. De kinderen worden waterbeheerders die moeten zorgen dat het land droog blijft.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-teal-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Polders:</strong> Bezoek aan het Guisveld of andere polders. Water voelen, sloten zien en leren over nat en droog.</p>
              <p><strong>Maken:</strong> Waterproeven en experimenten. Dijken bouwen in de zandtafel. Water en land verkennen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-teal-700 mb-3">
              Waterbeheer en Polders
            </h3>
            <div className="bg-teal-50 rounded-lg p-4 mb-4 border-l-4 border-teal-600">
              <p className="text-sm font-semibold text-teal-900 mb-2">Focus:</p>
              <p className="text-gray-700">Techniek, waterbeheer en polders</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-teal-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Watermeester": Het verhaal van een watermeester die zorgt dat het water op de juiste plek blijft. De leerlingen worden hulpjes van de watermeester.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-teal-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Guisveld:</strong> Excursie naar het Guisveld. Zien hoe water wordt beheerd en leren over polders.</p>
              <p><strong>Onderzoek:</strong> Het bouwen van een waterbeheersysteem. Polders in kaart brengen. Onderzoek naar waterbeheer.</p>
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
            <h3 className="font-serif text-2xl font-bold text-teal-700 mb-3">
              Molenbiotoop en Waterhuishouding
            </h3>
            <div className="bg-teal-50 rounded-lg p-4 mb-4 border-l-4 border-teal-600">
              <p className="text-sm font-semibold text-teal-900 mb-2">Focus:</p>
              <p className="text-gray-700">Systeemdenken, waterhuishouding en techniek</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-teal-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Waternetwerk": Het verhaal van een complex waternetwerk dat moet werken om het land droog te houden. De leerlingen worden ingenieurs die het systeem moeten begrijpen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-teal-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Systeem Excursie:</strong> Bezoek aan een waterbeheersysteem. Zien hoe verschillende onderdelen samenwerken.</p>
              <p><strong>Onderzoek:</strong> Het waterbeheersysteem analyseren. Het ontwerpen van een verbeterd systeem. De waterhuishouding in kaart brengen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-teal-700 mb-3">
              Klimaatadaptatie en Toekomst
            </h3>
            <div className="bg-teal-50 rounded-lg p-4 mb-4 border-l-4 border-teal-600">
              <p className="text-sm font-semibold text-teal-900 mb-2">Focus:</p>
              <p className="text-gray-700">Klimaatadaptatie, duurzaamheid en toekomstscenario's</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-teal-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "2050: De Zaanstreek en het Water": Een scenario vanuit de toekomst. Het klimaat is veranderd en waterbeheer moet anders. De leerlingen krijgen de opdracht om een plan te maken voor klimaatadaptatie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-teal-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Toekomst Lab:</strong> Bezoek aan een klimaatadaptatieproject of waterbeheercentrum. Zien hoe toekomstscenario's worden voorbereid.</p>
              <p><strong>Analyse en Ontwerp:</strong> Toekomstscenario's analyseren. Het Grote Klimaatdebat - hoe passen we ons aan? Een plan maken voor klimaatadaptatie.</p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
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

  const activeRoute = routes[selectedBouw]
  const themeConfig = getThemeConfig('de-polders')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Polder',
      'Waterbeheer in Nederland',
      'Het Guisveld: natuur en water'
    ],
    leesboeken: [
      'De polder (jeugdboek)',
      'Water (Ton van Reen)',
      'Nat en droog (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Polders_Gr1-2.pdf', type: 'PDF' },
    { title: 'Waterbeheer_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Klimaatadaptatie_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-teal-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de Polders
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-teal-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Waterbeheer & Klimaat
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Zaanse polders vertellen het verhaal van de strijd tegen het water. Van het Guisveld tot waterbeheer - ontdek hoe de Zaanstreek het water temde.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-teal-600"
                activeBorderColor="border-teal-600"
                onTabChange={handleTabChange}
              />

              <DidacticRoute
                phases={activeRoute.fasen}
                title={activeRoute.titel}
                focus={activeRoute.focus}
                colorScheme={colorScheme}
              />
            </div>

            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="h-10 w-10 text-teal-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-teal-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-teal-600 pl-3">
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

              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-teal-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-teal-700 mb-2">
                    Guisveld - Natuurgebied
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek de polders en het waterbeheer in dit unieke natuurgebied.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bekijk educatief aanbod
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <FileText className="h-10 w-10 text-teal-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-teal-600 hover:bg-teal-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-teal-600 group-hover:text-teal-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-teal-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-teal-600 flex-shrink-0" />
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
