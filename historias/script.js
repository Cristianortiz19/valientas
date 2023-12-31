const menu = document.getElementById('menu-cont')


const anteriorBtn = document.getElementById('anterior-btn');
const siguienteBtn = document.getElementById('siguiente-btn');

// Historia Yury
const btnHistoriaYury = document.getElementById('btn-historia-yury');
const historiaYury = document.getElementById('historia-yury');
const audioVideoYury= document.getElementById('audio-animation-yury')
const animationVideoYury = document.getElementById('animation-yury');
const textVideoYury = document.getElementById('text-yury');
const loopHistoriaYury = document.getElementById('loop-yury')

let animacionesYury = [
    "./src/escena-yury1.gif",
    "./src/escena-yury2.gif",
    "./src/escena-yury3.gif",
    "./src/escena-yury4.gif",
    "./src/escena-yury5.gif",
    "./src/escena-yury6.gif",
    "./src/escena-yury7.gif",
    "./src/escena-yury8.gif",
    "./src/escena-yury9.gif",
    "./src/escena-yury10.gif",
]

let audiosYury = [
    "./src/audio-yury1.wav",
    "./src/audio-yury2.wav",
    "./src/audio-yury3.wav",
    "./src/audio-yury4.wav",
    "./src/audio-yury5.wav",
    "./src/audio-yury6.wav",
    "./src/audio-yury7.wav",
    "./src/audio-yury8.wav",
    "./src/audio-yury9.wav",
    "./src/audio-yury10.wav",
]

let textYury = [
    "Yo veía un chico enfrente de mi casa y me atraía mucho. En el colegio también me atraían varios.",
    "Me volé de mi casa porque no me aceptaban, sobre todo mi hermano mayor, él me hacía la vida imposible, y mi papá. Tenía 10 años",
    "Me fui a recorrer el departamento, estuve en Anserma, Sevilla; dormí en la calle, estuve presa, estuve en el hospital.",
    "La gente antes discriminaba a los trans, lo trataban mal a uno y le decían cochinadas, nos tiraban piedras.",
    "Después de cinco años me encontré a mi hermano mayor, que era dragoneante del batallón, en un prostíbulo… Mi hermano me quiso ver y él me abrazó y perdonó.",
    "Tenía ya unos 20 años, llegué a la casa de mi madre y pregunté por ella. Me recibieron mis hermanas y nadie me reconoció.",
    "Cuando llegó (su mamá) no me reconoció, me preguntó quién era. Estaba desesperada… le dije que era su hijo, nos abrazamos y lloramos ese día, junto con mi familia.",
    "Mi mamá me llevó donde unas estilistas amigas de ella. Las conocí y me recibieron muy bien. Ya me quedé trabajando allí como estilista.",
    "Cuando resulté con VIH para mi fue horrible, era como si me fuera a morir. No quería llegar a mi casa por el miedo al rechazo. Los reuní a todos y les dije que estaba enferma. ",
    "Todos mis hermanos me abrazaron y lloraron conmigo, no dejaron que me fuera de la casa. Tuve el apoyo de todos ellos."
]

// Historia Bicky
const btnHistoriaBicky= document.getElementById('btn-historia-bicky');
const historiaBicky = document.getElementById('historia-bicky');
const audioVideoBicky= document.getElementById('audio-animation-bicky')
const animationVideoBicky = document.getElementById('animation-bicky');
const textVideoBicky = document.getElementById('text-bicky');
const loopHistoriaBicky = document.getElementById('loop-bicky')

let animacionesBicky = [
    "./src/escena-bicky1.gif",
    "./src/escena-bicky2.gif",
    "./src/escena-bicky3.gif",
    "./src/escena-bicky4.gif",
    "./src/escena-bicky5.gif",
    "./src/escena-bicky6.gif",
    "./src/escena-bicky7.gif",
    "./src/escena-bicky8.gif",
    "./src/escena-bicky9.gif",
    "./src/escena-bicky10.gif",
]

