let cursos = [
    ['html5', 4000],
    ['css3', 5000],
    ['javascript', 10000],
    ['react',7000],
    ['nodejs', 15000]
];

//console.log(`A mi me gusta programar con el lenguaje ${cursos[2][0]}`);
//Enviado por Juan Pablo - Leonel
let cursosATomar = ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'NODEJS']

let cursosATomarMinu = pasarAMinusculas(cursosATomar);
console.log(cursosATomarMinu);

function pasarAMinusculas(cursosATomar){
    let cursosATomarMinusculas = [];
    for(let i=0; i < cursosATomar.length;i++){
        cursosATomarMinusculas.push(cursosATomar[i].toLowerCase());
    } 
    return cursosATomarMinusculas;
} 


//Verificando el funcionamiento del código
console.log(`Total a pagar por el alumno: ${calcular(cursos,cursosATomarMinu)}`);

function calcular(cursos,cursosATomarMinu){
       //Punto C
        let totalAPagar = 0;
        for (let i = 0; i < cursosATomarMinu.length; i++) {     //BUCLES ANIDADOS
            for (let j = 0; j < cursos.length; j++) {
                if (cursosATomarMinu[i] === cursos[j][0]) {
                    totalAPagar = totalAPagar + cursos[j][1];
                }
            }
        }
        return totalAPagar;
} 
