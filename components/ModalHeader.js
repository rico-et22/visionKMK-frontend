function ModalHeader(props) {

    return (
        <div className='modal-header'>
            <h2>{props.title}</h2>
            <button onClick={props.closeSwitcher}>
                <img src='/icons/close.svg'/>
            </button>
        </div>
    )
} 

export default ModalHeader