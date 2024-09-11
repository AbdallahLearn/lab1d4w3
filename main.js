// Q1

document.getElementsByClassName('h1')[0].style.color='yellow'
document.getElementsByClassName('h1')[0].style.backgroundColor='black'

// Q2
let element = document.getElementById('p')
let size = element.classList.add("p")



// Q3

let imgSrc = document.getElementsByTagName('img')[0]
imgSrc.src = 'https://i.pinimg.com/564x/4e/3f/d8/4e3fd88b3d347e9f57246c2fb464ab97.jpg'


// Q4

document.getElementById('addItemsButton')
    const list = document.querySelector('#myList');
    for (let i = 1; i <= 3; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `العنصر ${i}`; 
        list.appendChild(listItem); 

    }
// Q5

const tableContainer = document.getElementById('tableContainer');

    
const table = document.createElement('table');
table.className = 'table-style'; 

    
const row1 = table.insertRow();
for (let i = 1; i <= 3; i++) {
        const cell = row1.insertCell();
        cell.textContent = `العمود ${i}`; 
}

   
const row2 = table.insertRow();
for (let i = 1; i <= 3; i++) {
        const cell = row2.insertCell();
        cell.textContent = `صف 2 - عمود ${i}`;
}


tableContainer.appendChild(table);