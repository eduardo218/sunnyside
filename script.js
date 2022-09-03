function handleMenuButton() {
    let navLinks = document.getElementById('navbar-links')
    if (navLinks.classList.contains('hide')){
        navLinks.classList.remove('hide')
    }else{
        navLinks.classList.add('hide')
    }
}