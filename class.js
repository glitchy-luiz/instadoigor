//user story em classe
class Veiculo{
    #chassi;
    //parâmetros
    constructor(peso,cor,modelo,placa,chassi){
        this.peso = peso;
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.#chassi = chassi;
        this.pos = [0,0];
        this.velo;
    }
    anda(dir, velo){
        //erros para programadores, não para usuários
        if (dir ==! "x" || dir ==! "y"){
            console.error(`Digite apenas "x" ou "y"`);
            return;
        }
        else if (typeof (dir) ==! "String"){
            console.error(`Digite apenas String em dir`);
            return;
        }
        if (dir === "x"){
            pos[0] += velo;
        }
        else if (dir === "y"){
            pos[1] += velo;
        }
    }
}

class Caminhao extends Veiculo{
    constructor(peso,cor,modelo,placa,chassi,eixos){
        this.eixos = eixos;
        this.peso = peso;
        this.cor = cor;
        this.modelo = modelo;
        this.placa = placa;
        this.#chassi = chassi;
        this.pos = [0,0];
        this.velo;
    }
}

const mercedez = new Caminhao()





//ambos são carros mas instancias diferentes
const fiat = new Carro(4, "#ff0000", "Uno", "abc-2222", 536748576);
const nissan = new Carro(3, "#0000ff", "versa", "bbb-6666", 532747646);
nissan.anda("0", 5)