export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) {

        // parâmetros opcionais devem ser os últimos do construtor
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {

        // Medir performance
        // const t1 = performance.now();

        let template = this.template(model);
        if(this._escapar) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(template);

        // const t2 = performance.now();
        // console.log(`Tempo de execução do método View.update(): ${(t2-t1)/1000} segundos`)

    }

    abstract template(model: T): string;

}