export default class CalculadoraDeIdade {
  constructor(dataNascimento) {
    this.dataNascimento = new Date(dataNascimento);
  }

  calcularIdade() {
    let hoje = new Date();
    //exemplos de uso a patir do slide 41 no material 
    let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
    let mesAtual = hoje.getMonth();
    let diaAtual = hoje.getDate();

    let mesNascimento = this.dataNascimento.getMonth();
    let diaNascimento = this.dataNascimento.getDate();

    // Ajustar a idade se o mês ou o dia ainda não tiverem sido alcançados
    // garante que, se a pessoa ainda não tiver completado o aniversário 
    // no ano atual, a idade mostrada não seja incrementada.
    
    //(mesAtual === mesNascimento) && (diaAtual < diaNascimento)
    //Esta parte é uma condição composta que verifica se o mês atual 
    //é igual ao mês de nascimento e o dia atual é anterior ao dia de nascimento.
    //Exemplo: Se a pessoa nasceu no dia 15 de fev e hoje é 10 de fev, 
    // o aniversário ainda não aconteceu, então a idade precisa ser ajustada.
    //prettier-ignore
    if ((mesAtual < mesNascimento) || (mesAtual === mesNascimento) && (diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  }
}
