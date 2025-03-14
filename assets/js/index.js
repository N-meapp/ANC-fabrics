// function handleToggle(){
//     const toggleBar = document.getElementById('toggle-bar')
    
//     if(toggleBar.style.display == 'block'){
//       toggleBar.style.display = 'none'
//     }else{
//       toggleBar.style.display = 'block'
//     }

//   }



// const menuBtn = document.getElementById('menu-btn');
// const sidebar = document.getElementById('sidebar');
// const closeBtn = document.getElementById('close-btn');

// menuBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('-translate-x-full');
// });

// closeBtn.addEventListener('click', () => {
//     sidebar.classList.add('-translate-x-full');
// });

// document.addEventListener('click', (event) => {
//     if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
//         sidebar.classList.add('-translate-x-full');
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    if (!menuBtn || !sidebar || !closeBtn) {
        console.error("❌ Elements not found!");
        return;
    }

    // Open Sidebar
    menuBtn.addEventListener("click", function (event) {
        console.log("✅ Menu button clicked");
        sidebar.classList.toggle("-translate-x-full");
        event.stopPropagation();
    });

    // Close Sidebar via Close Button
    closeBtn.addEventListener("click", function (event) {
        console.log("✅ Close button clicked");
        sidebar.classList.add("-translate-x-full");
        event.stopPropagation();
    });

    // Close Sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.classList.contains("-translate-x-full") && 
            !sidebar.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            console.log("✅ Clicked outside sidebar, closing it");
            sidebar.classList.add("-translate-x-full");
        }
    });
});



// window.addEventListener("DOMContentLoaded",()=>{
//     console.log('testinggggggg');
//     let productCard1 = document.getElementById('product-card-1')
//     let productCard2 = document.getElementById('product-card-2')
//     let productCard3 = document.getElementById('product-card-3')

//     let temHeight = 0

//     if(productCard1.style.height>=temHeight){
//         temHeight=productCard1.style.height

//     }
//     else if(productCard2.style.height>=temHeight){
//         temHeight=productCard2.style.height

//     }
//     else if(productCard3.style.height>=temHeight){
//         temHeight=productCard3.style.height

//     }


//     productCard1.style.height = temHeight
//     productCard2.style.height = temHeight
//     productCard3.style.height = temHeight


    
// })




// const images = {
//     hotel: [
//         { src: './assets/images/product1.png', title: 'Luxury Towels' },
//         { src: './assets/images/product1.png', title: 'Plush Robes' },
//         { src: './assets/images/product1.png', title: 'Elegant Bedding' },
//         { src: './assets/images/product1.png', title: 'Premium Sheets' },
//         { src: './assets/images/product1.png', title: 'Soft Pillowcases' },
//         { src: './assets/images/product1.png', title: 'Hotel Blankets' },
//         { src: './assets/images/product1.png', title: 'Resort Comforters' },
//         { src: './assets/images/product1.png', title: 'Deluxe Duvets' }
//     ],
//     hospital: [
//         { src: './assets/images/product2.png', title: 'Sterile Linens' },
//         { src: './assets/images/product2.png', title: 'Medical Gowns' },
//         { src: './assets/images/product2.png', title: 'Patient Bedsheets' },
//         { src: './assets/images/product2.png', title: 'Disposable Drapes' },
//         { src: './assets/images/product2.png', title: 'Operating Room Towels' },
//         { src: './assets/images/product2.png', title: 'Emergency Bed Covers' },
//         { src: './assets/images/product2.png', title: 'ICU Sheets' },
//         { src: './assets/images/product2.png', title: 'Maternity Ward Fabrics' }
//     ],
//     spa: [
//         { src: './assets/images/product4.png', title: 'Soft Spa Towels' },
//         { src: './assets/images/product4.png', title: 'Relaxing Robes' },
//         { src: './assets/images/product4.png', title: 'Aromatherapy Wraps' },
//         { src: './assets/images/product4.png', title: 'Massage Table Covers' },
//         { src: './assets/images/product4.png', title: 'Luxury Bath Sheets' },
//         { src: './assets/images/product4.png', title: 'Sauna Wraps' },
//         { src: './assets/images/product4.png', title: 'Therapy Bed Covers' },
//         { src: './assets/images/product4.png', title: 'Herbal Wraps' }
//     ]
// };

// function showImages(category) {
//     const imageGrid = document.getElementById('imageGrid');
//     imageGrid.innerHTML = '';

//     if (category === 'hotel') {
        
