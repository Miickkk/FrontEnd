// arquivo responsável pela modelagem de dados para interessados
export class Interesses {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public telefone?: string,
        public mensagem?: string,  
        public imovelId?: number,   
    ) { }

    // OBJ => JSON
    public toMap(): { [key: string]: any } {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            mensagem: this.mensagem,
            imovelId: this.imovelId
        };
    }

    // JSON => OBJ
    static fromMap(map: any): Interesses {
        return new Interesses(
            map.id,
            map.nome,
            map.email,
            map.telefone,
            map.mensagem,
            map.imovelId
        );
    }
}
