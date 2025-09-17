export class MeuImovel {
  constructor(
    public id?: number,
    public nome?: string,
    public cidade?: string,
    public valor?: number,
    public tipo?: string,
    public descricao?: string,
    public foto?: string
  ) {}

  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      cidade: this.cidade,
      valor: this.valor,
      tipo: this.tipo,
      descricao: this.descricao,
      foto: this.foto
    };
  }

  static fromMap(map: any): MeuImovel {
    return new MeuImovel(
      map.id,
      map.nome,
      map.cidade,
      map.valor,
      map.tipo,
      map.descricao,
      map.foto
    );
  }
}
