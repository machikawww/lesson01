const points = [17, 38, 100, 95, 23, 62, 77, 45, 69, 81, 83, 51, 42, 36, 60]
const star = "*"

//numberの箱を用意してあげる。
const number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//○点代に何人いるかの配列を再構築する
//0点代が何人→ループ
for (let i = 0; i < points.length; i++) {
    const point = points[i]
    const index = Math.floor(point / 10)　//indexに○点代かいれる　/10することで○点代か出る
    number[index]++　//index番目が＋＋される
}
//console.log(number.join(separator = ', '))
//0, 1, 1, 2, 2, 1, 3, 1, 2, 1, 1, 0

const max = Math.max.apply(null, number)
//console.log(max)

for (let i = 0; i < max; i++) {
    //maxの数だけforループ
    const array = []
    for (let a = 0; a < number.length; a++) {
        if (number[a] >= (max - i)) {
            array.push("*")
        } else {
            array.push(" ")
        }
    }
    console.log(array.join('  '))
}
console.log("----------------------------------")
console.log("0 10 20 30 40 50 60 70 80 90 100")