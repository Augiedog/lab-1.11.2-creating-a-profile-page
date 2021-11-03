let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let pic = document.createElement('img')
pic.setAttribute('class', 'dog-image')
pic.setAttribute('src', './assets/rizzo.jpg')
content.append(pic)

let details = document.createElement('h3')
details.setAttribute('class', 'dog-details')
details.append('Description')
content.append(details)

