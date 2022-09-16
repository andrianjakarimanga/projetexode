/* const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
 */


var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('shown.bs.modal', function (event) {
    let contentModal = document.getElementById('modal-body');
    contentModal.innerHTML = '<object width="1576" height="890" type="text/html" data="rightSide.html" ></object>';
})