const models = require('../../models')

async function createUser (req, res, next) {
    try {
        const user = await models.Users.create(req.body ,
                {
                    // attributes:{
                    //     exclude:['password']
                    
                    // fields: ['id','userName', 'email']
                    }
                )
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404),json({error})
    }
}
module.exports = {
    createUser,
}