import Link from 'next/link'
import LineNumber from '../components/LineNumber'
export default function StopList(props) {
    return (
        <div className={`stop-list ${props.side ? 'side' : ''}`}>
            <StopListHeader data={props.data}/>
            <StopListStops stops={props.data.stops} activeStop={props.activeStop}/>
        </div>
    )
}
export function StopListHeader(props) {
    return (
        <div className='stop-list-header'>
            <LineNumber data={props.data}/>
            <p className='stop-list-header-routeinfo'>{props.data.info.from} — <span>{props.data.info.to}</span></p>
        </div>
    )
}
export function StopListStops(props) {
    return (
        <ul className='stop-list-stops'>
            {props.stops.map((stop, index) => (
                stop.border ?
                <StopListBorder/> : !stop.ends ?
                <StopListStop stop={stop} active={props.activeStop == stop.hrefs[2] ? true : false} first={index == 0 ? true : false}/>
                : <StopListStop stop={stop} end/>
            ))}
        </ul>
    )
}
export function StopListStop(props) {
    if (props.first) {
        return (
            <div className={`stop-list-stop first ${props.active ? 'active' : ''}`}>
                <Link href={`/rozklad/[...slug]`} as={`/rozklad/${props.stop.hrefs[0]}/${props.stop.hrefs[1]}/${props.stop.hrefs[2]}`}>
                    <a className='stop-list-stop-link'>
                        <div className='stop-list-stop-container'>
                        <div className='left'>
                            <img src='/icons/stop-list/first-stop-circle.svg'/>
                            <h3>
                                {props.stop.name}
                            </h3>
                            {props.stop.requestStop == true ? <div className='stop-list-stop-request'><span>NŻ</span></div> : ''}
                        </div>
                        <div>
                            
                        </div>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
    else if (props.end) {
        return (
            <div className={`stop-list-stop end ${props.active ? 'active' : ''}`}>
                <div className='stop-list-stop-container'>
                <div className='left'>
                    <img src='/icons/stop-list/last-stop-circle.svg'/>
                    <h3>
                        {props.stop.name}
                    </h3>
                    {props.stop.requestStop == true ? <div className='stop-list-stop-request'><span>NŻ</span></div> : ''}
                </div>
                <div>
                    
                </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={`stop-list-stop ${props.active ? 'active' : ''}`}>
                <Link href={`/rozklad/[...slug]`} as={`/rozklad/${props.stop.hrefs[0]}/${props.stop.hrefs[1]}/${props.stop.hrefs[2]}`}>
                    <a className='stop-list-stop-link'>
                        <div className='stop-list-stop-container'>
                        <div className='left'>
                            <img src='/icons/stop-list/stop-circle.svg'/>
                            <h3>
                                {props.stop.name}
                            </h3>
                            {props.stop.requestStop == true ? <div className='stop-list-stop-request'><span>NŻ</span></div> : ''}
                        </div>
                        <div>
                            
                        </div>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }
}
export function StopListBorder(props) {
    return (
        <div className='stop-list-border'>
            <h3>⚠️ Granica taryf</h3>
        </div>
    )
}