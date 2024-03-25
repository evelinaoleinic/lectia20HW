// //ex1 - recursie
// const recursie= (n) => {
//     console.log(n)
//     if (n <1) {
//         return  0
//     }
//     recursie (n - 1);
// }
// recursie(6)
// //ex 2 - vocale 
// // function vocale(array) {
// //     let i = 0
// //     const vocale = "aeiouAEIOU"
// //     for (let item of array) {
// //         if(vocale.includes(item)) {
// //             i++;
// //         }
       

// //     } return i
// // }
// //ex2 - vocale 
// //     console.log(vocale('acestea sunt mere'))

//     function vocale1(sir) {
//         const arr = sir.split('')

//         const vocale = arr.filter(item =>{
//             return 'aeiouAEIOU'.includes(item)
//         })
//         return arr.length
//     }
//     console.log(vocale1('acestea sunt merele mele'))

// //ex3 - cel mai lung string metoda reduce
// const arr = ['Igor','Evelina', 'Andreea','Ion','Catalina']
// function celMaiLungString(array){
//     const strLung = arr.reduce((strLung,curr)=>{
//         return curr.length > strLung.length ? curr : strLung;
//     },'')
//     return strLung
    
// }
// console.log(celMaiLungString(arr))

//ex4 - 

// const container = document.getElementsById('id-h1');
// container[0].textContent='add bla-bla-bla'

// const container1 = document.getElementByClassName('h1-class')
// container1[0].textContent='!!!!!'


// container[0].classList.add('test')


// console.log(container)
// console.log(container1)

const arr1 = ['nume', 'prenume', 'adresa']
const maped = arr1.map((item)=> `<select>${item}</select>`)
const container = document.querySelector('#id-h1')
container.innerHTML = `
<ul class='test' >${maped}</ul`

const container2 = document.querySelectorAll