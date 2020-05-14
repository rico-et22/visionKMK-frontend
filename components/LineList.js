import LineCategory from '../components/LineCategory'
function LineList(props) {
    return (
        <div>
            {props.lines[0].length > 0 ? <LineCategory data={props.lines[0]} name='Linie' strongLast='tramwajowe' image='tram' css='tram'/> : ''}
            {props.lines[1].length > 0 ? <LineCategory data={props.lines[1]} name='Linie tramwajowe' strongLast='zastępcze' image='tram' css='tram'/> : ''}
            {props.lines[2].length > 0 ? <LineCategory data={props.lines[2]} name='Linie autobusowe' strongLast='miejskie' image='bus' css='bus'/> : ''}
            {props.lines[3].length > 0 ? <LineCategory data={props.lines[3]} name='Linie autobusowe' strongLast='aglomeracyjne' image='bus' css='bus-regional'/> : ''}
            {props.lines[4].length > 0 ? <LineCategory data={props.lines[4]} name='Linie autobusowe' strongLast='aglomeracyjne przyspieszone' image='bus' css='bus-regional'/> : ''}
            {props.lines[5].length > 0 ? <LineCategory data={props.lines[5]} name='Linie autobusowe' strongLast='miejskie wspomagające' image='bus-black' css='bus-extra'/> : ''}
            {props.lines[6].length > 0 ? <LineCategory data={props.lines[6]} name='Linie autobusowe' strongLast='miejskie przyspieszone' image='bus' css='bus'/> : ''}
            {props.lines[7].length > 0 ? <LineCategory data={props.lines[7]} name='Linie autobusowe' strongLast='miejskie nocne' image='bus' css='night'/> : ''}
            {props.lines[8].length > 0 ? <LineCategory data={props.lines[8]} name='Linie autobusowe' strongLast='tymczasowe' image='bus' css='bus'/> : ''}
            {props.lines[9].length > 0 ? <LineCategory data={props.lines[9]} name='Linie autobusowe' strongLast='specjalne' image='bus' css='bus'/> : ''}
            {props.lines[10].length > 0 ? <LineCategory data={props.lines[10]} name='Linie autobusowe' strongLast='aglomeracyjne nocne' image='bus' css='night-regional'/> : ''}
        </div>
    )
} 

export default LineList