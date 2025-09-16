// arquivo responsável pela modelagem de dados para vagas
export class Imovel {
    constructor(
        public id?: number,
        public corretorId?: number,
        public nome?: string,
        public cidade?: string,
        public valor?: number,
        public tipo?: string,
        public descricao?: string,
        public foto?: string,
    ) { }

    // OBJ => JSON
    public toMap(): { [key: string]: any } {
        return {
            id: this.id,
            corretorId: this.corretorId,
            nome: this.nome,
            cidade: this.cidade,
            valor: this.valor,
            tipo: this.tipo,
            descricao: this.descricao,
            foto: this.foto
        };
    }

    // JSON => OBJ
    static fromMap(map: any): Imovel {
        return new Imovel(
            map.id,
            map.corretorId,
            map.nome,
            map.cidade,
            map.valor,
            map.tipo,
            map.descricao,
            map.foto
        );
    }
}
