const playdata = require('./playdata.json')
const songs = require('./songs.json')
const data = playdata.data

data.sort((a, b) => {
    return a.count - b.count
})

// console.log(data) dataのカウントをソート

//playdataのidとsongsのidが同じならconsole.log()に表示
for (let dat of data) {
    let count = Number(dat.count)
    let id = Number(dat.id)
    for (let song of songs.songs) {
        let title = song.title
        if (id === song.id) {
            console.log(`${title}:\t${count}`)
        }
    }
}
