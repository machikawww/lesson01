const yen = Number(process.argv[2])

let hyakuen = Math.floor(yen / 100)
let jyuen = Math.floor(yen / 10) % 10
let ichien = yen % 10

console.log(`100円玉${hyakuen}枚、10円玉${jyuen}枚、1円玉${ichien}枚`)