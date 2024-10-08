// getElementById => return sebuah element
const elH1Title = document.getElementById("title")
elH1Title.style.color="red"
// console.log(elH1Title);


// getElementByClassName => return html collection

const elP = document.getElementsByClassName("content")
elP[1].style.color="blue"
// console.log(elP);



// getElementByTagName => return juga html collection
const elH4 = document.getElementsByTagName('h4')
console.log(elH4);

for(let i = 0; i<elH4.length; i++){
    elH4[i].style.color = "yellow"
}

// querySelector => return element

const elPText = document.querySelector('#text')
console.log(elPText);

// querySelectorAll => return nodelist

const elLiItem = document.querySelectorAll('.item')
elLiItem[0].style.fontSize = "40px"
console.log(elLiItem);