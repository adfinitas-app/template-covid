// const arrowElem = document.getElementById('arrow-down');
// const contentElem = document.getElementById('click-to-expand');
//
// arrowElem.addEventListener('click', function() {
//     this.classList.toggle('active');
//
//     if (contentElem.style.maxHeight && contentElem.style.maxHeight !== '0px') {
//         contentElem.style.maxHeight = '0px';
//     } else {
//         contentElem.style.maxHeight = '2000px';
//         contentElem.style.height = 'auto';
//     }
// })


var buttonFreeAmount = document.getElementById('button-free-amount');

buttonFreeAmount.addEventListener('click', function(e) {
    e.preventDefault()
    var form = document.getElementById("form-free-amount");
    var value = document.getElementById('inlineFormInputName2').value;

    form.setAttribute('target', form.getAttribute('target') + `$amount=${value}`);
    console.log(form.getAttribute('target'))
    window.open(form.getAttribute('target'), '_blank');
})

var buttonNewsletter = document.getElementById('button-newsletter');

buttonNewsletter.addEventListener('click', function(e) {
    e.preventDefault()
    var form = document.getElementById("form-newsletter");
    var input = document.getElementById('input-newsletter');
    input.classList.remove("red-border");

    if (validateEmail(input.value)) {
        var newsletterOk = document.getElementById('newsletter-ok');
        form.style.display = 'none';
        newsletterOk.style.display = 'block';
        sendData()
    }
    else
        input.classList.add("red-border");

})

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}