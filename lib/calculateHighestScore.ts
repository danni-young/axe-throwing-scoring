export const calculateHighestScore = (scores: 
  {
     [index: string]: { 
        rounds: number[]; 
        total: number 
      }
}): { 
  results: 
    { 
      name: string; 
      score: number;
      class: string;
    }[]; 
      draw: boolean 
    } => {
  const playerNames: string[] = Object.keys(scores)
if(playerNames.length === 0) {
  return {
    results: [],
    draw: false
  }
}
  const results = playerNames
    .map((name: string) => {
      return {
        name,
        score: scores[name].total,
      }
    })
    .sort((a, b) => b.score - a.score)
    .map((person, index) => {
      return {
        ...person,
        class: index === 0 ? 'mb-2 bg-yellow-600 font-semibold' : 'mb-2 font-semibold'
      }
    })
  //TODO: return winner or winners, the runners up, won't need draw then
  const draw = results[0].score === results[1].score
  return { results, draw }
}
