const mensajes=[
    "Milton",
    "Jose",
    "Damian",
    "Laitao",
    "Carla",
    "Josin",
    "Ramves"
];

const randomMsg =() =>{

    const mensaje=mensajes[Math.floor(Math.random() * mensajes.length)]
    console.log(mensaje)
};

module.exports ={randomMsg};