//         const bathLinenTitle = document.createElement('h2');
//         bathLinenTitle.className = 'text-xl font-bold w-full col-span-full text-left mt-4';
//         bathLinenTitle.textContent = 'Bath Linen';
//         imageGrid.appendChild(bathLinenTitle);

        
//         images[category].slice(0, 4).forEach((item) => {
//             const div = document.createElement('div');
//             div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
//             div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
//                              <p class="text-center text-lg font-semibold mt-4">${item.title}</p>`;
//             imageGrid.appendChild(div);
//         });

        
//         const bedLinenTitle = document.createElement('h2');
//         bedLinenTitle.className = 'text-xl font-bold w-full col-span-full text-left mt-6';
//         bedLinenTitle.textContent = 'Bed Linen';
//         imageGrid.appendChild(bedLinenTitle);

        
//         images[category].slice(4, 8).forEach((item) => {
//             const div = document.createElement('div');
//             div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
//             div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
//                              <p class="text-center text-lg font-semibold mt-4">${item.title}</p>`;
//             imageGrid.appendChild(div);
//         });

//     } else {
       
//         images[category].forEach((item) => {
//             const div = document.createElement('div');
//             div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
//             div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
//                              <p class="text-center text-lg font-semibold ">${item.title}</p>`;
//             imageGrid.appendChild(div);
//         });
//     }
// }



// document.addEventListener('DOMContentLoaded', () => {
//     showImages('hotel');
// });


const images = {
    hotel: [
        { src: './assets/images/product1.png', title: 'Luxury Towels' },
        { src: './assets/images/product1.png', title: 'Plush Robes' },
        { src: './assets/images/product1.png', title: 'Elegant Bedding' },
        { src: './assets/images/product1.png', title: 'Premium Sheets' },
        { src: './assets/images/product1.png', title: 'Soft Pillowcases' },
        { src: './assets/images/product1.png', title: 'Hotel Blankets' },
        { src: './assets/images/product1.png', title: 'Resort Comforters' },
        { src: './assets/images/product1.png', title: 'Deluxe Duvets' }
    ],
    hospital: [
        { src: './assets/images/product2.png', title: 'Sterile Linens' },
        { src: './assets/images/product2.png', title: 'Medical Gowns' },
        { src: './assets/images/product2.png', title: 'Patient Bedsheets' },
        { src: './assets/images/product2.png', title: 'Disposable Drapes' },
        { src: './assets/images/product2.png', title: 'Operating Room Towels' },
        { src: './assets/images/product2.png', title: 'Emergency Bed Covers' },
        { src: './assets/images/product2.png', title: 'ICU Sheets' },
        { src: './assets/images/product2.png', title: 'Maternity Ward Fabrics' }
    ],
    spa: [
        { src: './assets/images/product4.png', title: 'Soft Spa Towels' },
        { src: './assets/images/product4.png', title: 'Relaxing Robes' },
        { src: './assets/images/product4.png', title: 'Aromatherapy Wraps' },
        { src: './assets/images/product4.png', title: 'Massage Table Covers' },
        { src: './assets/images/product4.png', title: 'Luxury Bath Sheets' },
        { src: './assets/images/product4.png', title: 'Sauna Wraps' },
        { src: './assets/images/product4.png', title: 'Therapy Bed Covers' },
        { src: './assets/images/product4.png', title: 'Herbal Wraps' }
    ]
};

