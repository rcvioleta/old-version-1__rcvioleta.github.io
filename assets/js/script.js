const hamburger = document.querySelector('.hamburger')

const toggleActive = () => {
  hamburger.classList.toggle('active')
}

hamburger.addEventListener('click', toggleActive, false)