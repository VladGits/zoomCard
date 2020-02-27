const elems = document.querySelectorAll('.card-picture-link')
const modalImg = document.querySelector('.modal-img')
const modalLink = document.querySelector('.modal-link')
const modalW = document.querySelector('.modal-overlay')

elems.forEach( elem => {
elem.addEventListener('click', (e) => {
    e.preventDefault;
    let link = elem.getAttribute('data-href')
    modalLink.setAttribute('href', link)
    modalImg.setAttribute('src', link)
    console.log(modalLink);
    console.log(modalImg);

    modalW.style.display = 'flex'
    
    $(function () {
        $('.zoom').zoomy();
    }(jQuery))
    
})
})

modalW.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        modalW.style.display = 'none'
        modalLink.removeAttribute('href', link)
        modalImg.removeAttribute('src', link)
    }
})

