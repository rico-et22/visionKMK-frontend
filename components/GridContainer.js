export function GridContainer(props) {
    return (
        <div className='grid-container'>
            {props.children}
        </div>
    )
} 
export function Left(props) {
    return (
        <div className='left'>
            {props.children}
        </div>
    )
}
export function Right(props) {
    return (
        <div className='right'>
            {props.children}
        </div>
    )
}