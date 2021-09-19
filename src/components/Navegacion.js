import React from 'react'
import { Link} from "react-router-dom";
import LimonadaCerezada3 from '../images/limonadacerezada.jpg'
import LimonadaDeCoco3 from '../images/limonadadecoco.jpg'
import LimonadaDeFrutos3 from '../images/limonadafrutosrojos.jpg'
import LimonadaNatural3 from '../images/limonadanatural.jpg'
import LimonadaMangoBi3 from '../images/limonadamangobiche.jpg'

const Navegacion = () => {
    return (
        <div className = "mt-3 padre p-0">
            <div className="row justify-content-center w-100 mt-5">
                <Link to="/cereza" className="col center links">
                    <figure className="text-center">
                        <img src ={LimonadaCerezada3} alt="" className="tamaño-img"/>
                        <figcaption> Limonada Cereza</figcaption>
                    </figure>
                </Link>
                <Link to="/coco" className="col links">
                    <figure className="text-center">
                        <img src ={LimonadaDeCoco3} alt="" className="tamaño-img"/>
                        <figcaption> Limonada Coco</figcaption>
                    </figure>
                </Link>     
                <Link to="/frutos" className="col links">
                    <figure className="text-center">
                        <img src ={LimonadaDeFrutos3} alt="" className="tamaño-img"/>
                        <figcaption> Limonada Frutos</figcaption>
                    </figure>
                </Link>  
                <Link to="/mango" className="col links">
                    <figure className="text-center">
                        <img src ={LimonadaMangoBi3} alt="" className="tamaño-img"/>
                        <figcaption> Limonada Mango</figcaption>
                    </figure>
                </Link>     
                <Link to="/natural" className="col links">
                    <figure className="text-center">
                        <img src ={LimonadaNatural3} alt="" className="tamaño-img"/>
                        <figcaption> Limonada Natural</figcaption>
                    </figure>
                </Link>   
            </div>                          
        </div>
    )
}

export default Navegacion
