const arr = []
for (let i = 2; i < process.argv.length; i++) {
    arr.push(Number(process.argv[i]))
}

//コマンドライン引数を配列に追加し、ソートする

const result = arr.sort((a, b) => {
    return b - a
})
//３番目を表示
console.log(result[Math.round(arr.length / 2)])