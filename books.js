//clicar em um item e ele ficar selecionado ignorando os outros

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item) =>
    item.classList.remove('ativo')
)
    this.classList.add('ativo')
}
    menuItem.forEach((item) =>
    item.addEventListener('click', selectLink))

//expandir o menu lateral
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu_lateral')

btnExp.addEventListener('click' , function(){ 
    menuSide.classList.toggle('expandir')
})