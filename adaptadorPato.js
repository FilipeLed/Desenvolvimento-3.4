const Pato = require('./pato');

class AdaptadorPato extends Pato  {  
    constructor(fazerQuaQua,voar) {
        super(fazerQuaQua,voar)
        let pato = new Pato();
        this.fazerQuaQua = () => "Cocorico";
        this.voar = pato.voar;
        return this
    }  
}
module.exports = AdaptadorPato;

