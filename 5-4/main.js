const json = require('./kobe.json')



function isKey(file) {
    let keys = Object.keys(file)
    for (let key of keys) {
        if (key === 'kobe') {
            console.log(file[key])
        } else {
            isKey(file[key])
        }
    }
}

isKey(json)