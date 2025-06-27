document.addEventListener('DOMContentLoaded', () => {
    let num1 = document.querySelector(".first-input");
    let num2 = document.querySelector(".second-input");
    let display = document.querySelector(".display");
    let addBtn = document.querySelector(".add-btn");
    let subBtn = document.querySelector(".subtact-btn");
    let clear = document.querySelector(".clear-btn");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    function addnumber(n1,n2,res){
        if(addBtn.addEventListener('click',function(){
            
        })){
            res  = n1 + n2;
        }else{
            res = n1 - n2;
        }
        return res;
    }






 
})