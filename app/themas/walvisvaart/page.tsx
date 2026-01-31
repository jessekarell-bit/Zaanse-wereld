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
  Ship, 
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
  Waves
} from 'lucide-react'

export default function WalvisvaartPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'De Grote Walvis en het Schip',
      focus: 'Verwondering, schepen en walvissen',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken dat schepen groot zijn en ver kunnen reizen. Ze maken kennis met walvissen als grote dieren in de zee. Ze verwonderen zich over de grote zee.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Walvisvaarder": Het verhaal van een schipper die met zijn schip naar de zee vaart om walvissen te zoeken. De kinderen worden matrozen die mee mogen varen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Walvis: Een bezoek aan het Zaans Museum tijdens de Walvisweken. De kinderen zien grote schepen, walvissen en leren over de zee.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Techniek: Schepen tekenen en bouwen. Spel: De bouwhoek wordt een scheepswerf. Beweging: Walvisweken activiteiten en verhalen.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Walvisfeest: Ouders komen kijken naar de zelfgemaakte schepen. De kinderen demonstreren hun schepen en vertellen het verhaal van de walvisvaarder.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Scheepsbouw in Jisp',
      focus: 'Techniek, scheepsbouw en wereldhandel',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over scheepsbouwtechnieken. Ze begrijpen hoe schepen worden gebouwd en wat ze nodig hebben om te varen. Ze leren over wereldhandel.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Scheepsbouwer van Jisp": Het verhaal van een scheepsbouwer in Jisp die schepen bouwt voor de walvisvaart. De leerlingen worden hulpjes van de scheepsbouwer.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Scheepswerf: Een excursie naar een scheepswerf of museum. Leerlingen zien hoe schepen worden gebouwd en leren over de techniek.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Constructie: Techniek: Het bouwen van een miniatuur schip. Onderzoek: Verschillende scheepstypen vergelijken. Geschiedenis: Onderzoek naar scheepsbouw in Jisp.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Scheepswerf Tentoonstelling: De klas wordt een scheepswerf. Leerlingen presenteren hun zelfgebouwde schepen en vertellen over scheepsbouw.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'De Walvisvaart en Wereldhandel',
      focus: 'Economie, globalisering en handel',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat walvisvaart onderdeel was van wereldhandel. Ze leren over de economische impact en hoe de Zaanstreek verbonden was met de wereld.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Handelsreis": Het verhaal van een schipper die met zijn schip naar verre landen vaart om walvissen te vangen en producten te verkopen. De leerlingen worden handelaars.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Historische Excursie: Een bezoek aan historische locaties gerelateerd aan walvisvaart. Leerlingen zien waar schepen vertrokken en terugkwamen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Kaart: Geschiedenis: Onderzoek naar walvisvaart en handel. Geografie: Wereldkaart maken met handelsroutes. Economie: De economische impact in kaart brengen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Handelsmarkt: Leerlingen presenteren hun onderzoek naar walvisvaart en handel. Ze tonen hun wereldkaarten met handelsroutes.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Globalisering en Duurzaamheid',
      focus: 'Ethiek, duurzaamheid en historische impact',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de historische globalisering en de impact daarvan. Ze denken kritisch na over duurzaamheid en ethiek van jacht.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Toekomst van de Zee": Een scenario vanuit het heden. De zee is veranderd door menselijk handelen. De leerlingen krijgen de opdracht om een plan te maken voor duurzaam gebruik van de zee.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Lab-Experience: Een bezoek aan een modern zeeonderzoekscentrum of museum. Leerlingen zien hoe de zee wordt beschermd en leren over duurzaamheid.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Debat: Onderzoek: De economische impact van walvisvaart analyseren. Burgerschap: Het Grote Duurzaamheidsdebat - hoe gebruiken we de zee? Ethiek: Onderzoek naar duurzaamheid en ethiek van jacht.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Zeeconferentie: Leerlingen presenteren hun visie op duurzaam gebruik van de zee aan een jury en verdedigen hun standpunten over ethiek en duurzaamheid.',
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
            <h3 className="font-serif text-2xl font-bold text-blue-700 mb-3">
              De Grote Walvis en het Schip
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-600">
              <p className="text-sm font-semibold text-blue-900 mb-2">Focus:</p>
              <p className="text-gray-700">Verwondering, schepen en walvissen</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Walvisvaarder": Het verhaal van een schipper die met zijn schip naar de zee vaart om walvissen te zoeken. De kinderen worden matrozen die mee mogen varen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-blue-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Walvis:</strong> Bezoek aan het Zaans Museum tijdens de Walvisweken. Grote schepen, walvissen en de zee zien.</p>
              <p><strong>Maken:</strong> Schepen tekenen en bouwen. De bouwhoek wordt een scheepswerf. Walvisweken activiteiten en verhalen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-blue-700 mb-3">
              Scheepsbouw in Jisp
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-600">
              <p className="text-sm font-semibold text-blue-900 mb-2">Focus:</p>
              <p className="text-gray-700">Techniek, scheepsbouw en wereldhandel</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Scheepsbouwer van Jisp": Het verhaal van een scheepsbouwer in Jisp die schepen bouwt voor de walvisvaart. De leerlingen worden hulpjes van de scheepsbouwer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-blue-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Scheepswerf:</strong> Excursie naar een scheepswerf of museum. Zien hoe schepen worden gebouwd en leren over de techniek.</p>
              <p><strong>Onderzoek:</strong> Het bouwen van een miniatuur schip. Verschillende scheepstypen vergelijken. Onderzoek naar scheepsbouw in Jisp.</p>
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
            <h3 className="font-serif text-2xl font-bold text-blue-700 mb-3">
              De Walvisvaart en Wereldhandel
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-600">
              <p className="text-sm font-semibold text-blue-900 mb-2">Focus:</p>
              <p className="text-gray-700">Economie, globalisering en handel</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Handelsreis": Het verhaal van een schipper die met zijn schip naar verre landen vaart om walvissen te vangen en producten te verkopen. De leerlingen worden handelaars.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-blue-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Historische Excursie:</strong> Bezoek aan historische locaties gerelateerd aan walvisvaart. Zien waar schepen vertrokken en terugkwamen.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar walvisvaart en handel. Wereldkaart maken met handelsroutes. De economische impact in kaart brengen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-blue-700 mb-3">
              Globalisering en Duurzaamheid
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4 border-l-4 border-blue-600">
              <p className="text-sm font-semibold text-blue-900 mb-2">Focus:</p>
              <p className="text-gray-700">Ethiek, duurzaamheid en historische impact</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Toekomst van de Zee": Een scenario vanuit het heden. De zee is veranderd door menselijk handelen. De leerlingen krijgen de opdracht om een plan te maken voor duurzaam gebruik van de zee.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-blue-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Lab-Experience:</strong> Bezoek aan een modern zeeonderzoekscentrum of museum. Zien hoe de zee wordt beschermd en leren over duurzaamheid.</p>
              <p><strong>Analyse en Debat:</strong> De economische impact van walvisvaart analyseren. Het Grote Duurzaamheidsdebat - hoe gebruiken we de zee? Onderzoek naar duurzaamheid en ethiek van jacht.</p>
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
  const themeConfig = getThemeConfig('walvisvaart')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Walvisvaarders',
      'Scheepsbouw in de Zaanstreek',
      'De walvisvaart: geschiedenis en impact'
    ],
    leesboeken: [
      'De walvisvaarder (jeugdboek)',
      'Het schip (Ton van Reen)',
      'De grote zee (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Walvisvaart_Gr1-2.pdf', type: 'PDF' },
    { title: 'Scheepsbouw_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Duurzaamheid_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de Walvisvaart
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Scheepsbouw & Wereldhandel
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Zaanstreek was een centrum van scheepsbouw en walvisvaart. Van Jisp tot de wereldzeeën - ontdek hoe Zaanse schepen de wereld veroverden.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-blue-600"
                activeBorderColor="border-blue-600"
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
                    <BookOpen className="h-10 w-10 text-blue-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-blue-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-blue-600 pl-3">
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

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-blue-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Zaans Museum - Walvisweken
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek de walvisvaart tijdens de speciale Walvisweken met educatieve programma's.
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
                    <FileText className="h-10 w-10 text-blue-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-blue-600 group-hover:text-blue-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
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
