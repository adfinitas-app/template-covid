function sendData() {
    const email = document.getElementById('input-newsletter').value
    makeCorsRequest({email})
}


/*
 * Debut de la lib
 */

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }
    return xhr;
}
function makeCorsRequest(data) {
    var url = 'https://collector.calicut.adfinitas.io/ff5fb5da-5140-48a3-ac06-09ca7402db2a';
    var body = JSON.stringify(data);
    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
        alert('CORS not supported');
        return;
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(body);
}

/*
 * Fin de la lib
 */
function getUTM() {
    var p = extractUrlParams();

    if (p['utm_source'] && p['utm_source'] !== "undefined")
        return p['utm_source'];
    else
        return "";
}
function getReservedCodeMedia() {
    var p = extractUrlParams();

    if (p['reserved_code_media'] && p['reserved_code_media'] !== "undefined")
        return p['reserved_code_media'];
    else
        return "";
}
function getNPS() {
    if ($('#form .nps-form a.title').text().length <= 2 ) {
        return $('#form .nps-form a.title').text();
    }
    return "";
}
function getPhone() {
    return $('#f_phone').intlTelInput("getNumber");
}

function getPersonnalisationCourte(gender) {
    return getCivilityLong(gender).toUpperCase() + " " + pureField($('#f_lastname').val().toUpperCase());
}

function getPersonnalisation(gender) {
    return getCivilityDear(gender) + " " + getCivilityLong().toUpperCase() + " " + pureField($('#f_lastname').val().toUpperCase());
}

function getList() {
    var data = [];
    return data;
}

function pureField(string) {
    return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
}


function getOptin() {
    if ($('#f_optin').is(":checked")) {
        return "false";
    }
    return "true";
}

function getCivility(gender) {
    if (gender === 'F')
        return "Mme";
    else
        return 'M';
}

function getCivilityDear(gender) {
    if (gender === 'F')
        return "Chère";
    else
        return 'Cher';
}

function getCivilityLong(gender) {
    if (gender === 'F')
        return "Madame";
    else
        return 'Monsieur';
}
