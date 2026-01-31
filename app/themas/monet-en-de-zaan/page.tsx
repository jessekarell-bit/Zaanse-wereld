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
  Palette, 
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
  Brush
} from 'lucide-react'

export default function MonetPage() {
  const [activeTab, setActiveTab] = useState('onderbouw')
  const [selectedBouw, setSelectedBouw] = useState<'onderbouw' | 'middenbouw34' | 'middenbouw56' | 'bovenbouw'>('onderbouw')

  const routes = {
    onderbouw: {
      titel: 'Kleuren en Vormen',
      focus: 'Zintuiglijke ervaring, kleuren en vormen in het landschap',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen ontdekken kleuren en vormen in het landschap. Ze maken kennis met Monet\'s schilderijen en verwonderen zich over kunst en landschap.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Monet en de Kleuren": Het verhaal van Monet die naar Zaandam kwam om te schilderen. De kinderen worden kunstenaars die kleuren moeten zoeken in het landschap.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Expeditie Monet: Een bezoek aan Zaandam waar Monet schilderde. De kinderen zien de plekken die Monet schilderde en zoeken kleuren in het landschap.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Maken en Spelen: Kunst: Monet\'s schilderijen bekijken en zelf schilderen in de stijl van Monet. Spel: Kleuren zoeken in het landschap. Beweging: Kleurenspelletjes.',
          icon: Sprout
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Kunstfeest: Ouders komen kijken naar de zelfgemaakte schilderijen. De kinderen demonstreren hun kunstwerken en vertellen over Monet.',
          icon: Users
        }
      ]
    },
    middenbouw34: {
      titel: 'Monet in Zaandam',
      focus: 'Kunstzinnige oriëntatie, landschap en cultuur',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen leren over Monet\'s verblijf in Zaandam. Ze begrijpen de relatie tussen kunst en landschap en leren over kunstzinnige oriëntatie.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Schilder van Zaandam": Het verhaal van Monet die naar Zaandam kwam en 25 schilderijen maakte. De leerlingen worden kunsthistorici die moeten ontdekken waarom Monet hier kwam.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Bezoek Zaandam: Een excursie naar Zaandam naar de locaties waar Monet schilderde. Leerlingen zien de plekken en vergelijken met Monet\'s schilderijen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Maken: Kunst: Onderzoek naar Monet\'s werk en verblijf. Maken: Eigen kunstwerk maken in de stijl van Monet. Geschiedenis: De geschiedenis van Monet in Zaandam onderzoeken.',
          icon: Lightbulb
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'De Kunsttentoonstelling: De klas wordt een museum. Leerlingen presenteren hun kunstwerken en vertellen over Monet\'s verblijf in Zaandam.',
          icon: Users
        }
      ]
    },
    middenbouw56: {
      titel: 'Kunst en Landschap',
      focus: 'Kunstgeschiedenis, culturele identiteit en invloed',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen begrijpen hoe kunst en landschap samenvallen. Ze leren over kunstgeschiedenis en de invloed van Monet op de Zaanstreek.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"Het Landschap als Kunstwerk": Het verhaal van hoe Monet het Zaanse landschap zag als kunstwerk. De leerlingen worden kunstcritici die moeten analyseren waarom Monet hier kwam.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Kunsthistorische Excursie: Een bezoek aan een museum met Monet\'s werk of een kunsthistorische wandeling. Leerlingen zien hoe kunst en landschap samenvallen.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Onderzoek en Analyse: Kunstgeschiedenis: Onderzoek naar Monet en de Zaanstreek. Cultuur: De culturele identiteit analyseren. Onderzoek: De invloed van Monet op de Zaanstreek in kaart brengen.',
          icon: Search
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Kunstcongres: Leerlingen presenteren hun onderzoek naar Monet en de Zaanstreek en hun analyse van kunst en landschap.',
          icon: Users
        }
      ]
    },
    bovenbouw: {
      titel: 'Culturele Identiteit en Wereldwijde Invloed',
      focus: 'Kunstgeschiedenis, culturele identiteit en wereldwijde invloed',
      fasen: [
        {
          fase: 'Doel',
          beschrijving: 'De leerlingen analyseren de wereldwijde invloed van Zaanse kunst. Ze denken kritisch na over culturele identiteit en de rol van kunst daarin.',
          icon: Shield
        },
        {
          fase: 'Narratief',
          beschrijving: '"De Wereldwijde Zaanstreek": Een scenario vanuit het heden. Monet\'s schilderijen van Zaandam hangen in musea over de hele wereld. De leerlingen krijgen de opdracht om te onderzoeken wat dit betekent voor de Zaanstreek.',
          icon: BookOpen
        },
        {
          fase: 'Activering',
          beschrijving: 'Museum Lab: Een bezoek aan een museum met Monet\'s werk of een digitale tour. Leerlingen zien hoe Monet\'s werk wereldwijd wordt tentoongesteld.',
          icon: MapPin
        },
        {
          fase: 'Concretisering',
          beschrijving: 'Analyse en Debat: Onderzoek: De wereldwijde invloed van Zaanse kunst analyseren. Burgerschap: Het Grote Cultuurdebat - wat is culturele identiteit? Onderzoek: Kunsthistorisch onderzoek naar Monet en de Zaanstreek.',
          icon: Gavel
        },
        {
          fase: 'Afsluiting',
          beschrijving: 'Het Cultuurcongres: Leerlingen presenteren hun visie op culturele identiteit en de wereldwijde invloed van Zaanse kunst aan een jury.',
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
            <h3 className="font-serif text-2xl font-bold text-purple-700 mb-3">
              Kleuren en Vormen
            </h3>
            <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-600">
              <p className="text-sm font-semibold text-purple-900 mb-2">Focus:</p>
              <p className="text-gray-700">Zintuiglijke ervaring, kleuren en vormen in het landschap</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Monet en de Kleuren": Het verhaal van Monet die naar Zaandam kwam om te schilderen. De kinderen worden kunstenaars die kleuren moeten zoeken in het landschap.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <Sprout className="h-5 w-5 mr-2 text-purple-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Expeditie Monet:</strong> Bezoek aan Zaandam waar Monet schilderde. De plekken zien die Monet schilderde en kleuren zoeken in het landschap.</p>
              <p><strong>Maken:</strong> Monet's schilderijen bekijken en zelf schilderen in de stijl van Monet. Kleuren zoeken in het landschap. Kleurenspelletjes spelen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-purple-700 mb-3">
              Monet in Zaandam
            </h3>
            <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-600">
              <p className="text-sm font-semibold text-purple-900 mb-2">Focus:</p>
              <p className="text-gray-700">Kunstzinnige oriëntatie, landschap en cultuur</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Schilder van Zaandam": Het verhaal van Monet die naar Zaandam kwam en 25 schilderijen maakte. De leerlingen worden kunsthistorici die moeten ontdekken waarom Monet hier kwam.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-purple-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Bezoek Zaandam:</strong> Excursie naar Zaandam naar de locaties waar Monet schilderde. De plekken zien en vergelijken met Monet's schilderijen.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar Monet's werk en verblijf. Eigen kunstwerk maken in de stijl van Monet. De geschiedenis van Monet in Zaandam onderzoeken.</p>
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
            <h3 className="font-serif text-2xl font-bold text-purple-700 mb-3">
              Kunst en Landschap
            </h3>
            <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-600">
              <p className="text-sm font-semibold text-purple-900 mb-2">Focus:</p>
              <p className="text-gray-700">Kunstgeschiedenis, culturele identiteit en invloed</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Het Landschap als Kunstwerk": Het verhaal van hoe Monet het Zaanse landschap zag als kunstwerk. De leerlingen worden kunstcritici die moeten analyseren waarom Monet hier kwam.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <Search className="h-5 w-5 mr-2 text-purple-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Kunsthistorische Excursie:</strong> Bezoek aan een museum met Monet's werk of een kunsthistorische wandeling. Zien hoe kunst en landschap samenvallen.</p>
              <p><strong>Onderzoek:</strong> Onderzoek naar Monet en de Zaanstreek. De culturele identiteit analyseren. De invloed van Monet op de Zaanstreek in kaart brengen.</p>
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
            <h3 className="font-serif text-2xl font-bold text-purple-700 mb-3">
              Culturele Identiteit en Wereldwijde Invloed
            </h3>
            <div className="bg-purple-50 rounded-lg p-4 mb-4 border-l-4 border-purple-600">
              <p className="text-sm font-semibold text-purple-900 mb-2">Focus:</p>
              <p className="text-gray-700">Kunstgeschiedenis, culturele identiteit en wereldwijde invloed</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
              Het verhaal (narratief)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              "De Wereldwijde Zaanstreek": Een scenario vanuit het heden. Monet's schilderijen van Zaandam hangen in musea over de hele wereld. De leerlingen krijgen de opdracht om te onderzoeken wat dit betekent voor de Zaanstreek.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 mb-2 flex items-center">
              <Gavel className="h-5 w-5 mr-2 text-purple-600" />
              Kernactiviteit
            </h4>
            <div className="space-y-2 text-gray-700">
              <p><strong>Museum Lab:</strong> Bezoek aan een museum met Monet's werk of een digitale tour. Zien hoe Monet's werk wereldwijd wordt tentoongesteld.</p>
              <p><strong>Analyse en Debat:</strong> De wereldwijde invloed van Zaanse kunst analyseren. Het Grote Cultuurdebat - wat is culturele identiteit? Kunsthistorisch onderzoek naar Monet en de Zaanstreek.</p>
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
  const themeConfig = getThemeConfig('monet-en-de-zaan')
  const colorScheme = themeConfig.colorScheme!

  const boeken = {
    informatief: [
      'De schatkaart van Monet',
      'Claude Monet in Zaandam',
      'Kunst en landschap in de Zaanstreek'
    ],
    leesboeken: [
      'Monet en de kleuren (jeugdboek)',
      'De schilder (Ton van Reen)',
      'Kleuren (Annie M.G. Schmidt)'
    ]
  }

  const downloads = [
    { title: 'Lesbrief_Monet_Gr1-2.pdf', type: 'PDF' },
    { title: 'Kunst_Project_Gr3-4.pdf', type: 'PDF' },
    { title: 'Cultuur_Debat_Gr7-8.pdf', type: 'PDF' }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 w-full px-4 py-8 sm:px-6 sm:py-12 md:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
            <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl hidden sm:block"></div>
            <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-pink-400/10 blur-3xl hidden sm:block"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-purple-700 mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              De Wereld van Monet & de Zaan
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-800 mb-3 sm:mb-4 md:mb-6 font-medium px-2">
              Kunst & Landschap
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-2">
              Claude Monet schilderde de Zaanstreek en liet zien hoe kunst en landschap samenvallen. Ontdek de Zaan door de ogen van Monet en andere kunstenaars.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <Link 
            href="/themas"
            className="inline-flex items-center text-purple-700 hover:text-purple-800 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>

          <div className="grid lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-7 px-2 sm:px-0">
              <ThemeTabs 
                tabs={tabs as ThemeTab[]} 
                defaultTab="onderbouw"
                activeColor="bg-purple-600"
                activeBorderColor="border-purple-600"
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
                    <BookOpen className="h-10 w-10 text-purple-700 mr-2" />
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
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-purple-600 pl-3">
                              {boek}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Leesboeken:</p>
                        <ul className="space-y-1">
                          {boeken.leesboeken.map((boek, index) => (
                            <li key={index} className="text-sm text-gray-600 border-l-2 border-purple-600 pl-3">
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

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="h-10 w-10 text-purple-700 mr-2" />
                    Partner uitgelicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    Zaans Museum - Monet Collectie
                  </h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Ontdek Monet's schilderijen van Zaandam en leer over de relatie tussen kunst en landschap.
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
                    <FileText className="h-10 w-10 text-purple-700 mr-2" />
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
                          className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-colors group"
                        >
                          <FileText className="h-10 w-10 text-purple-600 group-hover:text-purple-700 flex-shrink-0 mr-3" />
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-700 block truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0 ml-3">
                            <Badge variant="outline" className="text-xs whitespace-nowrap">
                              {item.type}
                            </Badge>
                            <Download className="h-4 w-4 text-gray-400 group-hover:text-purple-600 flex-shrink-0" />
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
