"use strict"

// Ждём загрузку контента
window.onload = () => {
    const parallax = document.querySelector('.parallax')

    if (parallax) {
        const content = document.querySelector('.parallax__container')
        const background = document.querySelector('.bottle-bg')
        const backgroundImage = document.querySelector('.bottle-bg__image')
        const bottle = document.querySelector('.bottle-img')

        // Коэффициенты
        const forBackground = 30
        const forBackgroundImage = 20
        const forBottle = 10

        // speed of animation
        const speed = 0.8

        let positionX = 0, positionY = 0
        let coordXprocent = 0, coordYprocent = 0

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX
            const distY = coordYprocent - positionY

            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)

            background.style.cssText = `transform: translate(${positionX / forBackground}%,${positionY / forBackground}%)`
            backgroundImage.style.cssText = `transform: translate(${positionX / forBackgroundImage * -1}%,${positionY / forBackgroundImage * -1}%)`
            bottle.style.cssText = `transform: translate(${positionX / forBottle}%,${positionY / forBottle}%)`

            requestAnimationFrame(setMouseParallaxStyle)
        }
        setMouseParallaxStyle()

        parallax.addEventListener('mousemove', function(e) {
            // Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth
            const parallaxHeight = parallax.offsetHeight

            // Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2
            const coordY = e.pageY - parallaxHeight / 2

            // Получаем проценты
            coordXprocent = coordX / parallaxWidth * 100
            coordYprocent = coordY / parallaxHeight * 100
        })
    }
}