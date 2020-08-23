export class Negociacao {

    // private _data : Date; se vc declarar nos parâmetros do constructor,
    // não precisa declarar aqui, nem dentro do constructor
    // private _quantidade: number;
    // private _valor : number ;

    constructor(readonly data: Date, readonly quantidade: number,  readonly valor: number) {

    }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
}