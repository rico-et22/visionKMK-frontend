import {useEffect} from 'react'
import ModalBodyLocker from './ModalBodyLocker'
import ModalHeader from './ModalHeader'
function TTTimeModal(props) {

    if (!props.open) {
        return null;
    }
    return (
        <ModalBodyLocker open={props.open}>
            <div className='modal-wrapper'>
                <div className='modal-card'>
                    <ModalHeader title='Data rozkładu' closeSwitcher={props.closeSwitcher}/>
                    <p>Ostatnia aktualizacja: {props.data[0]}</p>
                    {props.data[1] ? <p>Zmiana rozkładu jazdy od: {props.data[1].map((date, index) => <span key={index}>{date}{index < props.data[1].length - 1 ? ',\u00A0' : ''}</span>)}</p> : ''}
                </div>
            </div>
        </ModalBodyLocker>
    )
} 

export default TTTimeModal