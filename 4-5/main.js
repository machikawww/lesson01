const numbers = []

for (let i = 2; i < process.argv.length; i++) {
    numbers.push(Number(process.argv[i]))
}
//console.log(numbers)コマンドライン引数の配列を作成

function isSmall(array) {
    let arr = []

    //0~9999までマッチした数から配列にpush()
    for (let i = 0; i <= 9999; i++) {
        for (let m = 0; m < array.length; m++) {
            if (i === array[m]) {
                arr.push(array[m])
            }
        }
    }
    return arr
}

const result = isSmall(numbers)
console.log(result)