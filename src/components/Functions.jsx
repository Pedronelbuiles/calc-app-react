import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => {
    return (
        <section className="functions">
            <Button text="clear" type="button-long-text" clickHandle={onContentClear} />
            <Button text="&larr;" type="" clickHandle={onDelete} />
        </section>
    )
}

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions