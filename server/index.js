const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const ytdl = require('ytdl-core')
// const connection = require('./db')
const mongoose = require('mongoose');

const app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

mongoose.connect("mongodb+srv://indujanyogeswaran:1024webflow@web-flow.x8gyun8.mongodb.net/?retryWrites=true&w=majority&appName=web-flow", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

const UserHistoryModel = new mongoose.Schema({
    query: String,
    engine: String
})

const HistoryModel = mongoose.model("history", UserHistoryModel)


app.get('/ytdownload', async (req, res) => {
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

app.post("/search", async (req, res) => {
    try {
      if (!req.body.searchInput || !req.body.searchEngineInput) {
        return res.status(400).json({ error: 'Missing required fields: searchInput and searchEngineInput' });
      }
      const newHistory = new HistoryModel({
        query: req.body.searchInput,  // Access data using destructuring
        engine: req.body.searchEngineInput
      });
      await newHistory.save();
      res.status(201).json(newHistory); // Send the created document
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

app.get('/history', async (req, res) => {
    try {
        const hist = await HistoryModel.find();

        if (hist.length === 0) {
            return res.json([]);
        }

        const histData = hist.map(search => ({
            query: search.query,
            engine: search.engine
        }));

        res.json(histData);
    } catch (error) {
        console.error('Error fetching data');
        res.status(500).json({
            error: 'Error fetching history'
        });
    }
})

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}...`)
})