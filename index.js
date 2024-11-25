/* function calculator() {
    let num1, num2;

    while (sam(num1)) num1 = parseInt(prompt("Бірінші санды енгізіңіз:"));
    while (sam(num2)) num2 = parseInt(prompt("Екінші санды енгізіңіз:"));

    alert(`Қосынды: ${num1 + num2}`);
    alert(`Айырма: ${num1 - num2}`);
    alert(`Көбейтінді: ${num1 * num2}`);
    alert(`Бөлінді: ${num1 / num2}`);
}

calculator(); 
 */



function supermaket() {
    let baga = parseFloat(prompt("Бағасын енгізіңіз:")), 
        engiz = parseInt(prompt("Санын енгізіңіз:")),
        upai = baga * engiz, 
        basi = 0;

    if (upai > 20000) {
        basi = 0.30;
    } else if (upai > 10000) {
        basi = 0.20;
    } else if (upai > 5000) {
        basi = 0.10;
    }

    
    alert(`құны барлгын: ${upai} тг\nскидка: ${basi * 100}%\n`);
}

supermaket();

//3
function tabu(){
    let oi_san = parseInt(Math.random() * 100)
    while(true){
    var san = +prompt("Sandy tap")
    if(oi_san == san){
    return "Durys"
    }
    else if(san - oi_san <= 5  && oi_san - san <= 5){
    alert("Жақын")
    }
    else{
     alert("Алыс")
     }
    }
}

alert(tabu());



//bonus
let num1 = parseInt(prompt("Бірінші санды енгізіңіз:"));
let num2 = parseInt(prompt("Екінші санды енгізіңіз:"));

(num1, num2) = (num2, num1);

console.log(`num1 = ${num1}, num2 = ${num2}`);













