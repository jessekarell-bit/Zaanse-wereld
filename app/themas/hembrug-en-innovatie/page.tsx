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
  Cog, 
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
  Wrench
} from 'lucide-react'

export default function HembrugPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'Grote Gebouwen en Transformatie',
      focus: 'Verwondering, transformatie en nieuw en oud',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken grote gebouwen en transformatie. Ze verwonderen zich over nieuw en oud en leren dat gebouwen kunnen veranderen.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Gebouw dat Veranderde": Het verhaal van een groot gebouw dat eerst een fabriek was en nu iets anders is. De kinderen worden architecten die moeten bedenken wat het gebouw kan worden.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Hembrug: Een bezoek aan het Hembrugterrein. De kinderen zien grote gebouwen en leren over transformatie.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Techniek: Gebouwen tekenen en bouwen. Spel: De bouwhoek wordt een transformatieproject. Beweging: Nieuw en oud verkennen.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Transformatiefeest: Ouders komen kijken naar de zelfgemaakte gebouwen. De kinderen demonstreren hun transformaties en vertellen over nieuw en oud.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Herbestemming en Innovatie',
      focus: 'Techniek, herbestemming en innovatie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over herbestemming en innovatie. Ze begrijpen hoe gebouwen een nieuwe functie krijgen en hoe techniek daarbij helpt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Innovator": Het verhaal van een innovator die oude gebouwen een nieuwe functie geeft. De leerlingen worden innovators die moeten bedenken hoe gebouwen kunnen worden herbestemd.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Hembrugterrein: Een excursie naar het Hembrugterrein. Leerlingen zien hoe gebouwen worden herbestemd en leren over innovatie.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Ontwerp: Techniek: Onderzoek naar herbestemming. Ontwerp: Eigen innovatieproject bedenken. Geschiedenis: De geschiedenis van het Hembrugterrein onderzoeken.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Innovatiebeurs: De klas wordt een innovatiebeurs. Leerlingen presenteren hun innovatieprojecten en vertellen over herbestemming.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Technologie en Toekomst',
      focus: 'Technologie, toekomst en transformatie',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen hoe technologie transformatie mogelijk maakt. Ze leren over de toekomst en hoe innovatie daarbij helpt.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Toekomstmakers": Het verhaal van toekomstmakers die technologie gebruiken om gebouwen te transformeren. De leerlingen worden toekomstmakers die moeten bedenken hoe technologie kan helpen.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Technologie Excursie: Een bezoek aan een innovatiecentrum of het Hembrugterrein. Leerlingen zien hoe technologie transformatie mogelijk maakt.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Ontwerp: Technologie: Onderzoek naar technologie en transformatie. Ontwerp: Een plan maken voor technologische transformatie. Onderzoek: De toekomst van het Hembrugterrein onderzoeken.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Toekomstcongres: Leerlingen presenteren hun visie op technologie en transformatie en hun plannen voor de toekomst.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Circulaire Economie en Duurzaamheid',
      focus: 'Technologische geletterdheid, circulaire economie en duurzaamheid',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren circulaire economie en duurzaamheid. Ze ontwikkelen een visie op duurzame transformatie en technologische geletterdheid.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"2050: Circulaire Zaanstreek": Een scenario vanuit de toekomst. Alles is circulair en duurzaam. De leerlingen krijgen de opdracht om een plan te maken voor circulaire transformatie.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Circulair Lab: Een bezoek aan een circulair project of het Hembrugterrein. Leerlingen zien hoe circulaire economie werkt en leren over duurzaamheid.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Ontwerp: Onderzoek: Circulaire economie analyseren. Burgerschap: Het Grote Duurzaamheidsdebat - hoe maken we transformatie duurzaam? Ontwerp: Een plan maken voor circulaire transformatie.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Circulair Congres: Leerlingen presenteren hun visie op circulaire economie en duurzaamheid aan een jury en verdedigen hun plannen voor de toekomst.',
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Grote Gebouwen en Transformatie
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Verwondering, transformatie en nieuw en oud</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Gebouw dat Veranderde": Het verhaal van een groot gebouw dat eerst een fabriek was en nu iets anders is. De kinderen worden architecten die moeten bedenken wat het gebouw kan worden.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Hembrug:</strong> Bezoek aan het Hembrugterrein. Grote gebouwen zien en leren over transformatie.</p>
              <p><strong>Maken:</strong> Gebouwen tekenen en bouwen. De bouwhoek wordt een transformatieproject. Nieuw en oud verkennen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Herbestemming en Innovatie
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Techniek, herbestemming en innovatie</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Innovator": Het verhaal van een innovator die oude gebouwen een nieuwe functie geeft. De leerlingen worden innovators die moeten bedenken hoe gebouwen kunnen worden herbestemd.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Hembrugterrein:</strong> Excursie naar het Hembrugterrein. Zien hoe gebouwen worden herbestemd en leren over innovatie.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar herbestemming. Eigen innovatieproject bedenken. De geschiedenis van het Hembrugterrein onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Technologie en Toekomst
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Technologie, toekomst en transformatie</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Toekomstmakers": Het verhaal van toekomstmakers die technologie gebruiken om gebouwen te transformeren. De leerlingen worden toekomstmakers die moeten bedenken hoe technologie kan helpen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Technologie Excursie:</strong> Bezoek aan een innovatiecentrum of het Hembrugterrein. Zien hoe technologie transformatie mogelijk maakt.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar technologie en transformatie. Een plan maken voor technologische transformatie. De toekomst van het Hembrugterrein onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-slate-700 mb-3">
              Circulaire Economie en Duurzaamheid
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border-l-4 border-slate-600">
              <p className="text-sm font-semibold text-slate-900 mb-2">Focus:</p>
              <p className="text-gray-700">Technologische geletterdheid, circulaire economie en duurzaamheid</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "2050: Circulaire Zaanstreek": Een scenario vanuit de toekomst. Alles is circulair en duurzaam. De leerlingen krijgen de opdracht om een plan te maken voor circulaire transformatie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-slate-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Circulair Lab:</strong> Bezoek aan een circulair project of het Hembrugterrein. Zien hoe circulaire economie werkt en leren over duurzaamheid.</p>
              <p><strong>Analyse en Ontwerp:</strong> Circulaire economie analyseren. Het Grote Duurzaamheidsdebat - hoe maken we transformatie duurzaam? Een plan maken voor circulaire transformatie.</p>
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
  const themeConfig = getThemeConfig('hembrug-en-innovatie')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'Hembrugterrein: van fabriek tot creatieve broedplaats',
      'Innovatie en transformatie',
      'Circulaire economie'
    ],
    leesboeken: [
      'Het gebouw (jeugdboek)',
      'De transformatie (Ton van Reen)',
      'Nieuw en oud (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Hembrug_Gr1-2.pdf', type: 'PDF' },
    { title: 'Innovatie_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Circulair_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-slate-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-gray-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Hembrug & Innovatie
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Transformatie & Toekomst
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Het Hembrugterrein staat symbool voor transformatie en innovatie. Van munitiefabriek tot creatieve broedplaats - ontdek hoe de Zaanstreek zichzelf opnieuw uitvindt.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-slate-700 hover:text-slate-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-slate-600"
                activeBorderColor="border-slate-600"
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
                    <BookOpen className="h-10 w-10 text-slate-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-slate-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-slate-600 pl-3">
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

              <Card className="bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-slate-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-slate-700 mb-2">
                    Hembrugterrein
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Bezoek het Hembrugterrein en ontdek hoe transformatie en innovatie samenkomen.
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
                    <FileText className="h-10 w-10 text-slate-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-slate-600 hover:bg-slate-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-slate-600 group-hover:text-slate-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-slate-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-slate-600 flex-shrink-0" />
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
