//Seleccionamos el contenedor general
var container = $( "div#container" );
//Seleccionamos todos los 'div' que son hijos directos de éste
var divAnnos = container.children("div");
//A todos los hijos directos, les ponemos una clase igual a su id
for (i = 0; i < divAnnos.length; i++){
    divAnnos.eq(i).attr("class", divAnnos.eq(i).attr("id"));
}

var heroes = $("#heroes");
var padresHeroes = heroes.parentsUntil("#container");
var generoHeroes = padresHeroes.eq(0).attr("class")
var decadaHeroes = padresHeroes.eq(1).attr("id")
alert("Héroes del silencio es de la Década: " + decadaHeroes + " y del Género: " + generoHeroes);

var siguienteHijo = heroes;
while (siguienteHijo.next().length != 0) {
    siguienteHijo = siguienteHijo.next();
    siguienteHijo.attr("id", siguienteHijo.text().toLowerCase());
}
 
var queen = $(".internacional").find("queen")

if (queen.length === 0) {
    queen = $("<p id=\"queen\">Queen</p>")
    var internacionalOchenta = $("#ochenta .internacional")
    internacionalOchenta.append(queen)
}
console.log(internacionalOchenta)