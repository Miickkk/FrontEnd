//CLASSE E CONSTRUTOR CURRICULO
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


  //TRANSFORMA O OBJETO CURRICULO EM UM MAP
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


  //TRANSFORMA O MAP EM UM OBJETO CURRICULO
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,                      // ID
      map.nome,                    // NOME
      map.email,                   // EMAIL
      map.telefone,                // TELEFONE
      map.experiencia,             // EXPERIENCIA
      map.formacao,                // FORMACAO
      map.idade,                   // IDADE
      map.genero,                  // GENERO
      map.endereco                 // ENDERECO
    );
  }
}
