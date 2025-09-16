export class Cliente {
    constructor(
        public nome: string, 
        public email: string, 
        public senha: string, 
        public id?: number,
    ){}
}