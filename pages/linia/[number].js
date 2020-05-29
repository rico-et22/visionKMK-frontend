import fetch from 'node-fetch'
import {useState} from 'react'
import APIURL from '../../components/APIURL'
import SiteRoot from '../../components/SiteRoot'
import Navbar from '../../components/Navbar'
import {GridContainer, Left, Right} from '../../components/GridContainer'
import TTInfo from '../../components/TTInfo'
import LineList from '../../components/LineList'
import VariantSwitcher from '../../components/VariantSwitcher'
import Footer from '../../components/Footer'
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
export default function Line(props) {
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
                    <VariantSwitcher data={props.TT} lineType={props.lineType.type}/>
                </Right>
            </GridContainer>
            <Footer/>
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
    const resTT = await fetch(`${APIURL}/timetable?line=${context.params.number}&variant=1&stop=1`)
    const TT = await resTT.json()
    const resLineType = await fetch(`${APIURL}/getLineType?line=${context.params.number}`)
    const lineType = await resLineType.json()
    return {
        props: {
            info,
            lines,
            TT,
            lineType
        },
    }
}