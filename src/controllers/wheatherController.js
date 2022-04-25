let axios = require("axios")

const sortedCities = async function(req,res){
    try{
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arrayOfCities = []
        for(let i = 0; i<city.length; i++){
            let obj={city : city[i]}
            let options = {
             method : 'get',
             url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=f65d66c174176e2edd33fa47192bd1ad`
             }
             let result = await axios(options)
            obj.temp = result.data.main.temp
            console.log(obj.temp)
            arrayOfCities.push(obj)
        }
        let sortedTemp = arrayOfCities.sort((a,b)=>{return a.temp - b.temp})
        res.status(200).send({status:true, msg : sortedTemp})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({msg: err.message})
    }
}
module.exports.sortedCities = sortedCities