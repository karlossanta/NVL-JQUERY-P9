//Seleccionamos el contenedor general
var container = $( "div#container" );
//Seleccionamos todos los 'div' que son hijos directos de éste
var divAnnos = container.children("div");
//A todos los hijos directos, les ponemos una clase igual a su id
for (i = 0; i < divAnnos.length; i++){
    divAnnos.eq(i).attr("class", divAnnos.eq(i).attr("id"));
}

//Seleccionamos el elemento con el id 'heroes'
var heroes = $("#heroes");
//Seleccionamos todos sus padres hasta el primer 'div'.
//Así almacenamos la década y el género
var padresHeroes = heroes.parentsUntil("#container");
//en la primera posición el género (al no tener id (y no poder ponérselo porque no es único) seleccionamos la clase)
var generoHeroes = padresHeroes.eq(0).attr("class")
//y en la segunda la década
var decadaHeroes = padresHeroes.eq(1).attr("id")
alert("Héroes del silencio es de la Década: " + decadaHeroes + " y del Género: " + generoHeroes);

var siguienteHijo = heroes;
while (siguienteHijo.next().length != 0) {
    //Seleccionamos el sigiente hijo
    siguienteHijo = siguienteHijo.next();
    //Y le ponemos como atributo el mismo contenido de la etiqueta (en minúsculas por convención)
    siguienteHijo.attr("id", siguienteHijo.text().toLowerCase());
}
 
//Comprobamos si existe un artista con el id queen
var queen = $(".internacional").find("#queen")
//si no existe
if (queen.length === 0) {
    //Creamos el artista Queen con el id queen
    queen = $("<p id=\"queen\">Queen</p>")
    //Y lo añadimos a la década de los ochenta en el género internacional
    var internacionalOchenta = $("#ochenta .internacional")
    internacionalOchenta.append(queen)
}