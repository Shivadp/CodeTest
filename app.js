const express = require('express')
const app = express()
const port = 3000

 app.get('/', (req, res) => {
     
    let button = "<a href='/print'>Click here to start</a>"
    return res.send(button)
 })

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.get('/print', (req, res) => {
    
    let output = ""
    for(let i =1; i<= 100; i++){
        
        if( i % 3  == 0 && i % 2 == 0){
           output = output + "<i>The number '" + i + "' is divisible by both two and three</i><br />" 
        }
        else if( i % 3  == 0){
            output = output + "<i>The number '" + i + "' is divisible by three</i><br />" 
        }
        else if(i % 2 == 0){
            output = output + "<i>The number '" + i + "' is even</i><br />" 
        }
        else{
            output = output + "<i>The number '" + i + "' is odd</i><br />" 
         }
    }

    return res.send(output)
})