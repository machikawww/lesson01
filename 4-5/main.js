const numbers = []

for (let i = 2; i < process.argv.length; i++) {
    numbers.push(Number(process.argv[i]))
}
//console.log(numbers)コマンドライン引数の配列を作成

function Bigger(array) {
    let arr = []

    //0~9999までマッチした数から配列にpush()
    for (let j = 0; j <= 9999; j++) {
        for (let m = 0; m < array.length; m++) {
            if (j === array[m]) {
                arr.push(array[m])
            }
        }
    }
    return arr
}

const result = Bigger(numbers)
console.log(result)