class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer){
        let customerExists = this.allCustomers.find(c => c.personalId == customer.personalId)
        if(customerExists){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer; 
    }
    
    depositMoney(personalId , amount){
        let customer = this.allCustomers.find(c => c.personalId == personalId);
        if(!customer){
            throw new Error('We have no customer with this ID!');
         }
      
        if(customer.hasOwnProperty('totalMoney')){
           customer.totalMoney += amount;
        }
        else{
            customer.totalMoney = amount;
            customer.transactionInfos = [];
        }

        let message = `${customer.transactionInfos.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`
        customer.transactionInfos.push(message);
        return `${customer.totalMoney}$`;
    }

    withdrawMoney (personalId, amount){
        let customer = this.allCustomers.find(c => c.personalId == personalId);

        if(!customer){
           throw new Error('We have no customer with this ID!');
        }

        if(customer.totalMoney < amount){
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= amount;
        let message = `${customer.transactionInfos.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`
        customer.transactionInfos.push(message);
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId){
        let customer = this.allCustomers.find(c => c.personalId == personalId);
        if(!customer){
            throw new Error('We have no customer with this ID!');
        }

        let result = [];
        let reversedTransactions = customer.transactionInfos.reverse();

        result.push(`Bank name: ${this._bankName}`, 
                    `Customer name: ${customer.firstName} ${customer.lastName}`,
                    `Customer ID: ${customer.personalId}`,
                    `Total Money: ${customer.totalMoney}$`, 
                    'Transactions:'
        );
        for (const transaction of reversedTransactions) {
            result.push(transaction);
        }
         return result.join("\n").trim();
    }
}



let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
