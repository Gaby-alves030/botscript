class BancoDeDados {
  constructor() {
    this.usuarios = [];
    this.produtos = [];
  }

  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  atualizarUsuario(id, novoUsuario) {
    const usuarioIndex = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (usuarioIndex !== -1) {
      this.usuarios[usuarioIndex] = novoUsuario;
    }
  }

  buscarUsuario(id) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  atualizarProduto(id, novoProduto) {
    const produtoIndex = this.produtos.findIndex((produto) => produto.id === id);
    if (produtoIndex !== -1) {
      this.produtos[produtoIndex] = novoProduto;
    }
  }

  buscarProduto(id) {
    return this.produtos.find((produto) => produto.id === id);
  }
}


const bancoDeDados = new BancoDeDados();

const novoUsuario = { id: 1, nome: "Davi", email: "davi@talckteck.com" };
bancoDeDados.adicionarUsuario(novoUsuario);

const novoProduto = { id: 1, nome: "Camiseta", preco: 29.99 };
bancoDeDados.adicionarProduto(novoProduto);

console.log(bancoDeDados.buscarUsuario(1)); 
console.log(bancoDeDados.buscarProduto(1)); 
