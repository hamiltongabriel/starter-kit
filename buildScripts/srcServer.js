import express from 'express'
import path from 'path'
import open from 'open'

const port = 3000;
const app = express();

app.get('/', function (req, res) {
    // __dirname means the directory that is currently running, doing a join with the index.
    res.sendFile(path.join(__dirname, `../src/index.html`))
});
app.listen(port, function (err) {
    if(err){
        return console.log(err);
    } else {
        open('http://localhost:' + port)
    }

})
