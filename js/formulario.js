const $form = document.querySelector('#form')
const $botonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(){
    event.preventDefault()
    const form = new FormData(this)
    $botonMailto.setAttribute('href',`mailto:rrnnn200@gmail.com?subject=${form.get('name')}${form.get('email')}$body=${form.get('message')}`)
    $botonMailto.click()
}
