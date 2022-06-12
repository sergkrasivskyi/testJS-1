// alert(window.innerHeight)
alert(window.location.pathname)
if (window.location.pathname == "$index.html") {
  const currentStudio = document.querySelector(".current-studio");
  //   current.style.backgroundColor = "blue";
  currentStudio.style.color = "blue";
  currentStudio.style.fontSize = "40px";
  //   text.style.fontSize = '40px'
}
if (window.location.pathname == "$txt.html") {
  const currentPortpholio = document.querySelector(".current-portpholio");
  // text.style.backgroundColor = "green";
  currentPortpholio.style.color = "green";
  currentPortpholio.style.fontSize = "40px";
}

//   const link = document.querySelector('.link');
//   link.style.borderBottom = '2px solid red'
//   setTimeout(() => document.body.style.background = "", 5000);
//   for (let i = 1; i<=5; i= i+ 1) {
// setTimeout(() => text.style.backgroundColor = "blue", 3000);
// text.style.color = "green";
// text.style.fontSize = '40px'
// setTimeout(() => text.style.backgroundColor = "yellow", 3000);
// text.style.color = "blue";
// }
//   const paragraph = document.querySelector(".paragraph");
//   paragraph.style.backgroundColor = "red";
// }

//
// const button = document.querySelector('button')

// var elem = document.querySelector('#studio-link');
// добавим класс к элементу
// elem.className = "";
// elem.className = 'studio-link'; // "alert"
// изменим класс у элемента
// elem.className = 'alert-warning'; // "alert-warning"
// получим значение класса и сохраним его в className
// var classElem = elem.className; // "alert-warning"
// удалим класс у элемента
// elem.className = ""; // ""
