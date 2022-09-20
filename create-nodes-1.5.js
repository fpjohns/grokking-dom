const div = document.createElement('div')
div.className = 'red'

const divg = document.createElement('div')
divg.className = 'green'

const divb = document.createElement('div')
divb.className = 'blue'
divb.textContent = 'я вложен'

divg.append(divb)
div.append(divg)

console.log(div)
