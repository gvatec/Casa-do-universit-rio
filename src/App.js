import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterApp from "./services/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="App">
     
          <BrowserRouter>
            <ToastContainer autoClose={2000} position="top-center"></ToastContainer>
            <RouterApp></RouterApp>
          </BrowserRouter>
        
     
    </div>
  );
}

export default App;


