class Dado {
  constructor(fases) {
    this.fases = fases
  }

  RolarDado() {
    if (!isNaN(this.fases)) {
      let randomNumber = Math.ceil(Math.random() * this.fases);
      console.log(randomNumber);
    }
  }
}

let dadoSeis = new Dado(6);
let dadoVinte = new Dado(20);
// dadoSeis.RolarDado();
dadoVinte.RolarDado();