const title = document.getElementById('main-heading');
console.log(title);

const items = document.getElementsByClassName('list-items');
console.log(items);

// items[4].style.color = 'lightblue'

for (let i = 0;  i < items.length ;i++) {
    items[i].style.letterSpacing = '2px';
}

const li = document.createElement('li');
const ul = document.querySelector('ul');

li.innerText = 'Cast Away';
li.setAttribute('class', 'list-items')
ul.append(li);

// li.removeAttribute('class')



