
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Limonadacerezada from './components/Limonadacerezada';
import Limonadadecoco from './components/Limonadadecoco';
import Limonadafutosrojos from './components/Limonadafutosrojos';
import Limonadamangobiche from './components/Limonadamangobiche';
import Limonadanatural from './components/Limonadanatural';
import Navegacion from './components/Navegacion';


// import limonadanatural from './components/limonadanatural';

function App() {
  return (
    

    <Router>
      <div className="container">
        <h1 className="text-center my-5 text-white">Galeria</h1>


        <Route path="/cereza" component={Limonadacerezada} />
        <Route path="/coco" component={Limonadadecoco} />
        <Route path="/frutos" component={Limonadafutosrojos} />
        <Route path="/mango" component={Limonadamangobiche} />
        <Route path="/natural" component={Limonadanatural} />
      
      
        <Navegacion/>

      </div>


    </Router>
  );
}

export default App;
