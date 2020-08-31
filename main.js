const WebSocket = require("websocket").w3cwebsocket
const url = 'ws://[ip from your lightboard]/ws'
const connection = new WebSocket(url)
const rand = () => {
  return Math.floor(Math.random()*255)
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let r
let g
let b

connection.onopen = () => {
    while (true) {
      rl.question('Rainbow[r] Cycle[c] RGB[]'), (answer) => {
        if (answer === "r") {
          connection.send(`connection.send('{"magic": "FLKA","cmd": "RAINBOW", delay: 30}')`)
        }
        else if (answer === "c") {
          connection.send('{"magic": "FLKA","cmd": "CYCLE", delay: 30}')
        }
        else if (answer === "") {
          rl.question('Red: '), (r) => {

          }
          rl.question('Green: '), (g) => {
            
          }
          rl.question('Blue: '), (b) => {
            
          }
          connection.send(`{"magic": "FLKA","cmd": "RGB", "value": ['${r}','${g}','${b}'], delay: 70}`)
        }
        
      }
       

    }

  }


/*
{"magic": "FLKA","cmd": "RGB", "value": ['${r}','${g}','${b}'], delay: 70}
{"magic": "FLKA","cmd": "RAINBOW", delay: 30}
{"magic": "FLKA","cmd": "CYCLE", delay: 30}
*/