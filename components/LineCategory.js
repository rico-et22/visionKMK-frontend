import Link from 'next/link'
import LineItem from '../components/LineItem'
function LineCategory(props) {
    return (
        <div className='line-category-card'>
            <div className='line-category-header'>
                <div className={`line-category-header-img-wrapper + ${props.css}`}>
                    <img src={`/icons/bus-and-tram/${props.image}.svg`}/>
                </div>
                <h2>{props.strongFirst && <strong>{props.strongFirst + ' '}&nbsp;</strong>}{props.name}{props.strongLast && <strong>&nbsp;{props.strongLast}</strong>}</h2>
            </div>
            <div className='line-category-items'>
                {props.data.map(item => (
                    <LineItem number={item.number} css={item.css}/>
                ))}
            </div>
        </div>
    )
} 

export default LineCategory