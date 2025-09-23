// MODELO DE DADOS DO INTERESSADO
export class Interessado {
  constructor(
    public id?: string,
    public clienteId?: number,
    public imovelId?: number
  ) {}

  // OBJ => JSON
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      clienteId: this.clienteId,
      imovelId: this.imovelId
    };
  }

  // JSON => OBJ
  static fromMap(map: any): Interessado {
    return new Interessado(
      map.id,
      map.clienteId,
      map.imovelId
    );
  }
}
