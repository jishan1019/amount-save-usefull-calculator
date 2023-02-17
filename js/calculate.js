function elementToNumber(elementId){
    const inputElement = document.getElementById(elementId);
    const elementString = inputElement.value;
    const elementNmuber = parseInt(elementString);
    return elementNmuber;
}

function textToDisplay(elementName){
    const textElement = document.getElementById(elementName);
    const textString = textElement.innerText
    const textNumber = parseInt(textString);
    return textNumber;
}


function setDisplay(elementNameValue, calculateValue){
    document.getElementById(elementNameValue).innerText = calculateValue;
}


let expenseAfterBalance;


document.getElementById('btn-expence').addEventListener('click', function(){
    const IncomeInput = elementToNumber('total-income-element');
    const expenceFood = elementToNumber('food-input');
    const expenceRent = elementToNumber('rent-input');
    const expenceClothes = elementToNumber('input-clothes');

    const totalExpensesInput = expenceFood+expenceRent+expenceClothes;
    setDisplay('total-expenses-display', totalExpensesInput)

    expenseAfterBalance = IncomeInput - totalExpensesInput;
    setDisplay('balance',expenseAfterBalance);
})

document.getElementById('btn-save').addEventListener('click',function(){
    const newBalance = textToDisplay('balance');
    const saveAmountInput = elementToNumber('save-amount-input');
    const savePercentAmount = (saveAmountInput * (expenseAfterBalance/100)).toFixed(1);

    const remainBalance = newBalance-savePercentAmount;

    document.getElementById('save-amount-display').innerText = savePercentAmount;
    document.getElementById('remain-balance').innerText = remainBalance;


})