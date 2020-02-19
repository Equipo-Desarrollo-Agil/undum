undum.game.situations = {

start: new undum.SimpleSituation(

"<h1>Despacho del detective</h1>\

<img src='media/games/tutorial/despacho.png' width = 450 heigth = 225>\

<p>Es una calurosa tarde de junio, estas revisando el correo cuando,\

de repente, te llega un nuevo email, en el que dice lo siguiente: </p>\

\

<p><i><b>Estimado detective, me llamo Robertina y me gustaría contratar\

sus servicios pero dado que soy una persona muy desconfiada, prefiero\

hacerle yo mismo una prueba para comprobar su gran destreza\

detectivesca antes de exponerle mi caso, y la pregunta es \

esta:</b></i></p>\

\

<p><i> No hablo ni oigo pero siempre digo la verdad,\

¿Quién soy?</i></p>\

<p><a href='escena3'>Esto es una pérdida de tiempo lo dejo.</a></p>\

<p><a href='escena3'>Tal vez sea mi suegra.</a></p>\

<p><a href='escena2'>Podría ser un espejo.</a></p>"

),

escena2: new undum.SimpleSituation(

"<h1>Despacho del detective</h1>\

<img src='media/games/tutorial/despacho.png' width = 450 heigth = 225>\

<p>Tras haber superado la prueba con éxito llego al despacho y me llega\

una carta de una mujer llamada Robertina que tiene ligeras sospechas\

de que la muerte de su marido Martín, no ha sido del todo resuelto.</p>\

\

<p>Al leer la carta, me doy cuenta que en la forma que me explica\

Robertina la muerte de su marido, no me quedo del todo convencido y la <a href='escena5'>acuso</a>,\

ya que parece un tanto extraño la muerte del marido.</p>\

\

<p>Decido ir <a href='escena4'>al lugar del asesinato</a> para ver\

si allí encuentro pruebas específicas para seguir con la investigación.</p>\

<p>Pero también creo que debería <a href='escena6'>hablar con los vecinos de la zona</a>, ya que\

podrían haber visto a su marido con vida, para ver si le pueden dar algunas pistas\

que pueda resolver el crimen, ya que tampoco estoy muy seguro.</p>"

),

escena3: new undum.SimpleSituation(

"<p>Al ver que sus dotes como detective privado no son buenos, ya que se equivocó\

en la prueba de superación, Robertina decide <a href='start'>volver a hacerle la pregunta</a>\

o <a href='escenafinal1'>buscar otro detective privado.</a></p>"

),

escena4: new undum.SimpleSituation(

"<h1>Escena del crimen</h1>\

<img src='media/games/tutorial/lugarcrimen.jpeg' width = 450 heigth = 225>\

<p>Llego al lugar del asesinato, empiezo a <a href='escena7'>registrar</a> todo lo que encontraba\

por la zona, ya que estaba llena de pruebas y me podía servir de gran ayuda\

para resolver mi crimen perfecto. Aunque se me pasó por la cabeza que podía\

<a href='escena6'>preguntarle al barrendero</a> que siempre pasaba por la puerta del trabajo de la víctima,\

para ver si había visto algo cuando sucedió el crimen.\

Al no quedarme muy conforme decido <a href='escena2'>volver al despacho</a> a volver a leer la carta.</p>"

),

escena5: new undum.SimpleSituation(

"<h1>La posible prueba engañosa</h1>\

<img src='media/games/tutorial/espejo.png' width = 450 heigth = 225>\

<p>Tras las sospechas de su extraña forma de ponerse en contacto contigo,\

y su prueba inicial antes del caso asignado, te planteas si esta es una\

pista del asesinato. ¡El <a href='./eso' class='once'>espejo</a>!,\

¿Y si sólo hiciera falta un espejo para que el caso fuera resuelto?\

Al asesino siempre se le pasa por alto alguna prueba, y en este caso,\

se había pasado por alto su reflejo. ¿Habría sido ella?\

¿Tendría Robertina alguna razón para asesinarlo?</p>\

\

<p><a href='escenafinal2'>Sí, estoy seguro que tendría alguna razón</a> y que me quiso engañar\

contratándome para este caso.</p>\

\

<p>No, es imposible que fuera ella…<a href='escena4'>Debería seguir analizando el caso.</a></p>",

{

actions:{

"eso": function(character, system, to) {

system.setQuality("espejo", 1);

system.setCharacterText("<p>Exacto, el espejo es una pista.</p>");

}

},

exit: function(character, system, to) {

system.setQuality("espejo", character.qualities.espejo);

}

}

),



escena6: new undum.SimpleSituation(

"<h1>El parque</h1>\

<img src='media/games/tutorial/parque.png' width = 450 heigth = 225>\

<p>Llevas un par de horas esperando a que pase alguien, cuando decides preguntarle\

al dueño del local de al lado. Este te cuenta que al barrendero le cambiaron la zona que hace un par\

de días y que le han destinado al parque un par de calles más para arriba, enfrente de la iglesia, \

justo unos días después de que se cometiera el crimen. Por lo que le das las gracias al hombre,\

y te diriges al parque. \

Una vez en el parque no te resulta difícil encontrarlo, estaba en la entrada bebiendo agua Lanjaron, es un\

hombre de edad avanzada llevaba un gorra y unas gafas de sol. Al acertarte se percató de\

que ibas en su busca y te sorprende con un:</p>\

\

<p><i><b>- ¡Qué buena tarde hace hoy! ¿Verdad señor?</b></i></p>\

<p><i><b>+ Sí, hace un lindo día. Soy el señor López, me\

dijeron que conocía al señor Martín, es eso cierto ¿no?</b></i></p>\

<p><i><b>- ¡Claro! Solíamos ir a desayunar juntos de vez en cuando…\

Era un gran hombre… </b></i></p>\

<p><i><b>+ Tenían una relación estrecha por lo que veo. </b></i></p>\

<p><i><b>- Bueno, eran muchos años ya barriendo la puerta de su casa.</b></i></p>\

<p><i><b>+ La familia está destrozada no pueden creer lo que ha pasado… En fin\

quería hablar con usted por si ese día vio algo sospechoso.</b></i></p>\

<p><i><b>- La verdad, es que con esta edad no recuerdo muy bien nada, pero\

ese día fue un día\ normal como otro cualquiera. Me lo encontré recogiendo\

el periódico sobre las 7 a.m. más tarde me enteré de lo ocurrido…</b></i></p>\

<p><i><b>+ ¿No lo viste después de las 7 a.m.? </b></i></p>\

<p><i><b>- No, ese día acabé pronto mi turno. </b></i></p>\

<p><i><b>+ Qué casualidad ¿no? ¿Seguro que no le vio? </b></i></p>\

<p><i><b>- Sí - dijo abrumado. </b></i></p>\

\

\

<p>--------------------------------------------------------------</p>\

<p>Decide cómo quieres seguir:</p>\

<p><a href='escenafinal2'>Quieres acusar al basurero.</a></p>\

<p><a href='escena4'>Seguir investigando.</a></p>"

),



escena7: new undum.SimpleSituation(

"<h1>Alrededores de la escena del crimen</h1>\

<img src='media/games/tutorial/detective.png' width = 450 heigth = 225>\

<p>Decides registrar la zona, miras detrás de la casa y te encuentras una <a href='./bici' class='once'> bici</a>\

tirada en el suelo, está totalmente destrozada. Sin darle importancia,\

decides ir un poco más cerca de la entrada trasera\

de la casa, te encuentras unos <a href='./guantes' class='once'> guantes </a>un poco sucios\

y al lado una <a href='./botella' class='once'> botella de agua </a> Lanjaron vacía y arrugada.\

Quizás no has encontrado nada, que te ayude en la investigación, será mejor\

<a href='escena6'>preguntarle a alguien de la zona.</a></p>",

{

actions:{

"bici": function(character, system, to) {

system.setQuality("bici", 1);

system.setCharacterText("<p>Exacto, la bici es una pista.</p>");

},

"guantes": function(character, system, to) {

system.setQuality("guantes", 1);

system.setCharacterText("<p>Exacto, los guantes son una pista.</p>");

},

"botella": function(character, system, to) {

system.setQuality("botella", 1);

system.setCharacterText("<p>Exacto, la botella de agua es una pista.</p>");

},

},

exit: function(character, system, to) {

system.setQuality("bici", character.qualities.bici);

system.setQuality("guantes", character.qualities.guantes);

system.setQuality("botella", character.qualities.botella);



}

}

),



escenafinal1: new undum.SimpleSituation(

"<h1>Gracias por la colaboración</h1>\

<p> El caso pasa a estar bajo el mando de la policía.</p>\

<h1>FIN</h1>"

),



escenafinal2: new undum.SimpleSituation(

"<h1>Caso cerrado</h1>\

<p> El caso está cerrado el asesino se encuentra en custodia\

de la policía.</p>\

<h1>FIN</h1>"

),



};





