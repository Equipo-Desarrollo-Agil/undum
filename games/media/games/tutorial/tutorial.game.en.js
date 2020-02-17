// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
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
         ¿Quien soy?</i></p>\
        <p><a href='Escena5'>Esto es una perdida de tiempo lo dejo.</a></p>\
        <p><a href='Escena3'>Tal vez sea mi suegra.</a></p>\
        <p><a href='Escena2'>Podría ser un espejo.</a></p>"
  ),
      Escena2: new undum.SimpleSituation(
      "<h1>Despacho del detective</h1>\
      <img src='media/games/tutorial/despacho.png' width = 450 heigth = 225>\
      <p>Tras haber superado la prueba con éxito llego al despacho y me llega\
      una carta de una mujer llamada Robertina que tiene ligeras sospechas\
      de que la muerte de su marido no ha sido del todo resuelto.</p>\
      \
      <p>Al leer la carta, me doy cuenta que en la forma que me explica\
      Robertina la muerte de su marido, no me quedo del todo convencido y la <a href='Escena5'>acuso</a>,\
      ya que parece un tanto extraño la muerte del marido.</p>\
      \
      <p>Decido ir <a href='Escena4'>al lugar del asesinato</a> para ver\
      si allí encuentro pruebas específicas para seguir con la investigación.</p>\
      <p>Pero también creo que <a href='hablarconRobertina'>hablar con Robertina</a>, ya que\
      fue la última persona que vio a su marido con vida, para ver si le puede dar algunas pistas\
      que pueda resolver el crimen, ya que tampoco estoy muy seguro.</p>"
  ),
      Escena5: new undum.SimpleSituation(
        "<h1>La posible prueba engañosa</h1>\
        <img src='media/games/tutorial/espejo.png' width = 450 heigth = 225>\
        <p>Tras las sospechas de su extraña forma de ponerse en contacto contigo,\
        y su prueba inicial antes del caso asignado, te planteas si esta es una\
        pista del asesinato.¡El espejo!\
        ¿Y si sólo hiciera falta un espejo para que el caso fuera resuelto?\
        Al asesino siempre se le pasa por alto alguna prueba, y en este caso,\
        se había pasado por alto su reflejo. ¿Habría sido ella?\
        ¿Tendría Robertina alguna razón para asesinarlo?</p>\
        \
        <p><a href='EscenaFinal'>Sí, estoy seguro que tendría alguna razón</a> y que me quiso engañar\
        contratandome para este caso.</p>\
        \
        <p><a href='Escena4'>No, es imposible que fuera ella…</a>Debería seguir analizando el caso.</p>"
      ),
      Escena3: new undum.SimpleSituation(
        "<p>Al ver que sus dotes como detective privado no son buenos, ya que se equivocó\
        en la prueba de superación, Robertina decide <a href='start'>volver a hacerle la pregunta</a>\
        o <a href='EscenaFinal'>buscar otro detective privado.</a></p>"
      ),
      Escena4: new undum.SimpleSituation(
        "<h1>Escena del crimen</h1>\
        <img src='media/games/tutorial/lugarcrimen.jpeg' width = 450 heigth = 225>\
        <p>Llego al lugar del asesinato, empiezo a <a href='Escena7'>registrar</a> todo lo que encontraba\
        por la zona, ya que estaba llena de pruebas y me podía servir de gran ayuda\
        para resolver mi crimen perfecto. Aunque se me pasó por la cabeza que podía\
        <a href='Escena6'>preguntarle al barrendero</a> que siempre pasaba por la puerta del trabajo de la víctima,\
        para ver si había visto algo cuando sucedió el crimen.\
        Al no quedarme muy conforme decido <a href='Escena2'>volver al despacho</a> a volver a leer la carta.</p>"        "
      ),

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
 undum.game.qualities = {
 espejo: new undum.OnOffQuality(
         "Espejo", {priority:"0001", group:'objeto', onDisplay:"&#10003;"}
     )
 };
// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
 undum.game.qualityGroups = {
     objeto: new undum.QualityGroup('Objetos', {priority:"0001"})
 };

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.espejo=0;
    system.setCharacterText("<p>Vas a empezar un gran misterio.</p>");
};
