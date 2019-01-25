
defaultLink = document.getElementById('default-view');
visionLink = document.getElementById('vision-link');
copyLink = document.getElementById('copywriting-link');
websuunnitteluLink = document.getElementById('websuunnittelu-link');
yhteysLink = document.getElementById('yhteys-link');
headerText = document.getElementById('header');
header2Text = document.getElementById('header2');
asiaText = document.getElementById('teksti');
boxi = document.getElementsByClassName('boxed');
logokuva = document.getElementById('logokuva');


visionClicked = 0;
copyClicked = 0;
websuunnitteluClicked = 0;
yhteysClicked = 0; 
boxi_visible = 0;


function hide_boxi() {
    headerText.innerHTML = "";
    asiaText.innerText = "";
    boxi[0].style.visibility = "hidden";
    visionClicked = 0;
    copyClicked = 0;
    websuunnitteluClicked = 0;
    yhteysClicked = 0;
    boxi_visible = 0; 
}



defaultLink.addEventListener('click', function() {
    hide_boxi();
});


function unfade(boxi) {
    var op = 0.1;  // initial opacity
    boxi[0].style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        boxi[0].style.opacity = op;
        boxi[0].style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 25);
}

function show_boxi() {
    boxi[0].style.opacity = 0;
    boxi[0].style.visibility = "visible";
    boxi_visible = 1;
    unfade(boxi);
}

function hyperlinks() {
    var str1 = "LinkedIn";
    var str2 = "Github";
    var result1 = str1.link("https://www.linkedin.com/in/riku-vakkuri-750b7b136/");
    var result2 = str2.link("https://www.github.com/rixutti");
    asiaText.innerHTML = "<br>\xa0\xa0riksu.email@gmail.com<br><br>\xa0\xa0" + result1 + "<br><br>\xa0\xa0" + result2 + "<br>";
  }


visionLink.addEventListener('click', function() {
    
    if (visionClicked == 0) {
        hide_boxi();
        visionClicked = 1;
        headerText.innerHTML = "<b>\xa0\xa0\xa0\xa0\xa0\xa0Miten kasvatan myyntiäni?</b>";
        header2Text.innerHTML = "";

        asiaText.innerText = "Asiakkaat tekevät ostopäätöksensä tunteella ja perustelevat ne järjellä. Tämän pääsäännön avulla teen tuotteistasi houkuttelevia, jotta niiden ostaminen tuntuu oikealta. Lumoavan mainostekstin ansiosta ostopäätöksestä tulee mieluinen ajatus, asiakkaan oma valinta.\n\nMyyntisi on suoraan verrannollista siihen, kuinka hyvin ymmärrät kohderyhmäsi haluja ja tarpeita. Asiakkaan tulee olla ylpeä ostoksestaan katumatta sitä jälkeenpäin.\n\nTarjoan iskulauseita alkaen 0.50 EUR / sana.\n\n"

        setTimeout(function() {
            //your code to be executed after a delay
        }, 1000);

        show_boxi();
    }
    else {
        return;
    }
});


copyLink.addEventListener('click', function() {
    
    if (copyClicked == 0) {
        hide_boxi();
        copyClicked = 1;
        headerText.innerHTML = "";
        header2Text.innerHTML = "<b>\xa0\xa0\xa0\xa0\xa0\xa0Copywriting-palveluni, valitse näistä juuri sinulle sopiva vaihtoehto:</b>";

        asiaText.innerText = "\nYksinkertainen copy\n\nTuotteen ominaisuudet selitetään suoraan eli mennään suoraan asiaan. Tämä vaihtoehto sopii yksinkertaisille tuotteille, joiden markkinointi ei vaadi juuri mielikuvitusta. Tuote kuvaillaan ja kerrotaan mitä tuotteella voi tehdä. ”Sitä saa mitä tilaa”\n\n\nKerronnallinen copy\n\nTuotteen ympärille luodaan tarina, jolla tuotetta on tarkoitus myydä. Tämä on toimiva keino, jolla saadaan asiakkaalle tunne tuotteen ainutlaatuisuudesta.\n\n\nHenkilökohtainen copy\n\nAsiakasta puhutellaan henkilökohtaisesti, ikäänkuin hänelle myytäisiin tuotetta kasvokkain. Tämä luo yksillöllisyyden tunteen, mikä kasvattaa luottamusta asiakassuhteessa.\n\n\nLiioitteleva copy\n\nTuotetta hehkutetaan maasta taivaaseen hieman jopa liioittelemalla. Tavoitteena on saavuttaa innostusta, ihailua, ja kunnioitusta. Tämä on hyvä vaihtoehto uusille, innovatiivisille tuotteille. ”Wow-efekti” on tehokas keino, jolla asiakas saa hyvän syyn tehdä nopean ostopäätöksen.\n\n"

        setTimeout(function() {
            //your code to be executed after a delay
        }, 1000);

        show_boxi();
    }
    else {
        return;
    }
});


websuunnitteluLink.addEventListener('click', function() {
    
    if (websuunnitteluClicked == 0) {
        hide_boxi();
        websuunnitteluClicked = 1;
        headerText.innerHTML = "<b>\xa0\xa0\xa0\xa0\xa0\xa0WEB-SUUNNITTELU</b>";
        header2Text.innerHTML = "";

        asiaText.innerText = "Toteutan käyttäjäystävällisiä web-sovelluksia, eli UX Designer / Front End Developer kehitystyötä. Monimutkaisemmat ohjelmistoprojektit sopimuksen mukaan.\n\nKäyttämiäni teknologioita ovat mm. JavaScript, Node.js, HTML, CSS ja Python.\n\nSinun tulee vain miettiä, millaiselta sovelluksen ulkoasu voisi näyttää ja miten siinä navigoidaan. Voit myös antaa minulle vapaat kädet projektin toteutuksessa!"

        setTimeout(function() {
            //your code to be executed after a delay
        }, 1000);

        show_boxi();
    }
    else {
        return;
    }
});


yhteysLink.addEventListener('click', function() {
    
    if (yhteysClicked == 0) {
        hide_boxi();
        yhteysClicked = 1;
        headerText.innerHTML = "<b>\xa0\xa0\xa0\xa0\xa0\xa0Yhteystiedot</b>";
        header2Text.innerHTML = "";

        hyperlinks();

        setTimeout(function() {
            //your code to be executed after a delay
        }, 1000);

        show_boxi();
    }
    else {
        return;
    }
});



function hover(logokuva) {
    logokuva.setAttribute('src', 'logo2.png');
  }
  
  function unhover(logokuva) {
    logokuva.setAttribute('src', 'logo.png');
  }

