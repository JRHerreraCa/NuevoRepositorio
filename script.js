/*console.log('Hola');
let vari=[1,3,5,7,9,11];
let i=0;
let j=0;
let b=12;
let num1=[];
let num2=[];
while (i<=vari.length-1) {
    while (j<=vari.length-1) {
        if (vari[i]!==vari[j]&&vari[i]+vari[j]===b) {
            num1.push(vari[i]);
            num2.push(vari[j]);
            console.log(vari[i],vari[j]);
        }
        //console.log(j,i);
        j++;
    }
    //console.log(i);
    j=0;
    i++;
}
console.log(num1,num2);
console.log(vari);
function multiplos(a,b) {
    let i=1;
    let arrayy=[];
    let j=0;
    while (i<=b) {
        if (i%a===0) {
            arrayy.push(i);
            //console.log(arrayy)
            j++;
        }
        i++;
        
    }
    return arrayy;
}
console.log(multiplos(3,10));*/
a=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
function imprimirMatrizEspiral(a) {
    let g=0;
    let m=0;
    //let array=[];
    let array='';
    while (g<=a.length-1) {
        //console.log(g);
        while (m<=a[g].length-1) {
            //array.push(a[g][m]);
            array+=a[g][m]+' ';
            m++;
        }
        m=0;
        g++;
    }
    return array;
}

//console.log(a[0][2]);
//console.log(a[3].length-1);
console.log(imprimirMatrizEspiral(a));