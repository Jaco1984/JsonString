import {Component } from '@angular/core';

@Component({
    selector: 'app-string',
    templateUrl: `./string.component.html`
})

export class StringComponent {
}


// -Acepta una cadena en formato JSON, como en el siguiente ejemplo.
const stringJson = "'" + '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]' + "'";
 function convertString( strJson: string) {
    const obj = JSON.parse(JSON.stringify(strJson));
    document.write(" Convertir: ", obj);

     return obj;
}

 console.log(convertString(stringJson));

 // -Pedidos de artículos por precio en orden ascendente.
    const jsonString = [{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}];
     jsonString.sort( (a, b) => (a.price - b.price));

     const resJson = JSON.stringify(jsonString);

     document.write("<br/> Orden:", resJson);

   
// - Si dos productos tienen el mismo precio, los ordena por su nombre en orden alfabético.

  //Este es el JSON que recibes

const jsonString1 = [{"name":"eggs","price":8},{"name":"coffee","price":2},{"name":"rice","price":9}, {"name":"arrow","price":2}];
   
//Lo parseamos para convertirlo en objeto
let types = JSON.parse(JSON.stringify(jsonString1));

document.write("<br/> Parse:", types);
 
//Y lo recorremos
for(let x=0; x<types.length; x++) {
    document.write("<br/> Types: Name:", types[x].name);
    document.write("<br/> Types: Price: ", types[x].price);

    if(types[x].price === types[x].price ) {

      jsonString1.sort(function (a, b) {
        if (a.name > b.name) { //comparación lexicogŕafica
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } 
        return 0;
      });

     

    }
   
}
const resJson1 = JSON.stringify(jsonString1);

document.write("<br/> Orden Por nombre:", resJson1);
// -Devuelve una cadena en formato JSON que es equivalente a la del formato de entrada
const cadenaJson = [{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}];

function cadenaString( ) {
   const obj1 = JSON.stringify(cadenaJson);
   document.write("<br/> Formato Json: ", obj1);

    return obj1;
}
cadenaString();




