let audiosBicky = [
    "./src/audio-bicky1.wav",
    "./src/audio-bicky2.wav",
    "./src/audio-bicky3.wav",
    "./src/audio-bicky4.wav",
    "./src/audio-bicky5.wav",
    "./src/audio-bicky6.wav",
    "./src/audio-bicky7.wav",
    "./src/audio-bicky8.wav",
    "./src/audio-bicky9.wav",
    "./src/audio-bicky10.wav",
]

let textBicky = [
    "Desde muy pequeña me sentí muy mujer.",
    "Ella (una amiga) lo que hizo fue contarle a gran parte del barrio que me gustaban los hombres, y eso desencadenó acoso y bullying por parte de la gente.",
    "Eso hizo que me alejara de la calle, yo no me la pasaba jugando con los otros chicos sino viendo televisión en mi casa y estudiando porque siempre me gustó el estudio",
    "Mi mamá me preguntaba (si me gustaban los hombres), yo tenía ocho años y no le decía lo que quería, siempre evadía. Yo le decía “hoy me fue bien en el colegio”.",
    "Cuando comencé a comprar mi ropa desde muy joven, empecé a mezclar ropa masculina y femenina. Luego comencé mi tránsito.",
    "Cuando uno se está reconociendo, uno se niega, hasta que uno se da cuenta que debe fluir.",
    "La aceptación social es demasiado importante. Lo primero es aceptarse a uno mismo. Debe darse una ruptura para que la respete a una su familia, hay que alejarse un poco.",
    "(Papá de Bicky) “Varios amigos me criticaron, me preguntaron si ella era hijo o hija, le dije que hija y que no me avergüenza eso”.",
    "Tener una nueva cédula es como volver a nacer. Es una alegría inexplicable.",
    "Ahora estamos trabajando en la consolidación de la ley integral trans para que todas nosotras podamos tener lo que nos han negado."
]

// Historia Maison
const btnHistoriaMaison= document.getElementById('btn-historia-maison');
const historiaMaison = document.getElementById('historia-maison');
const audioVideoMaison= document.getElementById('audio-animation-maison')
const animationVideoMaison = document.getElementById('animation-maison');
const textVideoMaison = document.getElementById('text-maison');
const loopHistoriaMaison = document.getElementById('loop-maison')

let animacionesMaison = [
    "./src/escena-maison1.gif",
    "./src/escena-maison2.gif",
    "./src/escena-maison3.gif",
    "./src/escena-maison4.gif",
    "./src/escena-maison5.gif",
    "./src/escena-maison6.gif",
    "./src/escena-maison7.gif",
    "./src/escena-maison8.gif",
    "./src/escena-maison9.gif",
    "./src/escena-maison10.gif",
]

let audiosMaison = [
    "./src/audio-maison1.wav",
    "./src/audio-maison2.wav",
    "./src/audio-maison3.wav",
    "./src/audio-maison4.wav",
    "./src/audio-maison5.wav",
    "./src/audio-maison6.wav",
    "./src/audio-maison7.wav",
    "./src/audio-maison8.wav",
    "./src/audio-maison9.wav",
    "./src/audio-maison10.wav",
]

let textMaison = [
    "(Mamá de Maison) “Le celebramos los 15 años en Palmira, yo le hice poner un vestido. Ella lloraba, decía que no quería un vestido. Entonces yo me lo puse, cuando me vio me dijo, “si te uno pones igual al mío, yo me lo pongo”. Lo hizo por complacerme, no porque le gustaba.",
    "Nunca me gustaron las muñecas, jugaba con carritos en la calle.",
    "Llamaron a mi madre del colegio porque nos habían separado en grupos de hombres y mujeres y yo no quería estar con las chicas. Por eso hice berrinche y lloré. Le dijeron (a mi madre) que su hija se cree niño y no lo es.",
    "Con la ropa no me sentía identificado. Me sentía incómodo, en una burbuja, como frustrado.",
    "Saliendo del colegio, unos pelaos me iban a golpear. Me dijeron que demuestre que era un hombre. Yo salí huyendo.",
    "(Mamá de Maison) Le preguntaba si eso era malo (las inyecciones), y leía que había personas que se le subían los nervios, se brotaban o se volvían depresivos.",
    "Al menos tuve a mi mamá de acompañamiento con mi proceso, no me imagino si no la tuviera.",
    "Vi que el lugar que nací y crecí no era el mismo. Ya había cambiado todo.",
    "Hago muchas cosas. Soy deportista, bailarín, me gusta el dibujo y las artes plásticas.",
    "Siempre nos acompañamos. Cuando estamos reunidos esperamos a que cada uno llegue a su casa seguro."
]

