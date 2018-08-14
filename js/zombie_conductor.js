/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccionFerroCarril) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccionFerroCarril = direccionFerroCarril;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);	
ZombieConductor.prototype.constructor = ZombieConductor; 
/* Completar creacion del ZombieConductor */
ZombieConductor.prototype.atacar = function(jugador){
	jugador.perderVidas(jugador.vidas);
}
/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
	if (this.direccionFerroCarril == "h") {
		this.x += this.velocidad;
	}else if (this.direccionFerroCarril == "v") {
		this.y += this.velocidad;
	}
	if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX) || (this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
 
}

