const users = require(process.argv[2])
const user = users.users


for (let user of users.users) {
    let salary = 0
    let year = Number(user.years)
    if (user.rank === 'A') {
        if (user.years < 5) {
            salary = (3000 * year) + 100000
        } else {
            salary = (3000 * year) + 120000
        }
    } else if (user.rank === 'B') {
        salary = (4000 * year) + 140000
    } else {
        salary = (5000 * year) + 160000
    }
    user.salary = salary
}

const results = user.sort((a, b) => {
    return b.salary - a.salary
})

for (let result of results) {
    console.log(`${result.name}:${result.salary}`)
}