import { useState } from "react";
import "./App.css";
import Contactform from "./contact-form/Contactform";
import Table from "./Table/Table";
import Preview from "./preview/Preview";


function App() {
  const [preview, setPreview] = useState([]);
  const [previewdata, setPreviewdata] = useState({});


  const valueHandler = (values) => {
    setPreview([...preview, values]);
   
  };

  const previewHandler = (pre) => {
    setPreviewdata(pre);
  };

  return (
    <div className="app">
      <div className="main">
        <Contactform valuehandler={valueHandler} previewHandler={previewHandler} />
        <Preview previewdata={previewdata}/>
      </div>

      <Table pre={preview} />
    </div>
  );
}

export default App;