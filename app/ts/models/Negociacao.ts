class Negociacao {

    // private _data : Date; se vc declarar nos parâmetros do constructor,
    // não precisa declarar aqui, nem dentro do constructor
    // private _quantidade: number;
    // private _valor : number ;

    constructor(private _data: Date, private _quantidade: number,  private _valor: number) {

    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}