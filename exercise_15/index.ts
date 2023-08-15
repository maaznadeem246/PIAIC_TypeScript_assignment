

const guest2 = ['ali','haroon','adeel'];

guest2.forEach(guest => {
    console.log(`Hello ${guest}, I am inviting you for the Dinner`)
})

console.log("Hroon can't make it")

guest2[([...guest2]).findIndex((gInd) => gInd === 'haroon' )] = 'daniyal'

guest2.forEach(guest => {
    console.log(`Hello ${guest}, I am inviting you for the Dinner`)
})