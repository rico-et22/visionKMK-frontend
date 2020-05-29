import {StopListHeader} from './StopList'
export default function TTHTMLTableContainer(props) {
    return (
        <div className='tt-html-table-container'>
            <TTHTMLHeader data={props.data}/>
            <TTHTMLTable table={props.data.html}/>
        </div>
    )
}
function TTHTMLHeader(props) {
    return (
        <div className='tt-html-table-header'>
            <div class='mobile-only'>
                <StopListHeader data={props.data}/>
            </div>
            <div className='tt-html-table-header-stop-name'>
                <h3>{props.data.info.currentStop.name}</h3>
                {props.data.info.currentStop.requestStop == true ? <span className='on-request-mark'>NŻ</span> : null}
            </div>
        </div>
    )
}
function TTHTMLTable(props) {
    return (
        <div dangerouslySetInnerHTML={{__html:props.table}} className='tt-html-table'/>
    )
}