const fs = require('fs'); //Ya existe en node
const colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("=======================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("=======================".green);
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}


const crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject (err);
            resolve(`tabla-${base}.txt `.green);
        });
    } )
    
}

module.exports = {
    crearArchivo,
    listarTabla
}
