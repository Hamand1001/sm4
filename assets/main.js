// let b = prompt('Стоимость товара');
// let a = prompt('Количество ваших денег');

// if(a==b){
//     alert('Покупка выполнена.');
// }else{
//     if(a > b){
//         let x = a - b;
//         alert('Покупка выполнена, сдача - ' + x);
//     }else{
//         let x = b - a;
//         alert('Недостаточно средств - ' + x);
//     }
// }

function changeBodyBg(color){
    document.body.style.background = color;
}

function check() {
    var b = document.getElementById("a").value;
    var a = document.getElementById("b").value;
    if(a==b){
        let text = document.querySelector('.text');
        text.textContent = 'Покупка выполнена.';
    }else{
        if(a > b){
            let x = a - b;
            let text = document.querySelector('.text');
            text.textContent = 'Покупка выполнена, сдача - ' + x;
        }else{
            let x = b - a;
            let text = document.querySelector('.text');
            text.textContent = 'Недостаточно средств - ' + x;
        }
    }

}
// let but = document.getElementById('1');

// but.onclick = function() {

//   let inputs = Array.from(document.querySelectorAll('input'));

//   let inputsValueTrue = inputs.every((input) => input.value)

//   if (inputsValueTrue) {
//     // document.querySelector('.one-overflow').style.display = "none";
//     document.querySelector('.two-overflow').style.display = "block";
//   }

// }

