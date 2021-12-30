//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
//  ------------------------------------WORKING PHOTO GAME!!---------------------------------------
//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------

let thegame = 0;
let count = 0;
function checkButton() {
    if (thegame < 3) {
        let first = document.getElementById("first");
        if (document.getElementById('teacher').checked) {
            count++;
            if (thegame == 0) {
                document.getElementById('messagethis').className = "showmessagewrong";
                document.getElementById('messagethis').innerHTML = "NO, IT'S NOT THAT.. TRY AGAIN..."
                //window.alert("NO, IT'S NOT THAT.. TRY AGAIN...")
            }
            if (thegame == 1) {
                document.getElementById('messagethis').className = "showmessagewrong";
                document.getElementById('messagethis').innerHTML = "false mr/mrs/lady/dr/proffesor/boy/girl.... try again"
               // window.alert("false mr/mrs/lady/dr/proffesor/boy/girl.... try again")
            }
            if (thegame == 2) {
                document.getElementById('messagethis').className = "showmessage";
                document.getElementById('messagethis').innerHTML = "niceeeee, you finished the game"
                thegame++;
                //window.alert("niceeeee, you finished the game");
                results();
            }
        } else if (document.getElementById('mcdon').checked) {
            count++;
            if (thegame == 0) {
                document.getElementById('messagethis').className = "showmessagewrong";
                document.getElementById('messagethis').innerHTML = "No No No, Try Again please."
                //window.alert("HOW CAN YOU BE WRONBG??!?!?! TRY AGAIN")
            }

            if (thegame == 2) {
                document.getElementById('messagethis').className = "showmessagewrong";
                document.getElementById('messagethis').innerHTML = "NO, IT'S NOT THAT.. TRY AGAIN..."
                //window.alert("NoNoNo you are not correct");
            }
            if (thegame == 1) {
                document.getElementById('messagethis').className = "showmessage";
                document.getElementById('messagethis').innerHTML = "Nice you got it right"

                //window.alert("Nice you got it right");
                thegame++;
                secondphoto()
            }
        } else if (document.getElementById('camp').checked) {
            count++;
            if (thegame == 0) {
                document.getElementById('messagethis').className = "showmessage";
                document.getElementById('messagethis').innerHTML = "Nice you got it right"
                thegame++;
                //window.alert("Nice you got it right")
                firstphoto();
            } else {
                document.getElementById('messagethis').className = "showmessagewrong";
                document.getElementById('messagethis').innerHTML = "false mr/mrs/lady/dr/proffesor... try again"
                //window.alert("false mr/mrs/lady/dr/proffesor... try again")
            }

        }
    }
    else{
        document.getElementById('restart').className = "showrestart";
        document.getElementById('messagethis').className = "hidemessage"
            document.getElementById('restart').innerHTML = "Restart the game if you want to play again"
    }
}


function firstphoto() {
    document.getElementById("first").src = "photos/delivery.jpg";
    document.getElementById("first123").innerHTML="Garbage man";
    document.getElementById("second123").innerHTML="Delivery man";
    document.getElementById("third123").innerHTML="Stupid man";

}

function secondphoto(){
    document.getElementById("first").src = "photos/escape-room.jfif";
    document.getElementById("first123").innerHTML="Escape-room operator";
    document.getElementById("second123").innerHTML="Human-being"
    document.getElementById("third123").innerHTML="Architect";

}

function results() {
    document.getElementById("first").src = "photos/winning.jfif";

    document.getElementById('textfinish').className = "showmessage";
    let mistakes = count - thegame;
    if (mistakes == 0) {
        document.getElementById('textfinish').innerHTML = "AMAZING JOB, you had 0 mistakes";
    }
    if (mistakes > 0 && mistakes < 3){
        document.getElementById('textfinish').innerHTML = "Nice job you had " + mistakes + " mistakes";
    }
    if(mistakes > 2){
        document.getElementById('textfinish').innerHTML = "You are a loser, on this simple game you had "
            + mistakes + " mistakes, try to find yourself a different occupation";
    }
    document.getElementById("first123").innerHTML="???????";
    document.getElementById("second123").innerHTML="???????"
    document.getElementById("third123").innerHTML="???????";
    document.getElementById('restartbtn').className = "show";
    document.getElementById('overview1').className = "show";
    document.getElementById('overview2').className = "show";
    document.getElementById('overview3').className = "show";

}
function restart(){
    thegame = 0;
    count = 0;
    document.getElementById("first").src = "photos/camp-teacher.jfif";
    document.getElementById('textfinish').className = "hide";
    document.getElementById('restart').className = "hide";
    document.getElementById('restartbtn').className = "hide";
    document.getElementById("first123").innerHTML="Teacher";
    document.getElementById("second123").innerHTML="Mcdonald's worker";
    document.getElementById("third123").innerHTML="Camping associate";
    document.getElementById('overview1').className = "hide";
    document.getElementById('overview2').className = "hide";
    document.getElementById('overview3').className = "hide";
    document.getElementById('messagethis').className = "hidemessage";
}

//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
//  ----------------------------------- E-MAIL OPENER FUNCTION ------------------------------------
//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
function sendme() {
    let subjectname = document.getElementById("subjectname").value;
    let messagebox = document.getElementById("messageinside").value;
    let mail = "mailto:jonathan.kandel@post.idc.ac.il?subject=" + subjectname + "&body=" + messagebox;
    window.open(mail);
}


//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
//  -------------------------------------  TOP BUTTON FUNCTION  -----------------------------------
//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        showDivs(1);
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
//  ----------------------------------- CHANGING TRIP PHOTOS --------------------------------------
//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------


let si = 1;
showDivs(si);

function plusDivs(n) {
    showDivs(si += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("trip");
    if (n > x.length) {si = 1}
    if (n < 1) {si = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[si-1].style.display = "block";
}