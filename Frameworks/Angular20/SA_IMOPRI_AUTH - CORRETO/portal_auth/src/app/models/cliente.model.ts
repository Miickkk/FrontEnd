// MODELO DE DADOS DO CLIENTE
export class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public senha: string
  ) {}

  // OBJ => JSON
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
  }

  // JSON => OBJ
  static fromMap(map: any): Cliente {
    return new Cliente(
      map.id,
      map.nome,
      map.email,
      map.senha
    );
  }
}
