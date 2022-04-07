const a = new Date()
const printDate = function printDate(){
    return 'Date is', a.getDate()
} 

const printMonth = function printMonth(){
   return 'Month is',a.getMonth()+1
}

const batchInfo = function(){
    return ('Uranium', ' ' + printDate() + '/'+ printMonth() + ' '+ 'the topic for today is Nodejs module system')

}

module.exports = {printDate, printMonth, batchInfo}