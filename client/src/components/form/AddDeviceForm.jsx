import React, { useState } from "react";
import FormInput from "../UI/input/FormInput";

const AddDeviceForm = ({create}) => {
  const[device, setDevice] = useState(
    {  
      id: '',
      deviceType: '',
      deviceName: '',
      deviceNumber: '',
      userName: '',
      deviceAddTime: '',
    },
  );  


  const addNewDevice = (e) => {
    e.preventDefault();
    const date = new Date();
    const deviceTime = date.toLocaleDateString() + ' ' + date.toLocaleTimeString('en-GB');
    const newDevice = {
        ...device,
        id: Date.now(),
        deviceAddTime: deviceTime,
    }
    create(newDevice);
    setDevice({  
      id: '',
      deviceType: '',
      deviceName: '',
      deviceNumber: '',
      userName: '',
    },)
  }

  return (
    <form>
      <FormInput
        placeholder="Тип устройства"
        type='text'
        value={device.deviceType}
        onChange={(e) => setDevice({...device, deviceType: e.target.value})}
      />
      <FormInput
        placeholder="Название устройства"
        type='text'
        value={device.deviceName}
        onChange={(e) => setDevice({...device, deviceName: e.target.value})}
      />
      <FormInput
        placeholder="Номер устройства"
        type='text'
        value={device.deviceNumber}
        onChange={(e) => setDevice({ ...device, deviceNumber: e.target.value })}
      />
      <FormInput
        placeholder="Имя пользователя"
        type='text'
        value={device.userName}
        onChange={(e) => setDevice({ ...device, userName: e.target.value })}
      />
      <button className="add-btn" onClick={addNewDevice}>Добавить</button>
    </form>
  );
};

export default AddDeviceForm;
