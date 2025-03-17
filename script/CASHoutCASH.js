document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const amount = getInputValueByID('cashout-amount');
    const pin = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');

    if(amount>mainBalance){
        alert('Ei miya Jomano Taka theke beshi taka kemne tulben!!kindly valid input den');
        return;
    }


    if (accountNumber.length === 11) {
        if (pin == 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue('main-balance', sum);

            const container = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerText = `
            cashout ${amount} from this ${accountNumber} account
            `
            container.appendChild(p);

        }
        else {
            console.log("Pin is not valid");
        }

    }
    else {
        console.log("Account number is not valid");
    }

})