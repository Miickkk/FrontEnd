import { Cliente } from './cliente.model';
import { Produto } from './produto.model';

export class Pedido {
  constructor(
    public id: number,
    public cliente: Cliente,
    public produto: Produto[],
    public desconto: number
  ) {}

  calcularTotal(): number {
    const total = this.produto.reduce((acc, p) => acc + p.preco, 0);
    return total - total * (this.desconto / 100);
  }
}