function showImages(category) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    console.log(category,'category');
    

    if(category=='hotel'){
        imageGrid.classList.add('grow-hotel')
        imageGrid.classList.remove('grow-spa')
        imageGrid.classList.remove('grow-hospital')
    }else if(category=='spa'){
        imageGrid.classList.remove('grow-hotel')
        imageGrid.classList.add('grow-spa')
        imageGrid.classList.remove('grow-hospital')
    }else{
        imageGrid.classList.remove('grow-hotel')
        imageGrid.classList.remove('grow-spa')
        imageGrid.classList.add('grow-hospital')
    }



    // Change button styles
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('bg-red-400', 'text-white');
        button.classList.add('bg-white', 'text-black-400', 'border', );
        console.log(button,'butttttttt');
        

    });
    document.querySelector(`button[onclick="showImages('${category}')"]`).classList.add('bg-red-600', 'text-white');
    document.querySelector(`button[onclick="showImages('${category}')"]`).classList.remove('bg-white', 'text-red-400', 'border', 'border-red-400');

    if (category === 'hotel') {

        const bathLinenTitle = document.createElement('h2');
        bathLinenTitle.className = 'text-xl font-bold w-full col-span-full text-left mt-4';
        bathLinenTitle.textContent = 'Bath Linen';
        imageGrid.appendChild(bathLinenTitle);

        images[category].slice(0, 4).forEach((item) => {
            const div = document.createElement('div');
            div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
            div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
                             <p class="text-center text-lg font-semibold mt-4">${item.title}</p>`;
            imageGrid.appendChild(div);
        });

        const bedLinenTitle = document.createElement('h2');
        bedLinenTitle.className = 'text-xl font-bold w-full col-span-full text-left mt-6';
        bedLinenTitle.textContent = 'Bed Linen';
        imageGrid.appendChild(bedLinenTitle);

        images[category].slice(4, 8).forEach((item) => {
            const div = document.createElement('div');
            div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
            div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
                             <p class="text-center text-lg font-semibold mt-4">${item.title}</p>`;
            imageGrid.appendChild(div);
        });
    } else {

        images[category].forEach((item) => {
            const div = document.createElement('div');
            div.className = 'w-full sm:w-[200px] md:w-[220px] lg:w-[250px] h-[266px] bg-gray-200 rounded-[12px] flex flex-col items-center p-4 shadow-md';
            div.innerHTML = `<img src="${item.src}" class="w-full h-[220px] object-cover rounded-[12px]"> 
                             <p class="text-center text-lg font-semibold">${item.title}</p>`;
            imageGrid.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showImages('hotel');
});






// let index = 0

// function handleModal(status,imgSrc,i){
    

//     const modal = document.getElementById('image-modal')
//     const modalImage = document.getElementById('image-modal-src')

//     index = i

//     if(status){
//         modal.style.display = 'block'
//         modalImage.src  = imgSrc

//     }else{
//         modal.style.display = 'none'

//     }

// }



// function handleChangeModal(status){

//     const srcArray = ['./assets/images/bathrobes.webp','./assets/images/spa_towels.jpg','./assets/images/bed_fabrics.webp','./assets/images/spa_towels1.jpg','./assets/images/spa_towels2.jpg','./assets/images/spa_towels3.jpg']

//     const modalImage = document.getElementById('image-modal-src')

    
//     if(status=='back'){

//         if(index==0){

//             modalImage.src  = srcArray[5]
//             index = 5
//         }else{
//             modalImage.src  = srcArray[index-1]
//             index = index - 1

//         }

//     }else{

//         if(index==5){
//         modalImage.src  = srcArray[0]
//         index = 0

//         }else{
            
//             modalImage.src  = srcArray[index+1]
//             index=index+1
//         }

//     }



// }







let index = 0; 
const srcArray = [
    './assets/images/bathrobes.webp',
    './assets/images/spa_towels.jpg',
    './assets/images/bed_fabrics.webp',
    './assets/images/spa_towels1.jpg',
    './assets/images/spa_towels2.jpg',
    './assets/images/spa_towels3.jpg'
];

// Open & Close Modal Function
function handleModal(status, imgSrc, i) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('image-modal-src');

    if (status) {
        index = i; // Update index
        modalImage.src = imgSrc;
        modal.classList.remove('hidden'); // Show modal

        // Add event listener only if it doesn't exist already
        document.addEventListener("keydown", handleKeyPress);
    } else {
        modal.classList.add('hidden'); // Hide modal
        document.removeEventListener("keydown", handleKeyPress);
    }
}

// Change Image Function (Next/Previous)
function handleChangeModal(status) {
    const modalImage = document.getElementById('image-modal-src');

    if (status === 'back') {
        index = (index === 0) ? srcArray.length - 1 : index - 1; // Loop backward
    } else {
        index = (index === srcArray.length - 1) ? 0 : index + 1; // Loop forward
    }

    modalImage.src = srcArray[index]; // Update image
}

// Handle Keyboard Press Events
function handleKeyPress(event) {
    if (event.key === "ArrowRight") {
        handleChangeModal('next'); // Next image
    } else if (event.key === "ArrowLeft") {
        handleChangeModal('back'); // Previous image
    } else if (event.key === "Escape") {
        handleModal(false); // Close modal
    }
}

// active navbar


function activeKey(){
    const home = document.getElementById('home')
    const about = document.getElementById('about')
    const products = document.getElementById('product')
    const services = document.getElementById('services')
    const gallery = document.getElementById('gallery')
    const contacts = document.getElementById('contacts')

    

}
