let $ = document
let headerSlide = $.querySelector('.header')
let headerSlideObj = [
    {
        id: 1,
        img: 'banner2.png'
    },
    {
        id: 2,
        img: 'banner.png'
    }
]
    
let index = 0;

setInterval(() => {
    index++;
    if(index > 1){
        index = 0;
    }
    headerSlide.style.backgroundImage = `linear-gradient(90deg, rgba(44, 44, 44, 0.4) 0%,rgba(44, 44, 44, 0.5) 100%, transparent 20%) ,url(${headerSlideObj[index].img})`
}, 3000);

