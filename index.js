const bankAccount = {
  balance: 0,
  transactions: [],
  deposit: function (money) {
   if(money>0){
    this.balance += money
    this.transactions.push({
      type: "Deposit",
      amount: money,
      balance: this.balance,
    })
   }
    this.updateBalance();
  },
  withdraw: function (money) {
   if(money>0 && money<=this.balance){
    this.balance -= money
    this.transactions.push({
      type: "Withdraw",
      amount: money,
      balance: this.balance,
    })
   }
    this.updateBalance();
  },
  updateBalance: function () {
    const balanceEl = document.querySelector("#balance");
    balanceEl.innerHTML = this.balance;

    const transactions = document.querySelector("#transaction tbody");
    transactions.innerHTML = this.transactions
    .map(
      (el) => 
      ` <tr>
             <td>${el.type}</td>
             <td>${el.amount}</td>
             <td>${el.balance}</td>
           </tr>
           `
    )
    .join('')
  }
}

const depositEl = document.querySelector("#deposit");
const withdrawEl = document.querySelector("#withdraw");
const depositBtnEl = document.querySelector("#depositBtn");
const withdrawBtnEl = document.querySelector("#withdrawBtn");

depositBtnEl.onclick = () => {
  const depositAmount = Number(depositEl.value);
  bankAccount.deposit(depositAmount);
  depositEl.value=''
  
}
withdrawBtnEl.onclick = () => {
  const withdrawAmount = Number(withdrawEl.value);
  bankAccount.withdraw(withdrawAmount);
  withdrawEl.value = ''
}
