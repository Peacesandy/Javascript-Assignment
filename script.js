const User = alert('Welcome to Fidelity Bank')
const User1 = prompt('Enter your 4 digit pin')
const User2 = prompt(`Choose Account Type
1. Savings
2. Current`)

if(User2 == 1){
    let option = prompt(`Select one of the following transactions
    1. Transfer
    2. Withdrawal
    3. QuickTeller
    4. PayArena
    5. Check balance
    6. Airtime
    7. Paybills`)

    if (option == 1) {
     prompt('Enter Destination Account Number')
    } else if (option == 2){
       prompt('Enter Amount')
    }else if (option == 3){
        prompt('Select Transaction')
    }else if (option == 4){
        prompt('Paybills')
    }else if(option == 5){
        prompt('Enter Account Number')
    }else if (option == 6){
        prompt('Enter Network')
    }else if(option == 7){
        prompt(`Choose Type of Bill
        1. Electricity
        2. Tariff
        3. Tax`)
    }else{
        alert('Unknown Transaction')
    }
}else if(User2 == 2){
  let Transaction =  prompt(`Choose a transaction
    1. Transfer
    2. Withdrawal`)
}



