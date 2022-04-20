

const isFreeAppUser = async function(req,res,next){
    let freeappuser = req.headers.isfreeappuser
    if(freeappuser){
        next()
    }else {
        res.send({err: "The Mandatory header not present, user can't be created"})
    }
}

module.exports.isFreeAppUser = isFreeAppUser