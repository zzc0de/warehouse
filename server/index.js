const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const DeviceModel = require('./models/Device');
const port = 5001;
const dbUrl = 'mongodb+srv://zzc0de:12345678910@digitalcluster.chauh.mongodb.net/warehouse?retryWrites=true&w=majority'


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/read', async(req, res) => {
    DeviceModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
});

app.post('/insert', async(req, res) => {
    const deviceType = req.body.deviceType;
    const deviceName = req.body.deviceName;
    const deviceNumber = req.body.deviceNumber;
    const userName = req.body.userName;
    const deviceAddTime = req.body.deviceAddTime;

    const device = new DeviceModel({
        deviceType: deviceType,
        deviceName: deviceName,
        deviceNumber: deviceNumber,
        userName: userName,
        deviceAddTime: deviceAddTime,
    })
    try {
        await device.save();
        console.log('Device data has been sent');
    } catch (error) {
        console.log(`There is an error ${error}`);
    }
});

const start = async() => {
    try {
        app.listen(port, () => console.log('The server is running on 5001 port'))
    } catch (error) {
        console.log(error)
    }
}
start()