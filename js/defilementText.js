// DEFIL TEXTE HORIZONTAL

var Timer1 ;
var Vitesse1 = 20 ;
var Scroll1 = 0 ;
var P1 = 0 ;
var Intro1 = true ;
var Boucle1 = false ;
// Texte1 peut être renseigné par une variable php
// var Texte1 = 'Developpeur fullstack - Developpeur mobile - integrateur web - administrateur systeme' ;
// La séparation entre chaque texte
var Contenu1 = document.getElementById("contenu1") ;
var Texte1 = Contenu1.textContent + ' ... ' ;
Contenu1.innerHTML = Texte1 ;
var LargC = Contenu1.clientWidth ;
var Defil1 = document.getElementById("defil1") ;
var LargD = Defil1.clientWidth ;
Contenu1.style.left = LargD + "px" ;

function Defile1()
{
    while ( LargC <= LargD )
    {
        Texte1 += Texte1 ;
        Contenu1.innerHTML += Texte1 ;
        LargC = Contenu1.clientWidth ;
    }
    if ( P1 == 0 )
    {
        Contenu1.innerHTML += Texte1 ;
        P1 = 1 ;
    }
    Scroll1++ ;
    if ( Intro1 == true && Scroll1 == LargD )
    {
        Scroll1 = 0 ;
        Contenu1.style.left = 0 + 'px' ;
        Intro1 = false ;
        Boucle1 = true ;
    }
    if ( Boucle1 == true && Scroll1 == LargC-10 ) // -10 compense le padding de 5px du div contenu1
    {
        Scroll1 = 0 ;
        Contenu1.style.left = 0 + 'px' ;
    }
    Contenu1.style.left = ( Contenu1.offsetLeft - 1 ) + 'px' ;
    Timer1 = setTimeout('Defile1()', Vitesse1) ;
}

function Pause1()
{
    clearTimeout(Timer1) ;
}

//envoie email

