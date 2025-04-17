// Classe Funcionarios
class Funcionarios {
  constructor(nome, salario, cargo) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  
  // Metodos (aumentSalario, exibirInfo)
  aumentSalario(percentual) {
    if (percentual > 0) {
      const aumento = this.salario * (percentual / 100);
      this.salario += aumento;
      console.log(
        `
        Salário aumentado: ${percentual}%
        Novo salário: R$${this.salario.toFixed(2)}
        `
      );
    } else {
      console.log("Insira um percentual válido!");
    }
  }

  exibirInfo() {
    console.log(
      `
      Nome: ${this.nome}
      Cargo: ${this.cargo}
      Salário: R$${this.salario.toFixed(2)}
      `
    );
  }
}


// Exibir na tela
const funcionario1 = new Funcionarios("Nick", 9000, "Programadora de Software");
const funcionario2 = new Funcionarios("Malu", 9000, "Web Designer");

funcionario1.exibirInfo(); 
funcionario1.aumentSalario(20); 
funcionario1.exibirInfo();   

funcionario2.exibirInfo(); 
funcionario2.aumentSalario(20); 
funcionario2.exibirInfo();   