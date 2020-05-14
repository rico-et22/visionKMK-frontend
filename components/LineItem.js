import Link from 'next/link'
function LineItem(props) {
    return (
        <Link href='/linia/[number]' as={`/linia/${props.number}`}>
            <a className={`line-item ${props.css}`}>
                {props.number}
            </a>
        </Link>
    )
} 

export default LineItem