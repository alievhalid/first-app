

function Button(props) {



    return (
        <div className='card-button'>
            <button className='btn' disabled={props.bought} onClick={() => props.setBought(props.ide)}>
             {props.bought ? "Добавлено в корзину" : "Добавить в корзину"}
            </button>
        </div>
        
    )
}
export default Button;