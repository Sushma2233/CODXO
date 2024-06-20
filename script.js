let selectCategoryElement=document.getElementById("selectCategory");
let amountInputElement=document.getElementById("amountInput");
let dateInputElement=document.getElementById("dateInput");
let addBtnElement=document.getElementById("addBtn");
let expenseTableElement=document.getElementById("expenseTable");
let totalAmountElement=document.getElementById("totalAmount");

let totalAmount=0;
let expenses=[];

addBtnElement.addEventListener('click',function(){
    let category= selectCategoryElement.value;
    let amount=Number(amountInputElement.value);
    let date=dateInputElement.value;

    if(category === ""){
        alert("Please select a category");
        return;
    }
    if(isNaN(amount) || amount<=0){
        alert("Please enter a vaild amount");
        return;
    }
    if(date ===""){
        alert("Please select a date");
        return;
    }
    expenses.push({category, amount, date});

    totalAmount +=amount;
    totalAmountElement.textContent= totalAmount;

    let newRow= expenseTableElement.insertRow();
    let categoryCell= newRow.insertCell();
    let amountCell= newRow.insertCell();
    let dateCell= newRow.insertCell();
    let deleteCell= newRow.insertCell();


    //create a delete button 
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount-=expense.amount;
        totalAmountElement.textContent=totalAmount;

        expenseTableElement.removeChild(newRow);
    });
    let expense=expenses[expenses.length-1];
    categoryCell.textContent=expense.category;
    amountCell.textContent= expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

   

    


});

for (let expense of expenses){
    totalAmount +=expense.amount;
    totalAmountElement.textContent=totalAmount;

    let newRow= expenseTableElement.insertRow();
    let categoryCell= newRow.insertCell();
    let amountCell= newRow.insertCell();
    let dateCell= newRow.insertCell();
    let deleteCell= newRow.insertCell();

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.textContent="Delete";
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountElement.textContent=totalAmount;

        expenseTableElement.removeChild(newRow);
    });

    categoryCell.textContent=expense.category;
    amountCell.textContent= expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);


}