import { 
  Waves, 
  Factory, 
  Ship, 
  Users, 
  Wind, 
  Palette, 
  Sprout,
  Cog,
  LucideIcon
} from 'lucide-react'
import { ColorScheme } from '@/src/types/theme'

export interface ThemeConfig {
  title: string
  description: string
  icon: LucideIcon
  color: string
  link: string
  colorScheme: ColorScheme
}

// Color schemes per theme
export const themeColorSchemes: Record<string, ColorScheme> = {
  'de-molens': {
    text: 'text-cyan-700',
    bg: 'bg-cyan-100',
    border: 'border-l-cyan-600',
    activeBg: 'bg-cyan-600',
    activeBorder: 'border-cyan-600',
  },
  'verkade-en-de-fabriek': {
    text: 'text-amber-700',
    bg: 'bg-amber-100',
    border: 'border-l-amber-600',
    activeBg: 'bg-amber-600',
    activeBorder: 'border-amber-600',
  },
  'walvisvaart': {
    text: 'text-blue-700',
    bg: 'bg-blue-100',
    border: 'border-l-blue-600',
    activeBg: 'bg-blue-600',
    activeBorder: 'border-blue-600',
  },
  'de-polders': {
    text: 'text-teal-700',
    bg: 'bg-teal-100',
    border: 'border-l-teal-600',
    activeBg: 'bg-teal-600',
    activeBorder: 'border-teal-600',
  },
  'monet-en-de-zaan': {
    text: 'text-purple-700',
    bg: 'bg-purple-100',
    border: 'border-l-purple-600',
    activeBg: 'bg-purple-600',
    activeBorder: 'border-purple-600',
  },
  'de-rode-zaan': {
    text: 'text-rose-700',
    bg: 'bg-rose-100',
    border: 'border-l-rose-600',
    activeBg: 'bg-rose-600',
    activeBorder: 'border-rose-600',
  },
  'hembrug-en-innovatie': {
    text: 'text-slate-700',
    bg: 'bg-slate-100',
    border: 'border-l-slate-600',
    activeBg: 'bg-slate-600',
    activeBorder: 'border-slate-600',
  },
  'cacao-en-voedsel': {
    text: 'text-green-700',
    bg: 'bg-green-100',
    border: 'border-l-green-600',
    activeBg: 'bg-green-600',
    activeBorder: 'border-green-600',
  },
}

// Theme icons mapping
export const themeIcons: Record<string, LucideIcon> = {
  'de-molens': Wind,
  'verkade-en-de-fabriek': Factory,
  'walvisvaart': Ship,
  'de-polders': Waves,
  'monet-en-de-zaan': Palette,
  'de-rode-zaan': Users,
  'hembrug-en-innovatie': Cog,
  'cacao-en-voedsel': Sprout,
}

// Theme title mapping
export const themeTitles: Record<string, string> = {
  'de-molens': 'De Wereld van de Molens',
  'verkade-en-de-fabriek': 'De Wereld van Verkade & de Fabriek',
  'walvisvaart': 'De Wereld van de Walvisvaart',
  'de-polders': 'De Wereld van de Polders',
  'monet-en-de-zaan': 'De Wereld van Monet & de Zaan',
  'de-rode-zaan': 'De Wereld van de Rode Zaan',
  'hembrug-en-innovatie': 'De Wereld van Hembrug & Innovatie',
  'cacao-en-voedsel': 'De Wereld van Cacao & Voedsel',
}

// Helper function to get theme config
export function getThemeConfig(themeId: string): Partial<ThemeConfig> {
  return {
    title: themeTitles[themeId] || themeId,
    icon: themeIcons[themeId] || Wind,
    color: themeColorSchemes[themeId]?.text || 'text-gray-700',
    colorScheme: themeColorSchemes[themeId] || themeColorSchemes['de-molens'],
  }
}
