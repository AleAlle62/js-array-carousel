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
const eleSliderThumbs = document.querySelector('.thumbs')


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);

	//thumbs

	// const eleThumb = document.createElement('img');
	// eleThumb.src = arrImages[i];
	// eleThumb.classList.add('thumb-img');
	// if (i === 0) {
	// 	eleThumb.classList.add('active');
	// }
	// eleSliderThumbs.append(eleThumb);
}


const listEleImg = document.querySelectorAll('.slider-img');
// const listThumbs = document.querySelector('.thumb-img') 
let activeIndex = 0;


// BOTTONE SOTTO
eleBtnRight.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	// listThumbs[activeIndex].classList.remove('active');

    // ciclo infinto
    if (activeIndex === arrImages.length - 1){
        activeIndex = 0
    } else {
        activeIndex++
    }

	listEleImg[activeIndex].classList.add('active');
	// listThumbs[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('hidden');
	if (activeIndex === listEleImg.length + 1) {
		eleBtnRight.classList.add('hidden');
	}
});

// BOTTONE SOPRA 
eleBtnLeft.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');

    // ciclo infinto
    if (activeIndex === arrImages.length - 1){
        activeIndex = 0
    } else {
        activeIndex++
    }
	listEleImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('hidden');
	if (activeIndex === listEleImg.length + 1) {
		eleBtnLeft.classList.add('hidden');
		// listThumbs[activeIndex].classList.add('active');
	}
});


