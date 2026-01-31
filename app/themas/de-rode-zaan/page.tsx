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
  Users, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users as UsersIcon,
  ExternalLink,
  Sprout,
  Lightbulb,
  Search,
  Gavel,
  Handshake
} from 'lucide-react'

export default function RodeZaanPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'Samen Spelen en Delen',
      focus: 'Samenwerking, delen en vriendschap',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren samenwerken en delen. Ze begrijpen dat samen spelen leuker is dan alleen. Ze maken kennis met verenigingsleven en solidariteit.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Vriendengroep": Het verhaal van een groep vrienden die samen spelen en delen. De kinderen worden vrienden die moeten zorgen dat iedereen mee kan doen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Vereniging: Een bezoek aan een vereniging of club. De kinderen zien hoe mensen samenwerken en samen activiteiten doen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Spel: Samenwerkingsspellen spelen. Beweging: Samen activiteiten doen. Spel: Verenigingsleven naspelen.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Vriendschapsfeest: Ouders komen kijken naar de samenwerkingsspellen. De kinderen demonstreren hoe ze samenwerken en vertellen over vriendschap.',
          icon: UsersIcon
        }
      ]
    },
    middenbouw34: {
      titel: 'Verenigingsleven en Coöperaties',
      focus: 'Burgerschap, verenigingsleven en coöperaties',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over verenigingsleven en coöperaties. Ze begrijpen hoe mensen samen organiseren en democratische processen leren.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Coöperatie": Het verhaal van een groep mensen die samen een coöperatie oprichten. De leerlingen worden leden die moeten beslissen hoe ze samenwerken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Coöperatie: Een excursie naar een coöperatie of vereniging. Leerlingen zien hoe mensen samen organiseren en beslissingen nemen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Maken: Burgerschap: Onderzoek naar verenigingsleven. Maken: Eigen vereniging oprichten. Geschiedenis: De geschiedenis van coöperaties onderzoeken.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Verenigingsmarkt: De klas wordt een verenigingsmarkt. Leerlingen presenteren hun verenigingen en vertellen over verenigingsleven.',
          icon: UsersIcon
        }
      ]
    },
    middenbouw56: {
      titel: 'Democratie en Participatie',
      focus: 'Democratie, participatie en burgerschap',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen hoe democratie werkt. Ze leren over participatie en hoe mensen samen beslissingen nemen.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Democratische Oefenplaats": Het verhaal van een gemeenschap die samen beslissingen moet nemen. De leerlingen worden burgers die moeten meedenken.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Democratische Excursie: Een bezoek aan een gemeentehuis of vereniging. Leerlingen zien hoe democratische processen werken.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Rollenspel: Burgerschap: Onderzoek naar democratie. Rollenspel: Een vergadering naspelen. Onderzoek: De democratische geschiedenis onderzoeken.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Democratiecongres: Leerlingen presenteren hun onderzoek naar democratie en voeren een debat over participatie.',
          icon: UsersIcon
        }
      ]
    },
    bovenbouw: {
      titel: 'De Rode Zaan en Sociale Strijd',
      focus: 'Sociale strijd, democratie en burgerschapsvorming',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de Rode Zaan als democratische oefenplaats. Ze begrijpen hoe sociale strijd leidde tot democratische ontwikkeling.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Rode Zaan: Een Democratische Oefenplaats": Een scenario vanuit het verleden. Arbeiders organiseren zich en strijden voor rechten. De leerlingen vormen een arbeidersraad die beslissingen moet nemen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Historisch Onderzoek: Een bezoek aan archieven of musea met focus op de Rode Zaan. Leerlingen zien documenten en objecten uit de sociale geschiedenis.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Debat: Onderzoek: De Rode Zaan in kaart brengen en analyseren. Burgerschap: Het Grote Democratiedebat - hoe organiseren we samenleving? Onderzoek: Historisch onderzoek naar sociale geschiedenis.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Democratiecongres: Leerlingen presenteren hun visie op democratie en burgerschap aan een jury en verdedigen hun standpunten over sociale rechtvaardigheid.',
          icon: UsersIcon
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
            <h3 className="font-serif text-2xl font-bold text-rose-700 mb-3">
              Samen Spelen en Delen
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Samenwerking, delen en vriendschap</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Vriendengroep": Het verhaal van een groep vrienden die samen spelen en delen. De kinderen worden vrienden die moeten zorgen dat iedereen mee kan doen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Vereniging:</strong> Bezoek aan een vereniging of club. Zien hoe mensen samenwerken en samen activiteiten doen.</p>
              <p><strong>Maken:</strong> Samenwerkingsspellen spelen. Samen activiteiten doen. Verenigingsleven naspelen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-700 mb-3">
              Verenigingsleven en Coöperaties
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Burgerschap, verenigingsleven en coöperaties</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Coöperatie": Het verhaal van een groep mensen die samen een coöperatie oprichten. De leerlingen worden leden die moeten beslissen hoe ze samenwerken.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Coöperatie:</strong> Excursie naar een coöperatie of vereniging. Zien hoe mensen samen organiseren en beslissingen nemen.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar verenigingsleven. Eigen vereniging oprichten. De geschiedenis van coöperaties onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-700 mb-3">
              Democratie en Participatie
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Democratie, participatie en burgerschap</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Democratische Oefenplaats": Het verhaal van een gemeenschap die samen beslissingen moet nemen. De leerlingen worden burgers die moeten meedenken.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Democratische Excursie:</strong> Bezoek aan een gemeentehuis of vereniging. Zien hoe democratische processen werken.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar democratie. Een vergadering naspelen. De democratische geschiedenis onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-rose-700 mb-3">
              De Rode Zaan en Sociale Strijd
            </h3>
            <div className="bg-rose-50 rounded-lg p-4 mb-4 border-l-4 border-rose-600">
              <p className="text-sm font-semibold text-rose-900 mb-2">Focus:</p>
              <p className="text-gray-700">Sociale strijd, democratie en burgerschapsvorming</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-rose-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Rode Zaan: Een Democratische Oefenplaats": Een scenario vanuit het verleden. Arbeiders organiseren zich en strijden voor rechten. De leerlingen vormen een arbeidersraad die beslissingen moet nemen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-rose-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Historisch Onderzoek:</strong> Bezoek aan archieven of musea met focus op de Rode Zaan. Documenten en objecten uit de sociale geschiedenis zien.</p>
              <p><strong>Analyse en Debat:</strong> De Rode Zaan in kaart brengen. Het Grote Democratiedebat - hoe organiseren we samenleving? Historisch onderzoek naar sociale geschiedenis.</p>
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
  const themeConfig = getThemeConfig('de-rode-zaan')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Burgerschap - het Zaanplein',
      'De Rode Zaan: geschiedenis van arbeiderssolidariteit',
      'Democratie en participatie'
    ],
    leesboeken: [
      'Samen sterk (jeugdboek)',
      'De vereniging (Ton van Reen)',
      'Vriendschap (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Rode_Zaan_Gr1-2.pdf', type: 'PDF' },
    { title: 'Vereniging_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Democratie_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-rose-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-pink-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-rose-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van de Rode Zaan
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-rose-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Solidariteit & Democratie
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Zaanstreek heeft een rijke traditie van arbeiderssolidariteit en sociale strijd. Van coöperaties tot verenigingsleven - ontdek de democratische oefenplaats van de Rode Zaan.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-rose-700 hover:text-rose-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-rose-600"
                activeBorderColor="border-rose-600"
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
                    <BookOpen className="h-10 w-10 text-rose-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-rose-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-rose-600 pl-3">
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

              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <UsersIcon className="h-10 w-10 text-rose-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-rose-700 mb-2">
                    Zaanse Verenigingen
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek het verenigingsleven en de coöperatieve traditie van de Zaanstreek.
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
                    <FileText className="h-10 w-10 text-rose-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-rose-600 hover:bg-rose-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-rose-600 group-hover:text-rose-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-rose-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-rose-600 flex-shrink-0" />
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
