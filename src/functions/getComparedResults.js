

export const getComparedResults = (save,results) =>{
    let lessPoints = []
    let moreMistakes = []
    let userResults = {}
    let playersInTotal = 0;
    console.log("save: "+ save )
    console.log("results: "+ results )

    for (const result in results) {
        playersInTotal ++
        if (results[result].pointsOwned < save.pointsOwned){
            lessPoints.push(result)
        }
        if (results[result].wrongAnswers > save.wrongAnswers){
            moreMistakes.push(result)
        }
    }
    console.log(lessPoints)
    console.log(moreMistakes)


    userResults["betterThan"] = Math.round((lessPoints.length * 100) / playersInTotal)
    userResults["lessMistakes"] = Math.round((moreMistakes.length * 100) / playersInTotal)

    return userResults
}