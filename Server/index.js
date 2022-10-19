const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const {sort9_A, sortA_9, CountOfLetters_AlotFirst, CountOfLetters_LowFirst} = require("./calcString");
const {readFileSync, promises: fsPromises} = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 1040;

const server = app.listen(PORT, () =>
    console.log(`Server started on ${PORT}`)
);

const io = socket(server, {
    cors: {
        origin: "*",
        credentials: true,
    },
});
const fs = require('fs');
async function writeFile(content) {
    try {
        await fs.appendFile('info.txt', content, err => {});
    } catch (err) {
        console.log(err);
    }
}
const composeWriteFile = (socketId,message) => {
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    const stringFile = `${Line}: User with socketId: ${socketId} ${message} at ${today.toUTCString()} \n`
    writeFile(stringFile);
    Line++;
}
let Line = 0;
io.on("connection", (socket) => {
    console.log("Connected: " + socket.id);
    composeWriteFile(socket.id, 'successfully CONNECTED')
    socket.on('Who', ()=> {
        console.log(`
            Автор: Корнієнко Олександр,
            Група: К-25,
            Варіант: 15,
            Назва задачі: Сортування рядків.
        `)
        composeWriteFile(socket.id, 'successfully send emit "Who"')
    })

    socket.on('updateString', ({str,key,split, join, register})=>{
        let res = str;
        switch (key) {
            case "Asc":
                res = sortA_9(str, split, join, register);
                break;
            case "Des":
                res = sort9_A(str, split, join, register);
                break;
            case "Low count first":
                res = CountOfLetters_LowFirst(str, split, join);
                break;
            case "A lot of count first":
                res = CountOfLetters_AlotFirst(str, split, join);
                break;
            case "Reverse" :
                res = str.split(split).reverse().join(join);
            default:
                break;
        }
        composeWriteFile(socket.id, 'successfully send emit "updateString"')
        io.to(socket.id).emit('result', res);
    })
    socket.conn.on("close", (reason) => {
        console.log(`Disconnected: ${socket.id}`)
        composeWriteFile(socket.id, 'Disconnected"')
    });
})