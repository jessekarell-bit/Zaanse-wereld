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
  Factory, 
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
  Cookie
} from 'lucide-react'

export default function VerkadePage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'De Magische Fabriek',
      focus: 'Zintuiglijke ervaring, fabrieksgeluiden en productie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken dat fabrieken producten maken. Ze ervaren de fabriek met al hun zintuigen: geluiden, geuren, beweging. Ze maken kennis met het verhaal van de Verkade-meisjes.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Verhaal van de Verkade-Meisjes": Het verhaal van meisjes die in de fabriek werken en koekjes en chocolade maken. De kinderen worden hulpjes van de fabrieksmeisjes.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Verkade: Een bezoek aan het Zaans Museum met de Verkade-collectie. De kinderen zien, horen en ruiken hoe een fabriek werkt. Ze proeven Verkade-producten.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Spel: De huishoek wordt een fabriek waar koekjes worden gemaakt. Muziek: Fabrieksgeluiden naspelen. Proeven: Verkade-producten proeven en vergelijken.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Fabrieksfeest: Ouders komen kijken naar de fabriek in de klas. De kinderen demonstreren hoe ze koekjes maken en vertellen het verhaal van de Verkade-meisjes.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Het Leven in de Fabriek',
      focus: 'Arbeidersleven, plaatjesalbums en sociale geschiedenis',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over het leven van arbeiders in de fabriek. Ze begrijpen wat arbeiders deden en hoe ze leefden. Ze leren over Verkade-plaatjesalbums en marketing.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Plaatjesalbum Verzamelaar": Het verhaal van een kind dat plaatjesalbums verzamelt. De leerlingen worden verzamelaars die moeten ontdekken hoe de plaatjesalbums werden gebruikt om producten te verkopen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Zaans Museum: Een excursie naar het Zaans Museum met focus op de Verkade-collectie. Leerlingen zien plaatjesalbums, oude machines en leren over het arbeidersleven.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Maken: Geschiedenis: Onderzoek naar het leven van arbeiders. Kunst: Eigen plaatjesalbum maken. Onderzoek: De geschiedenis van Verkade in kaart brengen.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Plaatjesalbum Tentoonstelling: De klas wordt een museum. Leerlingen presenteren hun plaatjesalbums en vertellen over het leven in de fabriek.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Arbeiders en Solidariteit',
      focus: 'Sociale geschiedenis, arbeidersrechten en solidariteit',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat arbeiders samen opkwamen voor betere omstandigheden. Ze leren over arbeiderssolidariteit en de eerste stappen naar betere arbeidsomstandigheden.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Staking": Het verhaal van arbeiders die in staking gaan omdat ze betere omstandigheden willen. De leerlingen worden arbeiders die moeten beslissen: staken of niet?',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Historische Excursie: Een bezoek aan historische locaties in de Zaanstreek gerelateerd aan arbeidersgeschiedenis. Leerlingen zien waar arbeiders woonden en werkten.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Rollenspel: Geschiedenis: Onderzoek naar arbeidersgeschiedenis en stakingen. Burgerschap: Rollenspel over een staking. Onderzoek: De sociale geschiedenis van de Zaanstreek in kaart brengen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Arbeiderscongres: Leerlingen presenteren hun onderzoek naar arbeidersgeschiedenis en voeren een debat over arbeidsrechten.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'De Rode Zaan',
      focus: 'Democratie, sociale strijd en burgerschapsvorming',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de Rode Zaan als democratische oefenplaats. Ze begrijpen hoe arbeiderssolidariteit leidde tot sociale verandering en democratische ontwikkeling.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Rode Zaan: Een Democratische Oefenplaats": Een scenario vanuit het verleden. Arbeiders organiseren zich en strijden voor rechten. De leerlingen vormen een arbeidersraad die beslissingen moet nemen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Historisch Onderzoek: Een bezoek aan archieven of musea met focus op de Rode Zaan. Leerlingen zien documenten, foto\'s en objecten uit de arbeidersgeschiedenis.',
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              De Magische Fabriek
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuiglijke ervaring, fabrieksgeluiden en productie</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Verhaal van de Verkade-Meisjes": Het verhaal van meisjes die in de fabriek werken en koekjes en chocolade maken. De kinderen worden hulpjes van de fabrieksmeisjes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-amber-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Verkade:</strong> Bezoek aan het Zaans Museum met de Verkade-collectie. Zien, horen en ruiken hoe een fabriek werkt. Verkade-producten proeven.</p>
              <p><strong>Maken:</strong> De huishoek wordt een fabriek. Fabrieksgeluiden naspelen. Verkade-producten proeven en vergelijken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Het Leven in de Fabriek
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Arbeidersleven, plaatjesalbums en sociale geschiedenis</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Plaatjesalbum Verzamelaar": Het verhaal van een kind dat plaatjesalbums verzamelt. De leerlingen worden verzamelaars die moeten ontdekken hoe de plaatjesalbums werden gebruikt om producten te verkopen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-amber-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Zaans Museum:</strong> Excursie naar het Zaans Museum met focus op de Verkade-collectie. Plaatjesalbums, oude machines en arbeidersleven zien.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar het leven van arbeiders. Eigen plaatjesalbum maken. De geschiedenis van Verkade in kaart brengen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              Arbeiders en Solidariteit
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Sociale geschiedenis, arbeidersrechten en solidariteit</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Staking": Het verhaal van arbeiders die in staking gaan omdat ze betere omstandigheden willen. De leerlingen worden arbeiders die moeten beslissen: staken of niet?
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-amber-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Historische Excursie:</strong> Bezoek aan historische locaties in de Zaanstreek gerelateerd aan arbeidersgeschiedenis. Zien waar arbeiders woonden en werkten.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar arbeidersgeschiedenis en stakingen. Rollenspel over een staking. De sociale geschiedenis van de Zaanstreek in kaart brengen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-amber-700 mb-3">
              De Rode Zaan
            </h3>
            <div className="bg-amber-50 rounded-lg p-4 mb-4 border-l-4 border-amber-600">
              <p className="text-sm font-semibold text-amber-900 mb-2">Focus:</p>
              <p className="text-gray-700">Democratie, sociale strijd en burgerschapsvorming</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Rode Zaan: Een Democratische Oefenplaats": Een scenario vanuit het verleden. Arbeiders organiseren zich en strijden voor rechten. De leerlingen vormen een arbeidersraad die beslissingen moet nemen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-amber-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Historisch Onderzoek:</strong> Bezoek aan archieven of musea met focus op de Rode Zaan. Documenten, foto's en objecten uit de arbeidersgeschiedenis zien.</p>
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
  const themeConfig = getThemeConfig('verkade-en-de-fabriek')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Verkade-plaatjesalbums',
      'De Verkade-fabriek: geschiedenis van een bedrijf',
      'Arbeiders in de Zaanstreek'
    ],
    leesboeken: [
      'Het Verkade-meisje (jeugdboek)',
      'De fabriek (Ton van Reen)',
      'Plaatjes verzamelen (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Verkade_Gr1-2.pdf', type: 'PDF' },
    { title: 'Plaatjesalbum_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Rode_Zaan_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-amber-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Verkade & de Fabriek
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Arbeiders & Solidariteit
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Verkade-fabriek staat symbool voor de industriële geschiedenis van de Zaanstreek. Ontdek het verhaal van de Verkade-meisjes, arbeiderssolidariteit en de sociale geschiedenis van de fabriek.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-amber-600"
                activeBorderColor="border-amber-600"
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
                    <BookOpen className="h-10 w-10 text-amber-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-amber-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-amber-600 pl-3">
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

              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-amber-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-amber-700 mb-2">
                    Zaans Museum
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek de Verkade-collectie en leer over de geschiedenis van de fabriek en het arbeidersleven.
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
                    <FileText className="h-10 w-10 text-amber-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-amber-600 hover:bg-amber-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-amber-600 group-hover:text-amber-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-amber-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-amber-600 flex-shrink-0" />
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
