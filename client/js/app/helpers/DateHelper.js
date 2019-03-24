class DateHelper {

    constructor() {

        throw new Error('DateHelper não pode ser instanciada');

    }

    static dataParaTexto(data){

        
        
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;   
        
    }
    
    static textoParaData(texto){

        if(!/\b\d{4}-\d{2}-\d{2}\b/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');
        
        return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2));

    }


    
}