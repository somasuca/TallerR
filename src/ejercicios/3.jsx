const Contenedor = (props) =>{
    return (
        <div className="contenedor" style={{border:'1px solid #000' }}>
                {props.children}
        </div>
    )
}

export default Contenedor