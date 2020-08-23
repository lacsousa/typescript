import { Negociacao } from './Negociacao';

export class Negociacoes {

  // private _negociacoes: Array<Negociacao> = [];
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {

    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {

    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {

    console.log('-- paraTexto --');
    console.log(JSON.stringify(this._negociacoes));
  }
}
