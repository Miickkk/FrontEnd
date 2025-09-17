export class Corretor {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public senha: string,
    public permissao: string // ex: 'corretor'
  ) {}

  // OBJ to JSON
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      permissao: this.permissao
    };
  }

  // JSON to OBJ
  static fromMap(map: any): Corretor {
    return new Corretor(
      map.id,
      map.nome,
      map.email,
      map.senha,
      map.permissao
    );
  }
}
