import fetch from 'node-fetch'
import {useState} from 'react'
import APIURL from '../../../components/APIURL'
import SiteRoot from '../../../components/SiteRoot'
import Navbar from '../../../components/Navbar'
import {GridContainer, Left, Right} from '../../../components/GridContainer'
import TTInfo from '../../../components/TTInfo'
import LineList from '../../../components/LineList'
import StopList from '../../../components/StopList'
import BottomNavbar from '../../../components/BottomNavbar'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const TTTimeModal = dynamic(
    () => import('../../../components/TTTimeModal'),
    { ssr: false }
  )
const LegendModal = dynamic(
    () => import('../../../components/LegendModal'),
    { ssr: false }
)
export default function VariantStops(props) {
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
                    <StopList data={props.VariantStops}/>
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
    const resLineType = await fetch(`${APIURL}/getLineType?line=${context.params.number}`)
    const lineType = await resLineType.json()
    const resVariantStops = await fetch(`${APIURL}/getVariantStops?line=${context.params.line}&variant=${context.params.variant}`)
    const VariantStops = await resVariantStops.json()
    return {
        props: {
            info,
            lines,
            lineType,
            VariantStops
        },
    }
}