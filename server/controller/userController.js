const UsersData = require('../model/userdataModel')


exports.AddUsersData = async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const age = req.body.age
    const dob = req.body.dob
    const gender = req.body.gender
    const role = req.body.role
    const checked = req.body.checked

    const users = new UsersData({
        username:username,
        email:email,
        age:age,
        dob:dob,
        gender:gender,
        role:role,
        checked:checked
    })
    try {
        const response = await users.save()
        res.send(response)
        
    } catch (error) {
        console.log(error)
    }
}

exports.getAllUser = async(req, res) => {
    const findUsers = await UsersData.find()
    if(findUsers.length < 0){
        res.json('User data is not available')
    }else{
        res.json(findUsers)
    }
}

exports.updateUserdata = (req,res) => {
    const username = req.body.username
    const email = req.body.email
    const age = req.body.age
    const dob = req.body.dob
    const gender = req.body.gender
    const role = req.body.role
    const userId = req.params.userId

    UsersData.findById(userId).then(user => {
        user.username = username,
        user.email = email,
        user.age = age,
        user.dob = dob,
        user.gender = gender,
        user.role = role

        user.save().then(response => {
            res.json(response)
        })
    }).catch(error => {
        res.json('Error:',error)
    })

}

exports.fetchSingleUserData = async(req, res) => {
    const userId = req.params.userId
    try {
        const response = await UsersData.findById(userId)
        res.json(response)  
        
    } catch (error) {
        console.log(error)
    }
} 

exports.deleteUserData = (req, res) => {
    const userId = req.params.userId
    UsersData.findByIdAndRemove(userId).then(() => {
        res.json('UserData is deleted')
    }).catch(error => {
        res.json({Message: 'something went wrong..', Error: error})
    })
}