// Historia Alice
const btnHistoriaAlice= document.getElementById('btn-historia-alice');
const historiaAlice = document.getElementById('historia-alice');
const audioVideoAlice= document.getElementById('audio-animation-alice')
const animationVideoAlice = document.getElementById('animation-alice');
const textVideoAlice = document.getElementById('text-alice');
const loopHistoriaAlice = document.getElementById('loop-alice')

let animacionesAlice = [
    "./src/escena-alice1.gif",
    "./src/escena-alice2.gif",
    "./src/escena-alice3.gif",
    "./src/escena-alice4.gif",
    "./src/escena-alice5.gif",
    "./src/escena-alice6.gif",
    "./src/escena-alice7.gif",
    "./src/escena-alice8.gif",
    "./src/escena-alice9.gif",
    "./src/escena-alice10.gif",
]

let audiosAlice = [
    "./src/audio-alice1.wav",
    "./src/audio-alice2.wav",
    "./src/audio-alice3.wav",
    "./src/audio-alice4.wav",
    "./src/audio-alice5.wav",
    "./src/audio-alice6.wav",
    "./src/audio-alice7.wav",
    "./src/audio-alice8.wav",
    "./src/audio-alice9.wav",
    "./src/audio-alice10.wav",
]

let textAlice = [
    "Porque cuando nací, a los niños se les otorgan espíritus",
    "Ella cree (mi abuela) que yo tenía dos espíritus",
    "Me acuerdo más de mi abuela que de mi propio padre, a pesar de que ambos estén muertos",
    "Mi abuela y mi madre siempre resaltaron que tenía que estudiar mucho",
    "En el colegio Sinaí nunca tuve paz, siempre me molestaban, me decían que era gay, que era gorda, resaltaban que era fea",
    "Mi madre era una mujer que ha sido líder a donde quiera que vaya, entonces este liderazgo no era bien visto",
    "Mi madre tiene que irse, separarse por temas diferentes, yo me quedo sola, enfrentándome",
    "como yo decidí ser feliz entonces entró a campus diverso, de la Univalle",
    "Esta búsqueda es personal conmigo misma, y dentro de las comunidades indígenas, porque busqué un referente cuando empecé transición",
    "Alice, en cinco años, será una académica de geografía, estará enseñando sobre género y geografía trans, adueñándose del tema.",
]

// Historia Sofia
const btnHistoriaSofia= document.getElementById('btn-historia-sofia');
const historiaSofia = document.getElementById('historia-sofia');
const audioVideoSofia= document.getElementById('audio-animation-sofia')
const animationVideoSofia = document.getElementById('animation-sofia');
const textVideoSofia = document.getElementById('text-sofia');
const loopHistoriaSofia = document.getElementById('loop-sofia')

let animacionesSofia = [
    "./src/escena-sofia1.gif",
    "./src/escena-sofia2.gif",
    "./src/escena-sofia3.gif",
    "./src/escena-sofia4.gif",
    "./src/escena-sofia5.gif",
    "./src/escena-sofia6.gif",
    "./src/escena-sofia7.gif",
    "./src/escena-sofia8.gif",
    "./src/escena-sofia9.gif",
    "./src/escena-sofia10.gif",
]

let audiosSofia = [
    "./src/audio-sofia1.wav",
    "./src/audio-sofia2.wav",
    "./src/audio-sofia3.wav",
    "./src/audio-sofia4.wav",
    "./src/audio-sofia5.wav",
    "./src/audio-sofia6.wav",
    "./src/audio-sofia7.wav",
    "./src/audio-sofia8.wav",
    "./src/audio-sofia9.wav",
    "./src/audio-sofia10.wav",
]

