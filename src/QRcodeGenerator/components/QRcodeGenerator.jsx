import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRcodeGenerator = () => {

    const [qrvalue, setQrValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleGenerate = (e) => {
        setInputValue(e.target.value);
    }
    const handleGenerateQR = ()=> {
       setQrValue(inputValue);
       setInputValue('')
    }

  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <input type="text" placeholder="Enter your value" onChange={(e)=>handleGenerate(e)} value={inputValue} />
      <button onClick={handleGenerateQR} disabled={inputValue && inputValue.trim() !== '' ? false : true } >Generate</button>
      <div>
        <QRCode id="value" value={qrvalue} size={400}/>
      </div>
    </div>
  );
};

export default QRcodeGenerator;
