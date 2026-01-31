'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Tabs from '@/components/Tabs'
import { ArrowLeft, FileText, BookOpen, Calculator, Users, Monitor, Globe, Leaf, Palette, Languages } from 'lucide-react'

// SLO Kerndoelen Mapping - Vereenvoudigde versie met Zaanse context
const SLO_MAPPING = [
  {
    domain: "Nederlands",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-900 border-blue-200",
    objectives: [
      {
        id: "Kerndoel 1-9",
        title: "Taalcompetentie en literatuur",
        description: "Taal als basis voor alle werelden via 'Rijke Teksten' met Zaanse context.",
        subObjectives: [
          {
            id: "1A",
            title: "Rijke taalomgeving",
            detail: "Gebruik van authentieke boeken over molens, Verkade, walvisvaart en Monet om woordenschat en wereldkennis op te bouwen."
          },
          {
            id: "2A",
            title: "Begrijpend lezen",
            detail: "Leerlingen lezen teksten over de Zaanse geschiedenis en beantwoorden begripsvragen."
          },
          {
            id: "3A",
            title: "Schrijven",
            detail: "Het schrijven van teksten over de Zaanse thema's, zoals een verslag over een excursie naar De Zaansche Molen."
          }
        ]
      }
    ]
  },
  {
    domain: "Rekenen & Wiskunde",
    icon: Calculator,
    color: "bg-orange-100 text-orange-900 border-orange-200",
    objectives: [
      {
        id: "Kerndoel 10-18",
        title: "Getallen, meten en meetkunde",
        description: "Toegepast rekenen in Zaanse context.",
        subObjectives: [
          {
            id: "10A",
            title: "Getallen",
            detail: "Rekenen met historische valuta en grote getallen (VOC-winsten, walvisvaart)."
          },
          {
            id: "11A",
            title: "Meten",
            detail: "Oppervlakte en inhoud berekenen van polderkavels en molens."
          },
          {
            id: "14A",
            title: "Meetkunde",
            detail: "Construeren van plattegronden en navigeren met coördinaten."
          }
        ]
      }
    ]
  },
  {
    domain: "Burgerschap",
    icon: Users,
    color: "bg-indigo-100 text-indigo-900 border-indigo-200",
    objectives: [
      {
        id: "Kerndoel 19-21",
        title: "Democratie en samenleving",
        description: "De school als oefenplaats voor democratie met Zaanse context.",
        subObjectives: [
          {
            id: "19A",
            title: "Sociale competenties",
            detail: "Samenwerken in projecten over de Rode Zaan en arbeiderssolidariteit."
          },
          {
            id: "20A",
            title: "Waarden",
            detail: "Vergelijken van historische en moderne rechtspraak en debatteren over vrijheid vs. veiligheid."
          },
          {
            id: "21A",
            title: "Democratisch handelen",
            detail: "Simulatie van besluitvorming over herbestemming van het Hembrugterrein."
          }
        ]
      }
    ]
  },
  {
    domain: "Digitale Geletterdheid",
    icon: Monitor,
    color: "bg-cyan-100 text-cyan-900 border-cyan-200",
    objectives: [
      {
        id: "Kerndoel 22-24",
        title: "Technologie en informatie",
        description: "Technologie als middel voor onderzoek en creatie.",
        subObjectives: [
          {
            id: "22A",
            title: "Systemen",
            detail: "Gebruik van digitale tools om Zaanse landschapsveranderingen te analyseren."
          },
          {
            id: "22B",
            title: "Informatievaardigheden",
            detail: "Bronnenkritiek bij online informatie over Zaanse geschiedenis."
          },
          {
            id: "23B",
            title: "Programmeren",
            detail: "Programmeren en computational thinking in Zaanse context."
          }
        ]
      }
    ]
  },
  {
    domain: "Mens & Maatschappij",
    icon: Globe,
    color: "bg-purple-100 text-purple-900 border-purple-200",
    objectives: [
      {
        id: "Kerndoel 25-28",
        title: "Tijd, Ruimte en Samenleving",
        description: "Tijd, Ruimte en Samenleving in Zaanse perspectief.",
        subObjectives: [
          {
            id: "25B",
            title: "Maatschappelijke kwesties",
            detail: "Analyse van conflicten tussen industrie, natuur en innovatie in de Zaanstreek."
          },
          {
            id: "26A",
            title: "Wereldbeeld",
            detail: "Navigeren op kaarten van de Zaanstreek en handelsroutes van de walvisvaart."
          },
          {
            id: "27A",
            title: "Historische ontwikkelingen",
            detail: "Chronologische lijn van molens tot moderne innovatie op het Hembrugterrein."
          },
          {
            id: "28A",
            title: "Economie",
            detail: "De economie van de Zaanse industrie en moderne voedselinnovatie."
          }
        ]
      }
    ]
  },
  {
    domain: "Mens & Natuur",
    icon: Leaf,
    color: "bg-green-100 text-green-900 border-green-200",
    objectives: [
      {
        id: "Kerndoel 29-32",
        title: "Natuurwetenschappen",
        description: "Onderzoekend leren in Zaanse context.",
        subObjectives: [
          {
            id: "29A",
            title: "Onderzoeken",
            detail: "Experimenteren met voedselproductie en duurzaamheid in de Zaanstreek."
          },
          {
            id: "30A",
            title: "Technische systemen",
            detail: "Werking van molens, stoommachines en moderne technologie."
          },
          {
            id: "31A",
            title: "Levenscyclus",
            detail: "Van zaadje tot plant; voedselproductie en innovatie."
          },
          {
            id: "32C",
            title: "Ecosystemen",
            detail: "De ecologie van polders, waterbeheer en duurzaamheid."
          }
        ]
      }
    ]
  },
  {
    domain: "Kunst & Cultuur",
    icon: Palette,
    color: "bg-pink-100 text-pink-900 border-pink-200",
    objectives: [
      {
        id: "Kerndoel 35-37",
        title: "Artistiek vermogen",
        description: "Verwerking en betekenisgeving.",
        subObjectives: [
          {
            id: "35A",
            title: "Creatieve strategieën",
            detail: "Ontwerpen en maken in de stijl van Monet en andere Zaanse kunstenaars."
          },
          {
            id: "36A",
            title: "Verbeelden",
            detail: "Maken van kunstwerken geïnspireerd op de Zaanse geschiedenis en cultuur."
          },
          {
            id: "37B",
            title: "Erfgoed",
            detail: "Bezoek aan en reflectie op erfgoedlocaties: Zaans Museum, De Zaansche Molen, Czaar Peterhuisje."
          }
        ]
      }
    ]
  }
]

