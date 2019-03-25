class View {

    constructor(elemento){

        this._elemento = elemento;

    }


    template(model) {

        throw new 'Esse método precisa ser sobreescrito';

    }


    update(model){

        this._elemento.innerHTML = this.template(model);

    }


}