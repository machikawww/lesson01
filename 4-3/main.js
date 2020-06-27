const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

//console.log(errorLogs)

for (let i = 0; i < errorLogs.length; i++) {
  const arr = []
  const error = errorLogs[i].split(/[:,\s,-]/)
  //：と空白とーで区切った配列にする
  for (let j = 2; j <= 4; j++) {
    arr.push(error[j])
  }
  console.log(arr.join(' '))
}