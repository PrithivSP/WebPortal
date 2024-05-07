const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const ytdl = require('ytdl-core')

const app = express()
app.use(bodyparser.json())
app.use(cors())

/* mongoose.connect("mongodb+srv://prithivspn:prithivspn@cluster0.3vn6ltw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> {
    console.log("connection made");
})

const db = mongoose.connection;

const historyModel = new mongoose.Schema({
    query: String,
    engine: String,
})

const HistoryModel = mongoose.model("history", historyModel);

app.post('/search', async (req, res) => {
    try {

    } catch (e) {

    }
})

app.listen('8001', () => {
    console.log("Running server")
}) */

app.get('/download', async (req, res) => {
    try {
        const url = req.query.url
        const videoId = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)
        let data = {
            url: 'https://www.youtube.com/embed/'+videoId,
            info: metaInfo.formats
        }
        return res.send(data)
    } catch(error) {
        return res.status(500)
    }
})

app.listen(4000, () => {
    console.log(`Server is running on PORT: 4000`)
})