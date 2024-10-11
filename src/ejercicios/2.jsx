const SaludoDos = ({nombre, idioma}) =>{
    const traductor = {
        'es': 'Hola',
        'en': 'Hello',
        'fr': 'Bonjour',
        'de': 'Hallo',
        'it': 'Ciao',
        'pt': 'Olá',
        'ru': 'Привет',
    }

    
    return (
        <h1>{traductor[idioma]} {nombre}</h1>
    )
}

export default SaludoDos