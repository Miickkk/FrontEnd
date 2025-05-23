export class Curriculo {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public experiencia: string,
        public formacao: string,
    ){}

    toMap(): {[key:string]:any}{
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            experiencia: this.experiencia,
            formacao: this.formacao
        }
    }

    static fromMap(map: any): Curriculo {
        return new Curriculo(
            map.id,
            map.nome,
            map.email,
            map.telefone,
            map.experiencia,
            map.formacao
        );
    }
}