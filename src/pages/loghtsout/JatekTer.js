import Elem from "./Elem";

function JatekTer(props)
{
    return (
        <div className="jatek-ter">{
            props.elemek.map((elem, index) => (
                <Elem key={index} index={index} class={elem} elemOnClick={props.elemOnClick} />
            ))
        }</div>
    );
}

export default JatekTer;