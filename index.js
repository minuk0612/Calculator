let result='';
let operation='';
let new_num = '';


const number_button_clicked = e =>{
if(operation =='')
{
    result+=e.target.dataset.number;
    display(result);
}
else {
    new_num+=e.target.dataset.number;
    display(new_num);
}
};


const add_button_clicked = () => {
operation = '+';
};

const substract_button_clicked = () => {
    operation = '-';
    };

const divide_button_clicked = () => {
        operation = '/';
        };

const multiply_button_clicked = () => {
     operation = '*';
  };
  
const equals_button_clicked = () => {
   if(operation=='+'){
    result = Number(result) + Number(new_num);
   }
    
   if(operation=='-'){
    result = Number(result) - Number(new_num);
   }

   if(operation=='/'){
    result = Number(result) / Number(new_num);
   }

   if(operation == '*'){
    result = Number(result) * Number(new_num);
   }
    
    operation = '';
    new_num = '';
    display(result);
};

const reset_button_clicked = () =>{
    operation = '';
    new_num = '';
    result='';
    display(result);

}



const display = (value) => {
    document.getElementById('display').innerText = value;
}


let add_button = document.getElementById('add_button')
add_button.addEventListener('click', add_button_clicked);

let equals_button = document.getElementById('equals_button');
equals_button.addEventListener('click', equals_button_clicked);

let reset_button = document.getElementById('reset_button');
reset_button.addEventListener('click', reset_button_clicked);


let substract_button = document.getElementById('substract_button')
substract_button.addEventListener('click', substract_button_clicked);

let multiply_button = document.getElementById('multiply_button')
multiply_button.addEventListener('click', multiply_button_clicked);


let divide_button = document.getElementById('divide_button')
divide_button.addEventListener('click', divide_button_clicked);











let number_buttons = document.querySelectorAll('.number_button');
number_buttons.forEach(single_number_button => {
    single_number_button.addEventListener('click', number_button_clicked);
});