let textSofia = [
    "Cuando me preguntaban que si me gustaban los hombres, yo les decía que sí… en el colegio, era yo misma, me sentía libre… pero en mi casa era otra persona, era el hombre que siempre habían querido.",
    "… desde pequeña yo usaba los vestidos de mi tía, me maquillaban, las flores me las ponía en la cabeza y decía que yo era una mujer… pero mi papá era bastante duro, me pegaba mucho.",
    "Con mi mamá sí fue algo muy bonito, porque ella me dijo: “tranquila, que yo la apoyaré”. Eso era un alivio para mí y estaba súper feliz.",
    "Al colegio me fui incluso con el cabello largo, con las extensiones, con las uñas, y en ese en ese momento me llamó la coordinadora y me dijo que “hiciera el favor de quitarse eso”.",
    "Una profesora que llegó me preguntó: ¿por qué estaba así?, me dijo que me fuera así, que no le diera el gusto. Súper contenta me fui con mi vestido rojo, con las extensiones, súper bonita",
    "Durante un año vi los cambios pero era como difícil porque te daba unos bajones horribles, como que te daba una depresión, o sea, a veces estaba feliz, y al rato, ya me daban ganas de llorar.",
    "Mi papá se enteró por unas fotos y por mi tía, no recuerdo bien. Me dijo un poco de cosas que la verdad me dolió bastante. Él cumple años el 24 de diciembre y falleció el 25, fue bastante duro para mí porque a pesar de todo iba a seguir siendo mi papá.",
    "Empecé a salir a las asambleas, ahí fue como que el boom porque era la primera trans indígena, o sea, me veían como un bicho raro.",
    "Una vez un mayor me dijo que yo tenía una enfermedad, que eso tenía cura: los baños y llevarme a bañar a la laguna; y llegó otro mayor y dijo eso es algo normal, eso es algo que se sabe desde hace muchísimo tiempo.",
    "En cinco años me veo realizando uno de mis sueños que es celebrar mis 15 cuando cumpla los 25 años, es algo que había querido celebrar. También quiero estudiar mi carrera profesional que sería idiomas o psicología.",
]

// Variables
let audioVideo;
let animationVideo;
let textVideo
let animaciones = [];
let audios = [];
let text = [];




// MENU
const btnHistoriaMaisonDavid = document.getElementById('btn-historia-maison-david');
const animationDisplay = document.getElementById('animations')


btnHistoriaYury.addEventListener('click', () => {
    animationVideo = animationVideoYury;
    audioVideo = audioVideoYury;
    textVideo = textVideoYury;
    animaciones = animacionesYury;
    audios = audiosYury;
    text = textYury;
    animationDisplay.style.display = 'block';
    menu.style.display = 'none';
    historiaYury.style.display = 'flex';
    audioVideo.play();
    loopHistoriaYury.play();
    loopHistoriaYury.volume = 0.4;
    console.log(textVideo)
})

btnHistoriaBicky.addEventListener('click', () => {
    animationVideo = animationVideoBicky;
    audioVideo = audioVideoBicky;
    textVideo = textVideoBicky;
    animaciones = animacionesBicky;
    audios = audiosBicky;
    text = textBicky;
    animationDisplay.style.display = 'block';
    menu.style.display = 'none';
    historiaBicky.style.display = 'flex';
    audioVideo.play();
    loopHistoriaBicky.play();
    loopHistoriaBicky.volume = 0.2;
    console.log(textVideo)
})

btnHistoriaMaison.addEventListener('click', () => {
    animationVideo = animationVideoMaison;
    audioVideo = audioVideoMaison;
    textVideo = textVideoMaison;
    animaciones = animacionesMaison;
    audios = audiosMaison;
    text = textMaison;
    animationDisplay.style.display = 'block';
    menu.style.display = 'none';
    historiaMaison.style.display = 'flex';
    audioVideo.play();
    loopHistoriaMaison.play();
    loopHistoriaMaison.volume = 0.4;
    console.log(textVideo)
})

btnHistoriaAlice.addEventListener('click', () => {
    animationVideo = animationVideoAlice;
    audioVideo = audioVideoAlice;
    textVideo = textVideoAlice;
    animaciones = animacionesAlice;
    audios = audiosAlice;
    text = textAlice;
    animationDisplay.style.display = 'block';
    menu.style.display = 'none';
    historiaAlice.style.display = 'flex';
    audioVideo.play();
    loopHistoriaAlice.play();
    loopHistoriaAlice.volume = 0.25;
    console.log(textVideo)
})

