let  ham = document.querySelector('.ham')
let cover = document.querySelector('.cover')
//   show-cover
ham.addEventListener('click',e=>{
    e.preventDefault()
    let img = this.document.querySelector('.hamImage')
    e.target.classList.toggle('ham-close-pic')
    cover.classList.toggle('show-cover')
})