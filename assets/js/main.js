let modal = document.querySelector('.btn-modal')
let modalblock = document.getElementById('modal-block')
let close = document.querySelector('.close-block')
let over = document.querySelector('.mouseover')
let move = document.querySelector('.mousemove')
let mousup = document.querySelector('.mouseup')
let mousedown = document.querySelector('.mousedown')

modal.addEventListener('dblclick', function(){
    modalblock.style.left = '0';
    modalblock.style.display = 'flex';
    modalblock.style.justifyContent = 'center';
    modalblock.style.alignItem = 'center';
    modalblock.style.flexDirection = 'column';
})

close.addEventListener('click', function(){
    modalblock.style.left = '-100vw';
})
over.addEventListener('mouseover', function(){
    over.style.background = 'black';
})
over.addEventListener('mouseout', function(){
    over.style.background = 'white';
})

mousup.addEventListener('mouseup',function(){
    mousup.style.height = "50px";
    mousup.style.background = "yellow";
} )

mousedown.addEventListener('mousedown',function(){
    mousedown.style.height = "50px";
    mousedown.style.background = "sandybrown";
} )


