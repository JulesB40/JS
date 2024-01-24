let i = 1;
let contenu = "";

function fizzBuzz(){
    for(i=1; i<=100; i++){
        contenu += (i%3 == 0) ? "fizz" : "";
        contenu += (i%5 == 0) ? " buzz" : "";
        contenu += (contenu == "") ? i : "";
        classe = contenu + " col"
        $("#contenu").append("<div class='"+classe+"'>"+contenu+"</div>");
        contenu = "";
    }
}