export default function VerantwoordingPage() {
  const totalObjectives = SLO_MAPPING.reduce((sum, domain) => sum + domain.objectives.length, 0)
  
  const tabs = SLO_MAPPING.map((domain) => {
    const Icon = domain.icon
    
    return {
      id: domain.domain.toLowerCase().replace(/\s+/g, '-'),
      label: domain.domain,
      content: (
        <div className="space-y-6">
          <div className={`${domain.color} p-6 rounded-lg border-2 mb-6`}>
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-6 w-6" />
              <h2 className="text-2xl font-bold">{domain.domain}</h2>
            </div>
            <p className="text-sm opacity-90">
              {domain.objectives.length} kerndoel{domain.objectives.length !== 1 ? 'en' : ''} gedekt
            </p>
          </div>

          <div className="space-y-6">
            {domain.objectives.map((objective, objIndex) => (
              <Card 
                key={objIndex}
                className={`${domain.color} border-2 shadow-md`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 pb-4 border-b border-gray-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {objective.id}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {objective.title}
                        </h4>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="bg-white border-gray-300 text-gray-700 font-mono text-xs"
                      >
                        {objective.subObjectives.length} subdoel{objective.subObjectives.length !== 1 ? 'en' : ''}
                      </Badge>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      {objective.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      Concretisering:
                    </h5>
                    <div className="space-y-3">
                      {objective.subObjectives.map((subObj, subIndex) => (
                        <div 
                          key={subIndex}
                          className="bg-white/80 rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-start gap-3">
                            <Badge 
                              variant="outline" 
                              className="bg-deep-water-blue/10 border-deep-water-blue/30 text-deep-water-blue font-semibold flex-shrink-0"
                            >
                              {subObj.id}
                            </Badge>
                            <div className="flex-1">
                              <h6 className="font-semibold text-gray-800 mb-1">
                                {subObj.title}
                              </h6>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {subObj.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  })

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-deep-water-blue mb-6 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Terug naar home
            </Link>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-deep-water-blue/10 rounded-lg">
                <FileText className="h-8 w-8 text-deep-water-blue" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Verantwoording & Dekkingsmatrix
                </h1>
                <p className="text-lg text-gray-600">
                  Concretisering SLO Kerndoelen 2025 in Zaanse context
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">{SLO_MAPPING.length}</div>
                <div className="text-sm text-gray-600">Domeinen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">{totalObjectives}</div>
                <div className="text-sm text-gray-600">Kerndoelen</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">8</div>
                <div className="text-sm text-gray-600">Werelden</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-deep-water-blue">100%</div>
                <div className="text-sm text-gray-600">Dekking</div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs tabs={tabs} defaultTab={tabs[0]?.id} />

          <Card className="mt-12 bg-white border-2 border-gray-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">Verantwoordingsdocument</p>
                  <p className="mb-2">
                    Dit document toont de koppeling tussen de officiële SLO Kerndoelen 2025 
                    en de 8 werelden van 'De Zaanse Wereld'. Elke kerndoel is geconcretiseerd 
                    met specifieke subdoelen en leeractiviteiten in Zaanse context.
                  </p>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Laatste update: {new Date().toLocaleDateString('nl-NL', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
