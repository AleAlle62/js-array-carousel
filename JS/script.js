const arrImages = [
	'img/img/01.jpg',
	'img/img/02.jpg',
	'img/img/03.jpg',
	'img/img/04.jpg',
	'img/img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

// creare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);
}


const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;

// aggiungere gli event listeners ai due bottoni
eleBtnRight.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');


    // ciclo infinto

    if (activeIndex === arrImages.length - 1){
        activeIndex = 0
    } else {
        activeIndex++
    }

	// incrementare l'active index
	// activeIndex++;
	// aggiungere la classe active all'elemento successivo

	listEleImg[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		eleBtnRight.classList.add('hidden');
	}
});

eleBtnLeft.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');


    // ciclo infinito
    
    if (activeIndex === 0){
        activeIndex = listEleImg.length - 1
    } else {
        activeIndex--
    }

	// incrementare l'active index
	

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');

	// eleBtnRight.classList.remove('hidden');
	// if (activeIndex === 0) {
	// 	eleBtnLeft.classList.add('hidden');
	// }
});


