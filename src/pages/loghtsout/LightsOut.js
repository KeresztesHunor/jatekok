import { useState } from "react";
import JatekTer from "./JatekTer";

function LightsOut(props)
{
    const [elemek, setElemek] = useState(props.model.elemek);
    return(
        <div id="lights-out" className="jatek">
            <h2>Lights out</h2>
            <JatekTer elemek={elemek} elemOnClick={index => {
                if (!props.model.vege)
                {
                    props.model.setElemek(index);
                    setElemek(props.model.elemek);
                    if (props.model.vege)
                    {
                        console.log("Nyertél!");
                    }
                }
            }} />
        </div>
    );
}

export default LightsOut;