// ---------------------------------------------------------------------------

/* The Id of the starting situation. */

undum.game.start = "start";



// ---------------------------------------------------------------------------

/* The qualities are displayed in groups in the character bar. This

* determines the groups, their heading (which can be null for no

* heading) and ordering. QualityDefinitions without a group appear at

* the end. It is an error to have a quality definition belong to a

* non-existent group. */

undum.game.qualities = {



espejo: new undum.OnOffQuality(

"Espejo", {priority:"0002", group:'progress', onDisplay:"&#10003;"}

),

bici: new undum.OnOffQuality(

"Bici", {priority:"0003", group:'progress', onDisplay:"&#10003;"}

),

guantes: new undum.OnOffQuality(

"Guantes", {priority:"0004", group:'progress', onDisplay:"&#10003;"}

),

botella: new undum.OnOffQuality(

"Botella de agua", {priority:"0005", group:'progress', onDisplay:"&#10003;"}

)





};



// ---------------------------------------------------------------------------

/* Here we define all the qualities that our characters could

* possess. We don't have to be exhaustive, but if we miss one out then

* that quality will never show up in the character bar in the UI. */

undum.game.qualityGroups = {

progress: new undum.QualityGroup('Progress', {priority:"0002"})

};



// ---------------------------------------------------------------------------

/* This function gets run before the game begins. It is normally used

* to configure the character at the start of play. */

undum.game.init = function(character, system) {

character.qualities.espejo = 0;

character.qualities.bici=0;

character.qualities.guantes = 0;

character.qualities.botella=0;

system.setCharacterText("<p>Vas a empezar un gran misterio,\

encuentra todas las pistas.</p>");

};
