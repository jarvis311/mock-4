const router = require('express').Router()
const usercontroller = require('../controller/userController')
const checkIsAuth = require('../middleware/isAuth')


router.post('/new-user', usercontroller.AddUsersData)
router.get('/get-user',usercontroller.getAllUser)
router.post('/edit-user/:userId', usercontroller.updateUserdata)
router.delete('/delete-user/:userId', usercontroller.deleteUserData)
router.get('/get-single-user/:userId', usercontroller.fetchSingleUserData)

module.exports = router