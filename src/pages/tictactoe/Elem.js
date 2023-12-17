function Elem(props)
{
    return (
        <div onClick={() => {
            props.elemOnClick(props.index)
        }}>
            <p>{props.tartalom}</p>
        </div>
    );
}

export default Elem;