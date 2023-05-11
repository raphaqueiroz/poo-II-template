class Pessoa{
    constructor(
        protected nome: string, protected idade: number
    ){}

    static dizerOlares(): void{
        console.log("olares")
    }
}

class Aluno extends Pessoa {
    constructor(
        nome: string,
        idade: number,
        public nomeMae: string
    ){
        super(nome, idade)
    }
}

class Funcionario extends Pessoa {}

