/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: "imagenes/auto_rojo_abajo.png",
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,


  mover: function(movimientoX, movimientoY){
    this.x +=  movimientoX;
    this.y +=  movimientoY;
  },


  perderVidas: function(vidasPerdidas){
    this.vidas -= vidasPerdidas;
  }

/*
  function Jugador(sprite, x, y, ancho, alto, velocidad, vidas) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = velocidad;
    this.vidas = vidas;
  }*/


   // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

};
