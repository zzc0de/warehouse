import DeviceModel from '../models/Device.js';
import { ObjectId } from 'mongodb';

export const getDevices = async(req, res) => {
    DeviceModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            const total = result.length
            res.set('X-Total-Count', total);
            res.send(result);
        }
    })
}

export const getDevice = async(req, res) => {
    const id = new ObjectId(req.params.id);
    DeviceModel.find({ _id: id }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
}

export const createDevice = async(req, res) => {
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
}

export const deleteDevice = async(req, res) => {
    const id = req.params.id;
    try {
        await DeviceModel.findByIdAndRemove(id).exec();
        res.send({
            id: id,
        })

    } catch (error) {
        console.log(error)
    }
}


export const updateDevice = async(req, res) => {
    const id = req.params.id;
    const deviceType = req.body.deviceType;
    const deviceName = req.body.deviceName;
    const deviceNumber = req.body.deviceNumber;
    const userName = req.body.userName;
    const deviceAddTime = req.body.deviceAddTime;

    const rewriteUpdateData = DeviceModel.findByIdAndUpdate(id, {
        deviceType: deviceType,
        deviceName: deviceName,
        deviceNumber: deviceNumber,
        userName: userName,
        deviceAddTime: deviceAddTime,
    }, () => {
        try {
            rewriteUpdateData.update();
            res.send({
                id: id,
                deviceType: deviceType,
                deviceName: deviceName,
                deviceNumber: deviceNumber,
                userName: userName,
                deviceAddTime: deviceAddTime,
            })
        } catch (error) {
            console.log(error)
        }
    })
}