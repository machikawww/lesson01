const argv = process.argv[2]
const arr = []
const a = argv.split(':')
const h = Number(a[0])
const m = Number(a[1])

function Clockplus(hour, minute) {
    minute += 45
    if (minute >= 60) {
        hour++
        minute -= 60
        if (hour >= 24) {
            hour -= 24
        }
    }
    return `${hour}:${minute}`
}

console.log(Clockplus(h, m))