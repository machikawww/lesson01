const max = Number(process.argv[2])
//ピラミッドの最大値をとる
const numbers = []
//*を出す数を配列にする
for (let i = 1; i <= max; i++) {
    if (i === max) {
    }
    numbers.push(i)
}
for (let k = (max - 1); k >= 1; k--) {
    numbers.push(k)
}
//sconsole.log(numbers)
//1,2,3,4,3,2,1　の配列を作成

for (let a = 0; a < max; a++) {
    //maxの数だけ配列を作成する
    const array = []
    for (let b = 0; b < numbers.length; b++) {
        //numbers配列１回目は４以上　※表示
        //2回目は３以上　＊表示・・・
        if (numbers[b] >= (max - a)) {
            array.push('*')
        } else {
            array.push(' ')
        }

    }
    console.log(array.join(''))
}