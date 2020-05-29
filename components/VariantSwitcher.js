import Link from 'next/link'
import LineNumber from './LineNumber'

function VariantSwitcher(props) {
    return (
        <div className='variant-switcher'>
            <VariantSwitcherHeader data={props.data} lineType={props.lineType}/>
            <VariantSwitcherSelector data={props.data}/>
        </div>
    )
}
function VariantSwitcherHeader(props) {
    return (
        <div className='variant-switcher-header'>
            <LineNumber data={props.data}/>
            <VariantSwitcherLineType data={props.data}/>
            <VariantSwitcherLineWarning lineType={props.lineType}/>
        </div>
    )
}
function VariantSwitcherLineType(props) {
    function determineType(lineNumber) {
        let type = ''
        if (lineNumber < 70) {
            type = 'Linia tramwajowa'
        }
        else if (lineNumber >= 70 && lineNumber < 100) {
            type = 'Linia tramwajowa zastępcza'
        }
        else if (lineNumber >= 100 && lineNumber < 200) {
            type = 'Linia autobusowa miejska'
        }
        else if (lineNumber >= 200 && lineNumber < 300) {
            type = 'Linia autobusowa aglomeracyjna'
        }
        else if (lineNumber >= 300 && lineNumber < 400) {
            type = 'Linia autobusowa aglomeracyjna przyspieszona'
        }
        else if (lineNumber >= 400 && lineNumber < 500) {
            type = 'Linia autobusowa miejska wspomagająca'
        }
        else if (lineNumber >= 500 && lineNumber < 600) {
            type = 'Linia autobusowa miejska przyspieszona'
        }
        else if (lineNumber >= 600 && lineNumber < 700) {
            type = 'Linia autobusowa nocna'
        }
        else if (lineNumber >= 700 && lineNumber < 800) {
            type = 'Linia autobusowa tymczasowa'
        }
        else if (lineNumber >= 800 && lineNumber < 900) {
            type = 'Linia autobusowa specjalna'
        }
        else if (lineNumber >= 900 && lineNumber < 1000) {
            type = 'Linia autobusowa aglomeracyjna nocna'
        }
        else {
            type = 'Linia komunikacyjna'
        }
        return type;
    }
    return (
        <p className='variant-switcher-line-type'>{determineType(props.data.info.lineNumber)}</p>
    )
}
function VariantSwitcherSelector(props) {
    return (
        <div className='variant-switcher-selector'>
            <h3>Wybierz wariant:</h3>
            <VariantSwitcherLinkWrapper data={props.data}/>
        </div>
    )
}
function VariantSwitcherLinkWrapper(props) {
    return (
        <div className='variant-switcher-links'>
            {props.data.routes.map(route => (
                <VariantSwitcherLink data={route}/>
            ))}
        </div>
    )
}
function VariantSwitcherLink(props) {
    return (
        <Link href='/warianty/[line]/[variant]' as={`/warianty/${props.data.href[0]}/${props.data.href[1]}`}>
            <a className='variant-switcher-link'>{props.data.name}</a>
        </Link>
    )
}
function VariantSwitcherLineWarning(props) {
    function checkType(lineType) {
        if (lineType == 'liniaO') {
            return <VariantSwitcherLineWarningChip text='Czasowo kursuje po zmienionej trasie' css={lineType}/>
        }
        else if (lineType == 'liniaZ') {
            return <VariantSwitcherLineWarningChip text='Nowa linia lub niedawna zmiana rozkładu' css={lineType}/>
        }
        else if (lineType == 'liniaN') {
            return <VariantSwitcherLineWarningChip text='Zmiana trasy, ten sam rozkład' css={lineType}/>
        }
        else {
            return null
        }
    }
    return(props.lineType != 'linia' ? checkType(props.lineType) : '')
}
function VariantSwitcherLineWarningChip(props) {
    return (
        <div className={`variant-switcher-line-warning-chip ${props.css}`}>
            <img src='/icons/line-warning-chip/alert.svg'/>
            <p>{props.text}</p>
        </div>
    )
}
export default VariantSwitcher