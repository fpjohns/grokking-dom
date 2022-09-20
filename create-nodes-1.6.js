const div = document.createElement("div");

const ul = document.createElement("ul");

const li = document.createElement("li");
const li2 = document.createElement("li");

const link = document.createElement('a')
const link2 = document.createElement('a')

link.setAttribute('href', "https://instagram.com/intocode")
link.textContent = 'наш инстаграм'

link2.setAttribute('href', "https://intocode.ru")
link2.textContent = 'наш сайт'


li.append(link)
li2.append(link2)

ul.append(li, li2)

div.append(ul)

console.log(div);
