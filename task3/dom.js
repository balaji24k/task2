console.log(document.URL);
console.log("javascript")
console.log(document.title);

document.title="myList";

console.log(document.all[10]);

var headerTitle = document.getElementById('header-title');
headerTitle.style.color="blue"

headerTitle.style.borderBottom="solid 3px #000"


var item=document.getElementsByClassName('title')
item[0].style.color='green';
item[0].style.fontWeight='bold';

var items = document.getElementsByClassName('list-group-item');
console.log(items)
items[2].style.backgroundColor = 'green';

for (let i=0;i<items.length;i++) {
    items[i].style.fontWeight='bold';
}

