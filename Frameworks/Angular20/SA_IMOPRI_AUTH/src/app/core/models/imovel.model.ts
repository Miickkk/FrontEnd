export class Imovel {
    constructor( 
        public id: number,
        public titulo: string,
        public corretorId: number,
        public tipo: string, 
        public cidade: string, 
        public preco: number,
        public descricao: string, 
        public imagemUrl: string, 
    ){}}