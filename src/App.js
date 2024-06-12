import "./App.css";
import Modal from "./Components/Modal";

function App() {
  return (
    <div className="App">
      <Modal
        btnHeight={50}
        btnWidth={100}
        btnBg="green"
        modalHeight={400}
        modalWidth={700}
        modalBg="#2b2b2b"
        iconColor="white"
        textColor="white"
      >
        <div className="App__model_content">
          <p>This is a model</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
