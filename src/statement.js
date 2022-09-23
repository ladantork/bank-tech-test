class Statement{
    #currentDate(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    printStatement(log){
        let format = 'date || credit || debit || balance\n';
        const activities = log.reverse();
        
        for(let i = 0 ; i < activities.length; i++){
            if (activities[i].credit == 0.0){
                activities[i].credit = '';
            } else if (activities[i].debit == 0.0){
                activities[i].debit = '';
            }
            format = format.concat(
                this.#currentDate(activities[i].date)+
                ' || ' +
                activities[i].credit+
                ' || ' +
                activities[i].debit+
                ' || ' +
                activities[i].balance+
                '\n'
            );
        }
        return format;
    }
}
module.exports = Statement;
