for (let a = 1; a <= 9; a++) {
    let array = []
    for (let b = 1; b <= 9; b++) {
        array.push(a * b)
    }
    console.log(array.join(' '))
}