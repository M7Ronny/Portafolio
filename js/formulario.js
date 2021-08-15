const $form = document.querySelector('#form')
const $botonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(){
    event.preventDefault()
    const form = new FormData(this)
    $botonMailto.setAttribute('href',`mailto:rrnnn200@gmail.com?subject=Nombre: ${form.get('name')} correo: ${form.get('email')}&body=Telefono: ${form.get('phone')} ${form.get('message')}`)
    $botonMailto.click()
}
