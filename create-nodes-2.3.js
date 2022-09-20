
function render(arr){
     const ul = document.createElement('ul')
    for(let i = 0; i < arr.length; i++){
        const li = document.createElement('li')
        const a = document.createElement('a')


        li.append(a)
        ul.append(li)

        a.href = arr[i].url
        a.textContent = arr[i].name
    }
    return ul

}
console.log(render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]))