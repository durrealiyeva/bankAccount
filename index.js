const bankAccount = {
  balance: 0,
  amountEntered: 0,
  amountDrawn: 0,
  transactions: [],
  deposit: function (money) {
    this.amountEntered +=  money;
    alert(`Deposited: ${money}₼`);
    this.balance += money;
    this.transactions.push(`+${money}₼`);
    this.updateBalance();
  },
  withdraw: function (money) {
    if (this.balance < money) {
      alert("Not enough balance to withdraw!");
    } else {
      this.amountDrawn -=  money;
      alert(`Withdrew: ${money}₼`);
      this.balance -= money;
      this.transactions.push(`${-money}₼`);
      this.updateBalance();
    }
  },
  viewTransactionsHistory: function () {
    alert(`Transaction history: ${this.transactions.join(",")}`);
  },
  updateBalance: function () {
    const balanceEl = document.querySelector("#balance");
    balanceEl.innerHTML = this.balance;
  },
};

const depositEl = document.querySelector("#deposit");
const withdrawEl = document.querySelector("#withdraw");
const historyEl = document.querySelector("#history");

depositEl.onclick = () => {
  const mani = Number(prompt("Enter the amount to deposit"));
  bankAccount.deposit(mani);
};
withdrawEl.onclick = () => {
  const mani = Number(prompt("Enter the amount to deposit"));
  bankAccount.withdraw(mani);
};
historyEl.onclick = () => {
  bankAccount.viewTransactionsHistory();
};
