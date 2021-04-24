/* import GenerateElements from './GenerateElements'; */

const myListSong ={
    metal:{
        metallica:
         ["The Four Horseman", "Dream No More",
            "Orion", "Whiskey in the Jar"
        ]
        , 
        disturbed:
            ["Down With the Sickness", "Decadence",
                "The Vengeful One" ,"Stricken"
        ]
        ,
        rammstein:[
            "Puppe","Mein Teil",
            "Bestrafe Mich","Wollt Ihr Das Bett In Flammen Sehen"
        ]
        ,
        timeTearsDown:[
            "Time Tears Down","Chaos Inside",
            "Function Or Perish", "Pulse of Dead"
        ]


    },
    norteño:{
        "Cardenales de Nuevo Leon":[
            "Que No Daria","10 Mi Complice",
            "De Norte A sur", "Belleza de Cantina"
         ],
         "Invasores de Nuevo Leon":[
             "Imaginación","Moneda sin valor",
             "Para ti mi amor", "Qué caso tiene"
 
         ],
         "Poder del Norte":[
             "A ella", "Per me perdonas",
             "Ni que valieras tanto", "Ultimas noticias"
         ],
         "Pesado":[
             "Mi promesa","Dile",
             "Mi primer amor v:","Ojala que te mueras v:"
         ]
 
 
     },
     "Romantic Ballad":{
         Emmanuel:[
             "Todo Se Derrumbó","Quiero Dormir Cansado",
             "Tengo Mucho Que Aprender De Ti","Insoportablemente Bella"
         ],
         "José José":[
             "Tu primera vez","La vida pasa",
             "Mientras lueve","Cosas imposibles"
         ],
         Saez:[
             "Putains Vous M'aurez Plus","Jeune et con",
             "Cigarrete", "J accuse"
         ],
         Caifanes:[
             "Hasta Morir","Ayer Me Dijo Un Ave",
             "Avientame","Quisiera Ser Alcohol"
         ]
     },
    Electronic:{
        OVERWERK:["Toccata","12:30","Canon", "Winter"],
        Skrillex: [
            "04 - Scary Monsters and Nice Sprites",
            "02 Recess","Summit","Doompy Poomp"
        ]
    },
    Cumbias:{
        "Rayito Colombiano":[
            "Muchachita Consentida","Al despertar",
            "Te extramo tanto","Besar tu piel"
        ],
        "Angeles Azules":[
            "Entrega de Amor", "El listón de tu pelo",
            "Mis Sentimientos", "Doctor Psiquiatra"
        ],

    }
 
}

/* document.addEventListener("DOMContentLoaded", function(event) {  */

    let body = document.getElementsByTagName("body")[0];

    let gen = new GenerateElements(myListSong,document);
    let elements = gen.getSongElements()
    for(const currentGenreItem of elements)
        body.appendChild(currentGenreItem);

/* }); */