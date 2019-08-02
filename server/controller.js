let users = [{
    username : "demo",
    password : "demo"
}]

module.exports = {
    login : (req, res) => {
        const {username, password} = req.body
        // Check if user exist
        let userExist = users.find(element => element.username === username.toLowerCase() & element.password === password);
        if(userExist){
            res.status(200).json(userExist.username)
        }else{
            res.status(500).json({err : "email or password incorrect"})
        }
    },
   
}