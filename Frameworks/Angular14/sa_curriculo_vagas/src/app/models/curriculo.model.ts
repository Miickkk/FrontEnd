export class Curriculo {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public telefone: string,
    public experiencia: string,
    public formacao: string,
    public idade?: number,
    public genero?: string,
    public endereco?: string
  ) {}

  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      genero: this.genero,
      email: this.email,
      telefone: this.telefone,
      experiencia: this.experiencia,
      formacao: this.formacao,
      endereco: this.endereco,
    };
  }

  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.email,
      map.telefone,
      map.experiencia,
      map.formacao,
      map.idade,
      map.genero,
      map.endereco
    );
  }
}
