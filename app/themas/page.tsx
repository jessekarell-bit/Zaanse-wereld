import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { themes } from '@/src/data/curriculum'
import { themeColorSchemes } from '@/src/data/theme-config'
import {
  Waves,
  Factory,
  Ship,
  Users,
  Wind,
  Palette,
  Sprout,
  Cog,
  BookOpen as BookOpenIcon,
} from 'lucide-react'

// Map curriculum theme id naar theme-config slug voor kleuren
const themeColorIdMap: Record<string, string> = {
  'de-molens': 'de-molens',
  'verkade-en-de-fabriek': 'verkade-en-de-fabriek',
  'walvisvaart': 'walvisvaart',
  'de-polders': 'de-polders',
  'monet-en-de-zaan': 'monet-en-de-zaan',
  'de-rode-zaan': 'de-rode-zaan',
  'hembrug-en-innovatie': 'hembrug-en-innovatie',
  'cacao-en-voedsel': 'cacao-en-voedsel',
}

// Map themes to icons
const themeIcons: Record<string, any> = {
  'de-molens': Wind,
  'verkade-en-de-fabriek': Factory,
  'walvisvaart': Ship,
  'de-polders': Waves,
  'monet-en-de-zaan': Palette,
  'de-rode-zaan': Users,
  'hembrug-en-innovatie': Cog,
  'cacao-en-voedsel': Sprout,
}

// Mapping van theme.id naar titels
const themeTitleMap: Record<string, string> = {
  'de-molens': 'De Wereld van de Molens',
  'verkade-en-de-fabriek': 'De Wereld van Verkade & de Fabriek',
  'walvisvaart': 'De Wereld van de Walvisvaart',
  'de-polders': 'De Wereld van de Polders',
  'monet-en-de-zaan': 'De Wereld van Monet & de Zaan',
  'de-rode-zaan': 'De Wereld van de Rode Zaan',
  'hembrug-en-innovatie': 'De Wereld van Hembrug & Innovatie',
  'cacao-en-voedsel': 'De Wereld van Cacao & Voedsel',
}

// Helper function to get summary
function getThemeSummary(theme: typeof themes.themes[0]): string {
  if (theme.introduction) {
    const firstSentence = theme.introduction.split('.')[0]
    return firstSentence.length > 120 
      ? firstSentence.substring(0, 120) + '...'
      : firstSentence + '.'
  }
  if (theme.description) {
    return theme.description
  }
  return `Ontdek ${theme.name} en leer over de geschiedenis en cultuur van de Zaanstreek.`
}

export default function ThemesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-water-blue mb-6">
              Ontdek onze 8 werelden
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Een tweejarige thematische cyclus rondom de drie pijlers: mens, industrie en natuur.
            </p>
          </div>

          {/* Werelden Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const themeOrder = [
                'de-molens',
                'verkade-en-de-fabriek',
                'walvisvaart',
                'de-polders',
                'monet-en-de-zaan',
                'de-rode-zaan',
                'hembrug-en-innovatie',
                'cacao-en-voedsel',
              ]
              
              const sortedThemes = [...themes.themes].sort((a, b) => {
                const indexA = themeOrder.indexOf(a.id)
                const indexB = themeOrder.indexOf(b.id)
                if (indexA === -1) return 1
                if (indexB === -1) return -1
                return indexA - indexB
              })
              
              return sortedThemes.map((theme) => {
                const Icon = themeIcons[theme.id] || BookOpenIcon
                const summary = getThemeSummary(theme)
                const displayTitle = themeTitleMap[theme.id] || theme.name
                const colorScheme = themeColorSchemes[themeColorIdMap[theme.id]] || themeColorSchemes['de-molens']
                const themeLink = `/themas/${theme.id}`
                
                return (
                  <Link
                    key={theme.id}
                    href={themeLink}
                    className="group block h-full"
                  >
                    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-polder-green cursor-pointer">
                      <CardContent className="p-6 pt-6 flex flex-col flex-grow">
                        <div className="flex flex-col items-center text-center flex-grow">
                          <div className={`${colorScheme.bg} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                            <Icon className={`h-8 w-8 ${colorScheme.text}`} />
                          </div>
                          
                          <h3 className="font-serif text-lg font-bold text-deep-water-blue mb-3 group-hover:text-polder-green transition-colors flex-shrink-0">
                            {displayTitle}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-4 flex-grow">
                            {summary}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 justify-center mt-auto flex-shrink-0">
                            {theme.bouw.onderbouw && (
                              <span className="text-xs bg-blue-100 text-deep-water-blue px-2 py-1 rounded font-medium">
                                OB
                              </span>
                            )}
                            {theme.bouw.middenbouw && (
                              <span className="text-xs bg-green-100 text-polder-green px-2 py-1 rounded font-medium">
                                MB
                              </span>
                            )}
                            {theme.bouw.bovenbouw && (
                              <span className="text-xs bg-brick-red/10 text-brick-red px-2 py-1 rounded font-medium">
                                BB
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })
            })()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
