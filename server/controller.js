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
            req.session.user = {
                username : userExist.username
            }
            res.status(200).json(req.session.user)
        }else{
            res.status(500).json({err : "email or password incorrect"})
        }
    },
    getSession : async (req,res) => {
        if(!req.session.user){
            req.session.user ={
                username : ""
            }
        }
        res.json(req.session.user)
    },
    signOut : async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200)
    }
   
}