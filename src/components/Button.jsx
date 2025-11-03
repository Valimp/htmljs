function Button(props) {
    
    function addValue(value) {
        if (value === 0) {
        // reset
        props.setCount(0);
        return;
        }
        if (props.count + value <= 0) {
        // minimum 0
        props.setCount(0);
        } else if (props.count + value >= 10) {
        // maximum 10
        props.setCount(10);
        } else {
        props.setCount(props.count + value);
        }
    }
    
    return (
        <button
            disabled={props.count < 0 || props.count > 10}
            onClick={() => addValue(props.value)}
        >
            {props.label}
        </button>
    )
}

export default Button