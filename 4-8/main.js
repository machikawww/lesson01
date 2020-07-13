const str = "こはるはるここはるここはるはるここはるこはるはるはる"

function searchCount(text, name) {
    let index = 0
    let count = 0
    for (; true;) {
        index = text.indexOf(name, index)
        if (index === -1) {
            break;
        }
        index++
        count++
    }
    return count
}

const a = 'こはる'
const b = 'はるこ'
const result1 = searchCount(str, a)
const result2 = searchCount(str, b)
console.log(`${a}:${result1}\n${b}:${result2}`)
