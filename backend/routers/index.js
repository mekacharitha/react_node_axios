const express = require('express');
const router = express.Router(); // initialize router 

const {
    getUserDetails,getUsers,
} = require('./api/getUsers');
const {createUser} = require('./api/createUsers');
const {updateUser} = require('./api/updateUsers');
const {validateUser} = require('./api/validateUser');

router.get('/users', getUsers)

router.get('/users/:userId', getUserDetails)

router.post('/users', createUser)

router.post('/login' , validateUser)

router.put('/users/:userId', updateUser)


module.exports = router;