let array = []

for (let i = 0; i < 10; i++) {
    array.push(i)
}

for (let i = array.length - 1; i >= 0; i--) {
    let ran = Math.floor(Math.random() * (i + 1));
    [array[i], array[ran]] = [array[ran], array[i]]
}

console.log(array)