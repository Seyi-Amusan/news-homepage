const headerImg = document.querySelector('#section-1-img')
const menu = document.querySelector('#menu')
const mobileNav = document.querySelector('.nav-mobile')
const desktopNav = document.querySelector('.nav-desktop')
const body = document.querySelector('body')
const mobileNavList = document.querySelector('ul')
const header = document.querySelector('header')

console.log(mobileNavList);

const mobileNavFunc = () => {
    if (menu.src.includes('close')) { //nav is hidden
        menu.src = 'assets/images/icon-menu.svg'
        mobileNav.style.width = '0' 
        body.style.filter = 'grayscale(0)'
        mobileNavList.style.visibility = 'hidden'
        return
    }
    menu.src = 'assets/images/icon-menu-close.svg' //nav is visible
    mobileNav.style.width = '65vw'
    body.style.filter = 'grayscale(1)'
    mobileNav.style.filter = 'invert(grayscale)'
    mobileNav.style.transition = 'all .2s ease-in-out'
    mobileNavList.style.visibility = 'visible'
    return
}

const initApp = () => {

    if (window.innerWidth > 900) {
        headerImg.src = 'assets/images/image-web-3-desktop.jpg'
        menu.style.display = 'none'
        mobileNavList.style.display = 'none'
        desktopNav.style.display = 'flex'
        header.classList.add('header-desktop')
    }
    menu.addEventListener('click', mobileNavFunc)
    return
}


document.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 'complete') {
        initApp();
    }
})



