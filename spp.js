// var list = document.getElementById("list");
// var fruits = [
//   {
//     name: "Mango",
//     title: "Phalon ka badshah",
//     types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
//     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
//     image:
//       "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Watermelon",
//     title: "Garmi ka dushman",
//     types: ["Red Melon", "Green Melon"],
//     image:
//       "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Peach",
//     title: "Juicy Peach",
//     types: ["Swat Wala", "Quetta Wala"],
//     image:
//       "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Cherry",
//     title: "Khoon banane wali",
//     types: ["Black Cherry", "Red Cherry"],
//     image:
//       "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//   },
// ];

// fruits.forEach(function (data, ind) {
//   var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//   <div class="flex relative h-[250px]">
//     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//       data.image
//     }">
//     <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//       <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">
//       ${data.name}</h2>
//       <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
//       ${data.title}</h1>
//       <p class="leading-relaxed">${data.types.join(" , ")}</p>
//       <p class="leading-relaxed">${data.desc} </p>
//       <button onclick="updateDesc(this)">update</button>
//     </div>
//   </div>
// </div>`;
//   `<div> <button>${list.innerHTML}</button></div>`


//   list.innerHTML += ele;
// });
// function updateDesc(ele) {
//     var index = ele.parentElement.id;
//     fruits[index].desc = prompt("enter your desc");
//     list.innerHTML = "";
//     console.log(ele.parentElement)
//     fruits.forEach(function (data, ind) {
//         var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//         <div class="flex relative h-[250px]">
//           <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//             data.image
//           }">
//           <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//             <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
//             <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
//             ${data.title}</h1>
//             <p class="leading-relaxed">${data.types.join(" , ")}</p>
//             <p class="leading-relaxed">${data.desc} </p>
//             <button onclick="updateDesc(this)">update</button>
//           </div>
//         </div>
//       </div>`;
//         list.innerHTML += ele;
//       });
// }  

// function deleteElement(ele) {
//   var index = ele.parentElement.id;
//   fruits.splice(index, 1); 
//   list.innerHTML = "";
//   fruits.forEach(function (data, ind) {
//       var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//       <div class="flex relative h-[250px]">
//         <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//           data.image
//         }">
//         <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//           <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">
//           ${data.name}</h2>
//           <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
//           ${data.title}</h1>
//           <p class="leading-relaxed">${data.types.join(" , ")}</p>
//           <p class="leading-relaxed">${data.desc} </p>
//           </div>
//           </div>
//           <div><button data-index="${ind}" onclick="deleteElement(this)">delete</button></div>
//           </div>`; 
//       list.innerHTML += ele;
//   });
  


  
// // }



// }


var list = document.getElementById("list");
var fruits = [
  {
    name: "Mango",
    title: "Phalon ka badshah",
    types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Watermelon",
    title: "Garmi ka dushman",
    types: ["Red Melon", "Green Melon"],
    image:
      "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Peach",
    title: "Juicy Peach",
    types: ["Swat Wala", "Quetta Wala"],
    image:
      "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Cherry",
    title: "Khoon banane wali",
    types: ["Black Cherry", "Red Cherry"],
    image:
      "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
  },
  {
    name: "Apple",
    title: "health k lye best",
    types: ["yellow apple,red apple ,"],
    image:
    "https://www.shutterstock.com/image-illustration/red-apple-that-looks-delicious-260nw-2437099703.jpg",
   },
];

// Render function to display the fruits list
function renderFruits() {
  list.innerHTML = "";
  fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
      <div class="flex relative h-[250px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
        <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${data.name}</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${data.title}</h1>
          <p class="leading-relaxed">${data.types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc}</p>
          <button onclick="updateDesc(${ind})">update</button>
        </div>
      </div>
      <div><button onclick="deleteElement(${ind})">delete</button></div>
    </div>`;
    list.innerHTML += ele;
  });
}

// Update description function
function updateDesc(index) {
  fruits[index].desc = prompt("enter your desc:");
  renderFruits(); // Re-render the list
}

// Delete element function
function deleteElement(index) {
  fruits.splice(index, 1); 
  renderFruits(); // Re-render the list
}

// Initial render
renderFruits();
