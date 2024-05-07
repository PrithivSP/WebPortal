const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

app.use(cors())

mongoose.connect("mongodb+srv://prithivspn:prithivspn@cluster0.3vn6ltw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> {
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
})