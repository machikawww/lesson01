const hankei = Number(process.argv[2])
// console.log(hankei * hankei * 3.14)

function Menseki(value) {
    const result = value * value * 3.14
    return result
}

console.log(Menseki(hankei))