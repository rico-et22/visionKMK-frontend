function LegendModalItem(props) {

    return (
        <div className='legend-modal-item'>
            <div className={`line-item ${props.boxClass}`}>
                {props.mockText}
            </div>
            <p>{props.description}{props.linkHref && props.linkName ? <a href={props.linkHref}>{props.linkName}</a> : props.linkHref && props.linkName != null ? <a href={props.linkHref}>{props.linkHref}</a> : ''}</p>
        </div>
    )
} 

export default LegendModalItem