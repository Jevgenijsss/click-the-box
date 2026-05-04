const box = document.getElementById('box')

let score = 0

const handleClick = () => {
    score++
    console.log('score:', score)
}

box.addEventListener('click', handleClick)
