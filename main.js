//buat element baru
const bBaru = document.createElement('p')
const tBaru = document.createTextNode('Ini Ghaus Ulhaq')

bBaru.appendChild(tBaru)

//simpan bBaru di akhir Section A
const sa = document.getElementById('a')
sa.appendChild(bBaru);


//insertBefore
const liB = document.createElement('li')
const tliB = document.createTextNode('dede ulhaq')

liB.appendChild(tliB)

const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(liB, li2)


//remove
const link = document.getElementsByTagName('a')[0]
sa.removeChild(link)
 
//replace
const sb = document.getElementById('b')
const b4 = sb.querySelector('p')


const h2b = document.createElement('h2')
const th2 = document.createTextNode('usus krispi')

h2b.appendChild(th2)

sb.replaceChild(h2b, b4)