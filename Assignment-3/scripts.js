const $num1= $('#num1');
const $num2= $('#num2');
const $operator= $('#symbol');
const $add= $('#btn_add');
const $subtract= $('#btn_sub');
const $multiply= $('#btn_mul')
const $divide= $('#btn_div')
const $result= $('#btn_res');
const $display_result= $('#result');

import {add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv} from './calculator.js';

$add.on('click', (e)=>{
    e.preventDefault();
    $operator.val('+');
})

$subtract.on('click', ()=>{
    $operator.val('-');
})  
$multiply.on('click', ()=>{
    $operator.val('*');
})  
$divide.on('click', ()=>{
    $operator.val('/');
})

$result.on('click', ()=>{
    let x= parseFloat($num1.val());
    let y= parseFloat($num2.val());

    if(!x && x!==0)
    {
        alert("Please enter your firstnumber")
        return
    }
    if(!y && y!==0)
    {
        alert("Please enter your second number")
        return
    }
    if(!$operator.val())
    {
        alert("Please select the operator")
        return
    }
    
    switch($operator.val())
    {
        case '+':$display_result.val(funcAdd(x,y)) 
            break;

        case '-':$display_result.val(funcSub(x,y)) 
            break;

        case '*':$display_result.val(funcMul(x,y)) 
            break;

        case '/':$display_result.val(funcDiv(x,y)) 
            break;
    }
})