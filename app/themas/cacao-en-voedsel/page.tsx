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
  Sprout, 
  Shield, 
  BookOpen, 
  FileText, 
  Download,
  MapPin,
  Users,
  ExternalLink,
  Cookie,
  Lightbulb,
  Search,
  Gavel,
  Apple
} from 'lucide-react'

export default function CacaoPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'Cacao en Chocolade',
      focus: 'Zintuiglijke ervaring, voedsel en groei',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen proeven en ontdekken voedsel. Ze maken kennis met cacao en chocolade en begrijpen dat voedsel groeit en wordt gemaakt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Geheim van de Cacaoboon": Het verhaal van een cacaoboon die wordt omgetoverd tot chocolade. De kinderen worden chocolademakers die moeten ontdekken hoe chocolade wordt gemaakt.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Cacao: Een bezoek aan een cacaofabriek of museum. De kinderen proeven cacao en chocolade en leren over voedsel.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Proeven: Proeven: Cacao en chocolade proeven en vergelijken. Spel: De huishoek wordt een chocoladefabriek. Beweging: Planten en groei ontdekken.',
          icon: Cookie
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Chocoladefeest: Ouders komen kijken naar de chocoladefabriek in de klas. De kinderen demonstreren hoe chocolade wordt gemaakt en proeven samen.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Voedselproductie en Cacaofabrieken',
      focus: 'Voedselproductie, cacaofabrieken en voedselketen',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over voedselproductie en cacaofabrieken. Ze begrijpen hoe voedsel wordt gemaakt en wat een voedselketen is.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Voedselketen": Het verhaal van een cacaoboon die van de plantage naar de fabriek gaat en uiteindelijk chocolade wordt. De leerlingen worden voedselproducenten die de keten moeten volgen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Cacaofabriek: Een excursie naar een cacaofabriek of museum. Leerlingen zien hoe cacao wordt verwerkt en leren over voedselproductie.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Maken: Geschiedenis: Onderzoek naar voedselproductie. Maken: Voedselketen in kaart brengen. Onderzoek: De geschiedenis van cacaofabrieken onderzoeken.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Voedselmarkt: De klas wordt een voedselmarkt. Leerlingen presenteren hun voedselketen en vertellen over voedselproductie.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Voedselinnovatie en Duurzaamheid',
      focus: 'Voedselinnovatie, duurzaamheid en voedselzekerheid',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen dat voedselinnovatie belangrijk is. Ze leren over duurzaamheid en hoe voedselproductie kan worden verbeterd.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Voedselinnovator": Het verhaal van een voedselinnovator die nieuwe manieren bedenkt om voedsel te produceren. De leerlingen worden innovators die moeten bedenken hoe voedsel duurzamer kan.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Innovatie Excursie: Een bezoek aan een voedselinnovatiecentrum of fabriek. Leerlingen zien hoe voedsel wordt geïnnoveerd en leren over duurzaamheid.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Ontwerp: Technologie: Onderzoek naar voedselinnovatie. Ontwerp: Een plan maken voor duurzame voedselproductie. Onderzoek: De toekomst van voedsel onderzoeken.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Voedselcongres: Leerlingen presenteren hun onderzoek naar voedselinnovatie en hun plannen voor duurzame voedselproductie.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Circulaire Voedselproductie en Toekomst',
      focus: 'Voedselinnovatie, circulaire economie en toekomst',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren circulaire voedselproductie en de toekomst van voedsel. Ze ontwikkelen een visie op duurzame en circulaire voedselproductie.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"2050: De Provisiekast van Nederland": Een scenario vanuit de toekomst. De Zaanstreek is nog steeds de provisiekast, maar nu circulair en duurzaam. De leerlingen krijgen de opdracht om een plan te maken voor circulaire voedselproductie.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Circulair Voedsel Lab: Een bezoek aan een circulair voedselproject of innovatiecentrum. Leerlingen zien hoe circulaire voedselproductie werkt en leren over de toekomst.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Ontwerp: Onderzoek: Circulaire voedselproductie analyseren. Burgerschap: Het Grote Voedseldebat - hoe maken we voedsel duurzaam? Ontwerp: Een plan maken voor circulaire voedselproductie.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Voedselcongres: Leerlingen presenteren hun visie op circulaire voedselproductie en de toekomst van voedsel aan een jury en verdedigen hun plannen.',
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Cacao en Chocolade
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuiglijke ervaring, voedsel en groei</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Geheim van de Cacaoboon": Het verhaal van een cacaoboon die wordt omgetoverd tot chocolade. De kinderen worden chocolademakers die moeten ontdekken hoe chocolade wordt gemaakt.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <Cookie className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Cacao:</strong> Bezoek aan een cacaofabriek of museum. Cacao en chocolade proeven en leren over voedsel.</p>
              <p><strong>Maken:</strong> Cacao en chocolade proeven en vergelijken. De huishoek wordt een chocoladefabriek. Planten en groei ontdekken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Voedselproductie en Cacaofabrieken
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Voedselproductie, cacaofabrieken en voedselketen</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Voedselketen": Het verhaal van een cacaoboon die van de plantage naar de fabriek gaat en uiteindelijk chocolade wordt. De leerlingen worden voedselproducenten die de keten moeten volgen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Cacaofabriek:</strong> Excursie naar een cacaofabriek of museum. Zien hoe cacao wordt verwerkt en leren over voedselproductie.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar voedselproductie. Voedselketen in kaart brengen. De geschiedenis van cacaofabrieken onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Voedselinnovatie en Duurzaamheid
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Voedselinnovatie, duurzaamheid en voedselzekerheid</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Voedselinnovator": Het verhaal van een voedselinnovator die nieuwe manieren bedenkt om voedsel te produceren. De leerlingen worden innovators die moeten bedenken hoe voedsel duurzamer kan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Innovatie Excursie:</strong> Bezoek aan een voedselinnovatiecentrum of fabriek. Zien hoe voedsel wordt geïnnoveerd en leren over duurzaamheid.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar voedselinnovatie. Een plan maken voor duurzame voedselproductie. De toekomst van voedsel onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-green-700 mb-3">
              Circulaire Voedselproductie en Toekomst
            </h3>
            <div className="bg-green-50 rounded-lg p-4 mb-4 border-l-4 border-green-600">
              <p className="text-sm font-semibold text-green-900 mb-2">Focus:</p>
              <p className="text-gray-700">Voedselinnovatie, circulaire economie en toekomst</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-green-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "2050: De Provisiekast van Nederland": Een scenario vanuit de toekomst. De Zaanstreek is nog steeds de provisiekast, maar nu circulair en duurzaam. De leerlingen krijgen de opdracht om een plan te maken voor circulaire voedselproductie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-green-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Circulair Voedsel Lab:</strong> Bezoek aan een circulair voedselproject of innovatiecentrum. Zien hoe circulaire voedselproductie werkt en leren over de toekomst.</p>
              <p><strong>Analyse en Ontwerp:</strong> Circulaire voedselproductie analyseren. Het Grote Voedseldebat - hoe maken we voedsel duurzaam? Een plan maken voor circulaire voedselproductie.</p>
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
  const themeConfig = getThemeConfig('cacao-en-voedsel')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Cacao langs de Zaan; de molens - de fabrieken',
      'Ons voedsel',
      'Voedselinnovatie en duurzaamheid'
    ],
    leesboeken: [
      'Het chocoladeboek (jeugdboek)',
      'Voedsel (Ton van Reen)',
      'De cacaoboon (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Cacao_Gr1-2.pdf', type: 'PDF' },
    { title: 'Voedselketen_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Circulair_Voedsel_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-green-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-emerald-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Cacao & Voedsel
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Voedselproductie & Innovatie
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              De Zaanstreek was de 'provisiekast van Nederland'. Van cacao tot voedselinnovatie - ontdek hoe de Zaanstreek voedsel produceert en innoveert.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-green-700 hover:text-green-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-green-600"
                activeBorderColor="border-green-600"
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
                    <BookOpen className="h-10 w-10 text-green-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-green-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-green-600 pl-3">
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

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-green-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Cacaofabrieken Zaanstreek
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek de geschiedenis van cacaofabrieken en voedselproductie in de Zaanstreek.
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
                    <FileText className="h-10 w-10 text-green-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-green-600 hover:bg-green-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-green-600 group-hover:text-green-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-green-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-green-600 flex-shrink-0" />
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
