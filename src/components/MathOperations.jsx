import PropTypes from 'prop-types'

import Button from './Button'

const renderButtons = (onClickOperation, onClickEqual) => {
    const simbols = ["+","-","*","/","="]
    return simbols.map(simbol => <Button text={simbol}  type="" clickHandle={simbol === "=" ? onClickEqual : onClickOperation} key={simbol} />)
}

const MathOperations = ({onClickOperation, onClickEqual}) => {
    return (
        <section className="math-operations">
            {renderButtons(onClickOperation, onClickEqual)}
        </section>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations