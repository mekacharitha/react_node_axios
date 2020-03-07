const models = require('../../models')

async function updateUser (req, res, next) {
    try {
        const user = await models.Users.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
        updateUser,
}