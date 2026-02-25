import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {

  const [fields, setFields] = useState([""]);
  const [qrData, setQrData] = useState("");

  const addField = () => {
    setFields([...fields, ""]);
  };

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const generateQR = () => {
    const data = JSON.stringify({ fields });
    setQrData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        QR Code Generator
      </h1>

      {fields.map((field, index) => (
        <input
          key={index}
          type="text"
          value={field}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Input ${index + 1}`}
          className="border p-2 m-2 rounded w-64"
        />
      ))}

      <button
        onClick={addField}
        className="bg-blue-500 text-white px-4 py-2 rounded m-2"
      >
        Add Field
      </button>

      <button
        onClick={generateQR}
        className="bg-green-500 text-white px-4 py-2 rounded m-2"
      >
        Generate QR
      </button>

      {qrData && (
        <div className="mt-6">
          <QRCodeCanvas value={qrData} size={200} />
        </div>
      )}

    </div>
  );
}

export default App;