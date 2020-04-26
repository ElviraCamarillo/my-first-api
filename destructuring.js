const request ={
    body:{
        name:"Charles",
        generation:7,
        age:24,
        phone: '0987654321s',
        gender:'male',
        email:'aa@kodemia.mx'
    }
}

/**
 * Decstrucción
 * 

 */
//Deconstrucción de un objeto
// const{atributos que quiero obtener} = el  objeto a deconnstruir (del que quiero sacar atributos)
const{name,generation} = request.body

console.log('name:',name)
console.log('generation: ',generation)

//Nombramiento en la deconstrucción
// Se usa el operador :
// Lado izquierdo nombre del atributo como esta en el objeto
//Lado derecho nombre deseado
const{ name:koderName, age:koderAge } = request.body

console.log('koderName: ',koderName)
console.log('koderAge: ',koderAge)

//Dar un valor por defecto
//Se usa el operador de asignación (=)

const { phone = '1234567890'} = request.body
console.log('Phone: ',phone)

// Todo junto
const{ name:mentorName = 'Isra'} = request.body
console.log('MentorName: ',mentorName) //para que fucione comentar el name:Charles

//Buenas practicas
// Usar varias líneas al deconstruir más de 2 atributos de un objeto.

// const{
//     name:dudeName ='dude',
//     phone,
//     age:dudeAge = 18,
//     generation
// } = request.body //SI

//----------------------------
//----------------------------
// Deconstrucción de un arreglo

const koders =[ 'Mar', 'Elvira', 'Airy', 'Fer']

//cost[Elementos posicionales del arrreglo] = arreglo a ser desconstruido

const[x,y,z,a,b='extra'] = koders
console.log('x: ', x)
console.log('y: ', y)
console.log('z: ',z)
console.log('a: ', a)
console.log('b: ',b)

const e=koders[1]
console.log('e: ',e)

// Arreglo con multiples objetos

const mentors=[
    {
        name: 'Isra'
    },
    {
        name: 'David'
    },
    {
        name: 'Charles'
    }
]
const{name:mentorNameNew} =mentors[0]
console.log('mentorNameNem: ', mentorNameNew)

//Spread y rest operator (...)
// Spread es esparcir, os ayuda a sacar los valores de un objeto
// rest  nos ayuda a agrupar el resto de atributos/miembros  en un sólo contenedor

// rest operator (...), se  caracteriza porque se usa dentro de una decostrucción

console.log('-----------spread&rest Operator-----------')

const{ email, ...restoDelObjeto} =request.body
console.log('email: ',email)
console.log('restoDelObjeto: ',restoDelObjeto)

//Arrays
const  [unKoder,...restoDelArreglo] = koders
console.log('unkoder: ',unKoder)
console.log('restoDelArreglo: ',restoDelArreglo)

//spred Operator (...) del lado derecho del igual
const koderPersonal = {
    name:'name',
    age:'age'
}

const koderKodemiaInfo = {
    generation: 7,
    fechaDeIngreso: new Date()

}
const koderCompleto = { ...koderPersonal, ...koderKodemiaInfo }
console.log('koderCompleto: ',koderCompleto)

//Array
const sextaGen  = ['Adan','Itiel','Luis']
const septimaGen = ['Fer', 'Omar','Elvira']

const sextaYSeptima = [ ...sextaGen, ...septimaGen]
const septimaYSexta = [ 'inicial', ...septimaGen,'enmedio', ...sextaGen]
console.log('sextaYSeptima: ',sextaYSeptima)
console.log('septimaYSexta: ', septimaYSexta)
