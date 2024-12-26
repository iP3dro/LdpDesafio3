class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Pedro', 23, 'guerreiro');
  const heroi2 = new Heroi('Merlin', 100, 'mago');
  const heroi3 = new Heroi('Felipe', 26, 'monge');
  const heroi4 = new Heroi('Sasuke', 28, 'ninja');
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar(); 
  heroi4.atacar(); 
  