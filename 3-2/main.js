const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])

let a = '*'
let b = '-'



for (let i = 1; i <= num1; i++) {
    let array = []
    for (let j = 1; j <= num2; j++) {
        if (i % 2 !== 0) {
            if (j % 2 !== 0) {
                array.push(a)
            } else {
                array.push(b)
            }
        } else {
            if (j % 2 !== 0) {
                array.push(b)
            } else {
                array.push(a)
            }
        }
    }
    console.log(array.join(''))
}

