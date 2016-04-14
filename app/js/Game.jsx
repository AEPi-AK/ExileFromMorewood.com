import 'whatwg-fetch'
const RACES = ['Human', 'Dwarf', 'Elf']
const STATS = ['strength', 'wisdom', 'dexterity']
const MAX_LEVEL = 8
const DRAGONSLAYER_LEVEL = 4
const api_base = 'http://api.ExileFromMorewood.com'

/* shout out 2 my boi avi romanoff for all of this */

function calculateLevel(points) {
  if (points < 50) return 1
  if (points < 230) return 2
  if (points < 420) return 3
  if (points < 660) return 4
  if (points < 840) return 5
  if (points < 1270) return 6
  if (points < 1690) return 7
  return 8
}

async function getCharacter(identifier) {
  console.log(`getCharacter(${identifier})`)
  const response = await fetch(api_base + `/characters/${identifier}`)
  if (response.status == 404) { // not found
    return null
  }
  return await response.json()
}

export {
  RACES,
  STATS,
  MAX_LEVEL,
  DRAGONSLAYER_LEVEL,
  calculateLevel,
  getCharacter,
}
