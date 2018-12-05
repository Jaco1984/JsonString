import {Component } from '@angular/core';

@Component({
    selector: 'app-string',
    templateUrl: `./string.component.html`
})

export class StringComponent{
    
   
}


// -Acepta una cadena en formato JSON, como en el siguiente ejemplo.
const stringJson = "'" +'[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'+ "'";
   
 function convertString( strJson: string) { 
    let obj = JSON.parse(JSON.stringify(strJson));
    document.write("Convertir: ", obj);

     return obj;
}
  
 console.log(convertString(stringJson));

 // -Pedidos de artículos por precio en orden ascendente.
    const jsonString = [{"name":"eggs","price":8},{"name":"coffee","price":2},{"name":"rice","price":9}, {"name":"arrow","price":2}];
     jsonString.sort( (a, b) => (a.price - b.price));

     let resJson = JSON.stringify(jsonString);

     document.write("<br/> Orden:", resJson);

   
// - Si dos productos tienen el mismo precio, los ordena por su nombre en orden alfabético.
     jsonString.sort( ( a,b) => {
       if (a.price === b.price){
      
        jsonString.sort(function (a, b){
            if ( a.name < b.name )
              return -1;
            if ( a.name > b.name )
              return 1;
            return 0;
        })
      
        
       }
     });

     let resJson1 = JSON.stringify(jsonString);

        document.write("<br/> Mismo precio:", resJson1);

   
// -Devuelve una cadena en formato JSON que es equivalente a la del formato de entrada
const cadenaJson = [{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}] ;
   
function cadenaString( cadJson: string) { 
   let obj1 = JSON.stringify(cadJson);
   document.write("<br/> Formato Json: ", obj1);

    return obj1;
}
 
console.log(cadenaString(cadenaJson));
  
    

   




















