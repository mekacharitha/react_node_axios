const models = require('../../models')

// async function validateUser(req,res,next)
// {
//     const user=req.body.userName
//     const pass=req.body.password
//     const user1 = await models.Users.findOne({
//         where: {
//             userName:user,
//             password:pass
//         }
//     })
//     // res.status(200).json({
//     //     user1
//     // })
//     if(user1!=null){
//         res.status(200).json(
//             `WELCOME! ${user1.userName}`
//         )}
//     else{
//         res.status(200).json(
//             "Incorrect Username or password ! Enter valid credentials")
//     }
    
// }

const jwt = require('jsonwebtoken');
const passport = require('passport');
//require('../config/passport')(passport);

function validateUser(req,res,next)
{
    const user =models.Users
      .findOne({
        where: {
          userName: req.body.userName,
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(401).send({
            message: 'Authentication failed. User not found.',
          });
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
          if(isMatch && !err) {
            var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
            jwt.verify(token, 'nodeauthsecret', function(err, data){
              //console.log(err, data);
            })
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        })
      })
      .catch((error) => res.status(400).send(error));
};

module.exports = {
    validateUser,
}