var aText = new Array(
    " Hi! I'm Kankan Gain a student of BCA in Techno India College of Technology. Currently I'm completing my 2nd year. I have some interest in gfx, vfx and animation. I also know some fundamental of Cyber Security."
);
var iSpeed = 80;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();



var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
var cursor3 = document.querySelector(".cursor3");
var cursor4 = document.querySelector(".cursor4");
var cursor5 = document.querySelector(".cursor5");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = cursor3.style.cssText = cursor4.style.cssText = cursor5.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



