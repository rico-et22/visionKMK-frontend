import ModalHeader from './ModalHeader'
import ModalBodyLocker from './ModalBodyLocker'
import {useEffect} from 'react'
import LegendModalItem from './LegendModalItem'
function LegendModal(props) {

    if (!props.open) {
        return null;
    }
    return (
        <ModalBodyLocker open={props.open}>
        <div className='modal-wrapper'>
            <div className='modal-card'>
                <ModalHeader title='Legenda' closeSwitcher={props.closeSwitcher}/>
                <LegendModalItem boxClass='linia' mockText='100' description='Normalna linia (obsługiwana taborem niskopodłogowym)'/>
                <LegendModalItem boxClass='liniaZ' mockText='100' description='Nowa linia lub linia, dla której nastąpiła zmiana rozkładu jazdy'/>
                <LegendModalItem boxClass='liniaO' mockText='100' description='Linia, która czasowo kursuje po zmienionej trasie'/>
                <LegendModalItem boxClass='liniaNZ' mockText='100' description='Linia, która czasowo kursuje po zmienionej trasie, bez zmiany rozkładu jazdy - należy zapoznać się z ' linkName='komunikatem' linkHref='http://mpk.krakow.pl/pl/import-komunikaty/'/>
                <LegendModalItem boxClass='liniaN' mockText='600' description='Linia nocna'/>
            </div>
        </div>
        </ModalBodyLocker>
    )
} 

export default LegendModal