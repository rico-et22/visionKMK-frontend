import fetch from 'node-fetch'
import {useState} from 'react'
import { useRouter } from 'next/router'
import APIURL from '../../components/APIURL'
import SiteRoot from '../../components/SiteRoot'
import Navbar from '../../components/Navbar'
import {GridContainer, Left, Right} from '../../components/GridContainer'
import TTInfo from '../../components/TTInfo'
import LineList from '../../components/LineList'
import TTHTMLTable from '../../components/TTHTMLTable'
import BottomNavbar from '../../components/BottomNavbar'
import dynamic from 'next/dynamic'
const TTTimeModal = dynamic(
    () => import('../../components/TTTimeModal'),
    { ssr: false }
  )
const LegendModal = dynamic(
    () => import('../../components/LegendModal'),
    { ssr: false }
)
export default function TimeTable(props) {
    const Router = useRouter()
    const {slug} = Router.query
    const [timeModalOpen, TTTimeSwitch] = useState(false)
    const [legendModalOpen, legendSwitch] = useState(false)
    function TTTimeSwitcher() {
        if (timeModalOpen == false) {
            TTTimeSwitch(true);
        }
        else {
            TTTimeSwitch(false);
        }
    }
    function legendSwitcher() {
        if (legendModalOpen == false) {
            legendSwitch(true);
        }
        else {
            legendSwitch(false);
        }
    }
    return (
        <SiteRoot>
            <Navbar/>
            <GridContainer>
                <Left>
                    <TTInfo data={props.info} TTTimeSwitcher={TTTimeSwitcher} legendSwitcher={legendSwitcher} side/>
                    <LineList lines={props.lines}/>
                </Left>
                <Right>
                    <TTInfo data={props.info} TTTimeSwitcher={TTTimeSwitcher} legendSwitcher={legendSwitcher} mobile/>
                    {slug.line} {slug.variant} {slug.stop}
                    <TTHTMLTable data={props.TT.html}/>
                </Right>
            </GridContainer>
            <BottomNavbar activePage='/'/>
            <TTTimeModal open={timeModalOpen} data={props.info} closeSwitcher={TTTimeSwitcher}/>
            <LegendModal open={legendModalOpen} closeSwitcher={legendSwitcher}/>
        </SiteRoot>
    )
}

export async function getServerSideProps(context) {
    const resInfo = await fetch(`${APIURL}/info`)
    const info = await resInfo.json()
    const resLines = await fetch(`${APIURL}/lines`)
    const lines = await resLines.json()
    const lineNumber = context.params.slug[0] ? context.params.slug[0] : 1
    const variantNumber = context.params.slug[1] ? context.params.slug[1] : ''
    const stopNumber = context.params.slug[2] ? context.params.slug[2] : ''
    const resTT = await fetch(`${APIURL}/timetable?line=${lineNumber}&variant=${variantNumber}&stop=${stopNumber}`)
    const TT = await resTT.json()
    return {
        props: {
            info,
            lines,
            TT
        },
    }
}