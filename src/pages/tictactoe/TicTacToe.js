import JatekTer from "./JatekTer";
import { useState } from "react";

function TicTacToe(props)
{
    const [elemek, setElemek] = useState(props.model.elemek);
    return (
        <div id="tic-tac-toe" className="jatek">
            <h2>TicTacToe</h2>
            <JatekTer elemek={elemek} elemOnClick={index => {
                if (!props.model.vege && props.model.setElem(index))
                {
                    setElemek(props.model.elemek);
                    if (props.model.vege)
                    {
                        console.log("Győztes: " + (props.model.xJon ? "X" : "O"));
                    }
                }
            }} />
        </div>
    );
}

export default TicTacToe;