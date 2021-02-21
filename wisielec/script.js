let haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

let hasloWykreskowane = "";

let len = haslo.length;

let ileSkuch = 0;

let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

for(let i=0; i<len; i++)
{
    if(haslo.charAt(i) == " ")
    {
        hasloWykreskowane = hasloWykreskowane + " ";
    }
    else
    {
        hasloWykreskowane = hasloWykreskowane + "-"
    }
}

function wypiszHaslo()
{
    document.getElementById("plansza").innerHTML = hasloWykreskowane;
}

window.onload = start;

let litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start()
{
    let tresc = "";

    for (let i=0; i<35; i++)
    {
        let el = "lit" + i;
        tresc = tresc + '<div class="litera" onclick="sprawdz('+i+')" id="'+el+'">'+litery[i]+'</div>'
        if((i+1) % 7 == 0)
        {
            tresc = tresc + '<div style="clear:both;"></div>'
        }
    }

    document.getElementById("alfabet").innerHTML = tresc;

    wypiszHaslo();
}

String.prototype.ustawZnak = function (pozycja, znak)
{
    if(pozycja > this.length-1)
    {
        return this.toString();
    }
    else
    {
        return this.substr(0, pozycja) + znak + this.substr(pozycja+1);
    }
}


function sprawdz(nr)
{
    let traf = false;

    for (let i=0; i<len; i++)
    {
        if(haslo.charAt(i) == litery[nr])
        {
            hasloWykreskowane = hasloWykreskowane.ustawZnak(i, litery[nr]);
            traf = true;
        }
    }

    if(traf == true)
    {
        yes.play();
        let el = "lit" + nr;
        document.getElementById(el).style.backgroundColor = "#003300";
        document.getElementById(el).style.color = "#00c000";
        document.getElementById(el).style.border = "3px solid #00c000";
        document.getElementById(el).style.cursor = "default";

        wypiszHaslo();
    }
    else {
        no.play();
        let el = "lit" + nr;
        document.getElementById(el).style.backgroundColor = "#330000";
        document.getElementById(el).style.color = "#c00000";
        document.getElementById(el).style.border = "3px solid #c00000";
        document.getElementById(el).style.cursor = "default";
        document.getElementById(el).setAttribute("onclick", ";");

        //skucha
        ileSkuch++;
        let obraz = "img/s" + ileSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="" />';
    }

        //wygrana
        if(haslo == hasloWykreskowane)
        {
            document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }

        //przegrana
        if(ileSkuch>=9)
        {
            document.getElementById("alfabet").innerHTML  = "Przegrana... Hasło brzmiało: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
        }
}