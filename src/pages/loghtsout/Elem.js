function Elem(props)
{
    return (
        <div className={props.class} onClick={() => {
            props.elemOnClick(props.index)
        }}></div>
    );
}

export default Elem;