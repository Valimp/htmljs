function Titre(props) {
    return (
        <h2
         className={props.isDark ? 'dark-title' : 'light-title'}
        >{props.texte}</h2>
    )
}

export default Titre;