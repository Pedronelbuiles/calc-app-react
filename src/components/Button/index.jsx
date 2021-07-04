import PropTypes from 'prop-types'
import './Button.css'

const Button = ({text, type, clickHandle}) => {
    return (
        <button className={type} onClick={() => clickHandle(text)}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    clickHandle: PropTypes.func.isRequired
}

export default Button