btnHistoriaSofia.addEventListener('click', () => {
    animationVideo = animationVideoSofia;
    audioVideo = audioVideoSofia;
    textVideo = textVideoSofia;
    animaciones = animacionesSofia;
    audios = audiosSofia;
    text = textSofia;
    animationDisplay.style.display = 'block';
    menu.style.display = 'none';
    historiaSofia.style.display = 'flex';
    audioVideo.play();
    loopHistoriaSofia.play();
    loopHistoriaSofia.volume = 0.2;
    console.log(textVideo)
})


let currentVideoIndex = 0;
let currentAudioIndex = 0;


function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1)  % animaciones.length;
    animationVideo.src = animaciones[currentVideoIndex];
    textVideo.textContent = text[currentVideoIndex]
}

function playNextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % audios.length;
    audioVideo.src = audios[currentAudioIndex];
    audioVideo.load();
    audioVideo.play();
}

function playPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1)  % animaciones.length;
    animationVideo.src = animaciones[currentVideoIndex];
    textVideo.textContent = text[currentVideoIndex]
}

function playPreviousAudio() {
    currentAudioIndex = (currentAudioIndex - 1) % audios.length;
    audioVideo.src = audios[currentAudioIndex];
    audioVideo.load();
    audioVideo.play();
}

anteriorBtn.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        playPreviousVideo();
        playPreviousAudio();
    }
    console.log(currentVideoIndex);
})

siguienteBtn.addEventListener('click', () => {
    if (currentVideoIndex < animaciones.length - 1) {
        playNextVideo();
        playNextAudio();
        console.log(currentVideoIndex);
    }
})

//regresar al menu 

let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    animationDisplay.style.display = 'none';
    audioVideo.pause();
    loopHistoriaYury.pause();
    loopHistoriaBicky.pause();
    loopHistoriaMaison.pause();
    loopHistoriaAlice.pause();
    loopHistoriaSofia.pause();
    console.log(animationVideo)
    animationVideo = null;
    historiaYury.style.display = 'none';
    historiaBicky.style.display = 'none';
    historiaMaison.style.display = 'none';
    historiaAlice.style.display = 'none';
    historiaSofia.style.display = 'none';
    audioVideo = null;
    animaciones = [];
    audios = [];
    text = [];
})

//botones de silencio

let muteMusicBtn = document.getElementById('mute-music');
let muteVoiceBtn = document.getElementById('mute-voice');

muteVoiceBtn.addEventListener('click', function () {
    if(audioVideo.volume === 0) {
        audioVideo.volume = 1;
    } else {
        audioVideo.volume = 0;
    }
})

muteMusicBtn.addEventListener('click', function () {
    if(loopHistoriaYury.volume === 0) {
        loopHistoriaYury.volume = 1;
    } else {
        loopHistoriaYury.volume = 0;
    }
    if(loopHistoriaBicky.volume === 0) {
        loopHistoriaBicky.volume = 1;
    } else {
        loopHistoriaBicky.volume = 0;
    }
    if(loopHistoriaMaison.volume === 0) {
        loopHistoriaMaison.volume = 1;
    } else {
        loopHistoriaMaison.volume = 0;
    }
    if(loopHistoriaAlice.volume === 0) {
        loopHistoriaAlice.volume = 1;
    } else {
        loopHistoriaAlice.volume = 0;
    }
    if(loopHistoriaSofia.volume === 0) {
        loopHistoriaSofia.volume = 1;
    } else {
        loopHistoriaSofia.volume = 0;
    }
})

//Animación intro


//creditos
let creditosBtn = document.getElementById('creditos-btn')
let creditos = document.getElementById('creditos');
let cerrarCreditos = document.getElementById('cerrar-creditos')

creditosBtn.addEventListener('click', () => {
    creditos.style.display = 'block';
})

cerrarCreditos.addEventListener('click', () => {
    creditos.style.display = 'none'
})
