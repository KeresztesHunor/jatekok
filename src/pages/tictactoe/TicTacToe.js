import JatekTer from "./JatekTer";
import { useState } from "react";

function TicTacToe(props)
{
    const [elemek, setElemek] = useState(elemekListaFeltolt(props.model.elemek));
    return (
        <div id="tic-tac-toe" className="jatek">
            <h2>TicTacToe</h2>
            <JatekTer elemek={elemek} elemOnClick={index => {
                if (!props.model.vege && props.model.setElem(index))
                {
                    setElemek(elemekListaFeltolt(props.model.elemek));
                    if (props.model.vege)
                    {
                        console.log("Győztes: " + (props.model.xJon ? "X" : "O"));
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
        LISTA.push((() => {
            switch (elem)
            {
                case 1:
                    return "X";
                case -1:
                    return "O";
                default:
                    return "";
            }
        })());
    });
    return LISTA;
}

export default TicTacToe;