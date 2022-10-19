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

io.on("connection", (socket) => {
    console.log("Connected: " + socket.id);

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
        io.to(socket.id).emit('result', res);
    })
    socket.on("upload", (file) => {
        /*async function asyncReadFile(filename) {
            try {
                const contents = await fsPromises.readFile(filename, 'utf-8');

                const arr = contents.split(/\r?\n/);

                console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

                return arr;
            } catch (err) {
                console.log(err);
            }
        }
        asyncReadFile(file);*/
        console.log(file);
    })

})