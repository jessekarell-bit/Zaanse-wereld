import { Bouw, BouwContent } from './curriculum'

export function getBouwContent(bouw: Bouw['onderbouw'] | Bouw['middenbouw'] | Bouw['bovenbouw']): BouwContent | null {
  if (!bouw) return null
  
  if (typeof bouw === 'string') {
    return {
      description: bouw,
      learningGoals: [],
      activities: []
    }
  }
  
  return bouw
}
