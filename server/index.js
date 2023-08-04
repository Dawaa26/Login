// our dependecies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())
// let us run the server
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

// let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //if you have set xampp password please
    database: 'plantdb',
})

// let us now create a route to the server that will
app.post('/register', (req, res)=>{
    // we need to get variabies sent from the inputs
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // lets create SQL statement to insert the user to the DAtabase table Users
    const SQL = 'INSERT INTO Users (email, username, password) VALUES (?,?,?)' 
    const Values = [sentEmail, sentUserName, sentPassword]

    //Query to execute then sql statement
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted succcessdully!')
            res.send({message: 'User added!'})
            //
        }
    })
})
//now we need to login with credentials from a registered User
app.post('/login', (req, res)=>{
    
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    // lets create SQL statement to insert the user to the DAtabase table Users
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?' 
    const Values = [sentloginUserName, sentLoginPassword]
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials Don't match!`})
        }
    })
})