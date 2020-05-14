import Link from 'next/link'

function StopList(props) {
    return (
        <div className='stop-list'>
            {props.data.stops.map(stop => (
                stop.border ?
                <StopListBorder/> : !stop.ends ?
                <StopListStopLink stop={stop}/>
                : <StopListStop stop={stop} end/>
            ))}
        </div>
    )
}
function StopListStopLink(props) {
    return (
        <Link href={`/rozklad/[...slug]`} as={`/rozklad/${props.stop.hrefs[0]}/${props.stop.hrefs[1]}/${props.stop.hrefs[2]}`}>
            <a className='stop-list-stop-link'>
                <StopListStop stop={props.stop}/>
            </a>
        </Link>
    )
}
function StopListStop(props) {
    return (
        <div className={`stop-list-stop ${props.end == true ? 'end' : ''}`}>
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
    )
}
function StopListBorder(props) {
    return (
        <div className='stop-list-border'>
            <h3>⚠️ Granica taryf</h3>
        </div>
    )
}
export default StopList