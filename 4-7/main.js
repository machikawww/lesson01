let names = process.argv[2]
const key = process.argv[3]

names = names.split(',')
let array = []
for (let j = 0; j < names.length; j++) {
    let name = names[j]
    array.push(name.toLowerCase())
}
//小文字のnames arrayを作成する
//console.log(array)

const result = array.filter((word) => {
    return word.includes(key)
})
console.log(result.sort())