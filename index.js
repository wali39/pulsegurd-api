const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connect");
const patient = require("./model/patient");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("ok");
})

app.post('/api/v1/user', (req, res) => {
    let { name, age } = req.body;
    console.log(req.body);
    res.json({ 'status': 200, 'data': req.body });

})
let status = true;
app.post("/api/v1/status", (req, res) => {
    status = req.body.status;
    res.json({ 'status': 200, 'data': status });
})
app.get("/api/v1/status", (req, res) => {
    res.json({ 'status': 200, 'data': status });
})

app.post('/api/v1/sens', (req, res) => {
    // const { heartbeat, spo2, ecg } = req.body;
    if (status) {
        const patientdata = new patient({
            heartbeat: req.body.heartbeat,
            spo2: req.body.spo2,
            ecg: req.body.ecg
        })
        patientdata.save().then(() =>
            res.status(200).json({
                success: true,
                data: patientdata
            })).then((err) => console.log());
        // status = false;
    } else {
        res.json({ sucess: false, data: [] })
    }





})



const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server started at port ${PORT}`)
    } catch (err) {
        console.log(err)
    }
})

