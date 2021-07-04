import PropTypes from 'prop-types'
import Button from "../components/Button"

const renderButtons = onClickNumber => {
    const numeros = [7,8,9,4,5,6,1,2,3,0]
    return numeros.map(numero => <Button text={numero.toString()} type="" clickHandle={onClickNumber} key={numero} />)
}

const Numbers = ({onClickNumber}) => {
    return (
        <section className="numbers">
            {renderButtons(onClickNumber)}
        </section>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers