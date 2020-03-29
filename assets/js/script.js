$(document).ready(() => {
    fillLink()

    $(document).on('focus', 'input, textarea', function()
    {
        $('.btn-don-fixed-mobile').hide();
    });

    $(document).on('blur', 'input, textarea', function()
    {
        $('.btn-don-fixed-mobile').show();
    });

    $('#input-newsletter-mobile').focus(() =>
    {
        $('#form-newsletter-mobile').css({'position':'fixed','bottom':'10px', 'left': '50%', 'transform': 'translateX(-50%)'});
    });
    $('#input-newsletter-mobile').blur(() =>
    {
        $('#form-newsletter-mobile').css({'position':'static', 'transform': 'none'});
    });

})

var buttonFreeAmount = document.getElementById('button-free-amount');

buttonFreeAmount.addEventListener('click', function(e) {
    e.preventDefault()
    var form = document.getElementById("form-free-amount");
    var value = document.getElementById('inlineFormInputName2').value;

    form.setAttribute('target', form.getAttribute('target') + `&amount=${value}00`);
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

var buttonNewsletterMobile = document.getElementById('button-newsletter-mobile');

buttonNewsletterMobile.addEventListener('click', function(e) {
    e.preventDefault()
    var form = document.getElementById("form-newsletter-mobile");
    var input = document.getElementById('input-newsletter-mobile');
    input.classList.remove("red-border");

    if (validateEmail(input.value)) {
        var newsletterOk = document.getElementById('newsletter-ok-mobile');
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

function fillLink() {
    let p = extractUrlParams();
    let string = ''

    let code_media = "";

    if (p['reserved_code_media'] && p['reserved_code_media'] !== "undefined") {
        code_media = p['reserved_code_media'];
    }
    else {
        code_media = 'W20P80ZZL'
    }


    if (p['email'] && p['email'] !== "undefined")
        string += ("&email=" + p['email']);
    if (p['wv_email'] && p['wv_email'] !== "undefined")
        string += ("&email=" + p['wv_email']);
    if (p['wv_firstname'] && p['wv_firstname'] !== "undefined")
        string += ("&firstname=" + p['wv_firstname']);
    if (p['firstname'] && p['firstname'] !== "undefined")
        string += ("&firstname=" + p['firstname']);
    if (p['wv_lastname'] && p['wv_lastname'] !== "undefined")
        string += ("&lastname=" + p['wv_lastname']);
    if (p['lastname'] && p['lastname'] !== "undefined")
        string += ("&lastname=" + p['lastname']);
    string += `&reserved_code_media=${code_media}`;


    $('.link-don').each((el) => {
        $('.link-don').eq(el).attr('href', $('.link-don').eq(el).attr('href') + string);
    })

}

function extractUrlParams(){
    var t = document.location.search.substring(1).split('&'); var f = [];
    for (var i=0; i<t.length; i++){
        var x = t[ i ].split('=');
        f[x[0]]=decodeURIComponent(x[1]);
    }
    return f;
};
