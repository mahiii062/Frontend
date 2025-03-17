document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueByID('amount');
    const pin = getInputValueByID('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance');

    const selectedBank = document.getElementById('allbank').value;
    console.log(selectedBank);

    if (amount < 0) {
        alert('Eita hobe na vai!! Positive Amount Dite Hobe.')
        return;
    }

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText = sum;
            setInnerTextByIDandValue('main-balance', sum);

            const container = document.getElementById('transaction-container');

            const div = document.createElement('div');
            div.classList.add('bg-red-400');
            div.innerHTML = `
            <h1 class="text-yellow-300">Added Money from ${selectedBank}</h1>
            <h3>${amount}</h3>
            <p>Account number: ${account}</p>
            `
            container.appendChild(div);

        }
        else {
            alert("Enter a valid pin");
        }
    }
    else {
        alert("AC number is not correct");
    }
})