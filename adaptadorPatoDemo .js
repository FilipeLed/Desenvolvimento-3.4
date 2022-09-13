const Pato = require('./pato');
var pato = new Pato();
som = pato.fazerQuaQua();
estatus = pato.voar();
console.log(som);
console.log(estatus);



const AdaptadorPato = require('./adaptadorPato');

var pato = new AdaptadorPato();
som = pato.fazerQuaQua();
estatus = pato.voar();
console.log(som);
console.log(estatus);

