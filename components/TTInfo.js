function TTInfo(props) {
    return (
            <div className={`tt-info ${props.side ? 'side' : ''} ${props.mobile ? 'mobile' : ''}`}>
                <button onClick={props.TTTimeSwitcher}>
                    <img src='/icons/TTInfo/clock-outline.svg'/>
                    Ostatnia aktualizacja: {props.data[0]}
                    </button>
                <button onClick={props.legendSwitcher}>
                    <img src='/icons/TTInfo/information.svg'/>
                    Legenda
                </button>
            </div>
        )
} 

export default TTInfo