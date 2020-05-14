export default function TTHTMLTable(props) {
    return (
        <div dangerouslySetInnerHTML={{__html:props.data}} className='tt-html-table'/>
    )
}