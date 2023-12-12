class Heroi {
	constructor(nome, idade, tipo) {
    this.nome =  nome;
    this.idade = idade;
    this.tipo = tipo;
    }
    
    atacar() {
    let ataque = ' ';
    switch (this.tipo) {
    
    case 'Mago':
     ataque = "magia "
   	 break;
     
    case 'Guerreiro':
     ataque = "espada "
     break;
     
    case 'Monge': 
     ataque = "artes marciais "
     break;
     
    case 'Ninja':
     ataque = "shuriken "
     break;
    default:
   		ataque = 'atacou';
    
      }
    
     console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    
    }
 }
    
    
    
    
const heroiMago = new Heroi('Mystigan', 55, 'Mago')
heroiMago.atacar();

const heroiGuerreiro = new Heroi('Beserk', 55, 'Guerreiro')
heroiGuerreiro.atacar();

const heroiMonge = new Heroi('Yang', 55, 'Monge')
heroiMonge.atacar();

const heroiNinja = new Heroi('Minato', 55, 'Ninja')
heroiNinja.atacar();


