import { useState } from "react";
import JatekTer from "./JatekTer";

function LightsOut(props)
{
    const [elemek, setElemek] = useState(elemekListaFeltolt(props.model.elemek));
    return(
        <div id="lights-out" className="jatek">
            <h2>Lights out</h2>
            <JatekTer elemek={elemek} elemOnClick={index => {
                if (!props.model.vege)
                {
                    props.model.setElemek(index);
                    setElemek(elemekListaFeltolt(props.model.elemek));
                    if (props.model.vege)
                    {
                        console.log("Nyertél!");
                    }
                }
            }} />
        </div>
    );
}

function elemekListaFeltolt(elemek)
{
    const LISTA = [];
    elemek.forEach(elem => {
        LISTA.push(elem ? "on" : "off");
    });
    return LISTA;
}

export default LightsOut;