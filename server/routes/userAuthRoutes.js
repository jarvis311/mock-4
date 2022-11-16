const router = require('express').Router()
const userauthController = require('../controller/userAuthController')

router.post('/sign-up', userauthController.userSignUp)
router.post('/sign-in', userauthController.userSingIn)
module.exports = router
