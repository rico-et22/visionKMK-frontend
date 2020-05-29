import fetch from 'node-fetch'
import {useState} from 'react'
import APIURL from '../components/APIURL'
import SiteRoot from '../components/SiteRoot'
import Navbar from '../components/Navbar'
import HomeContainer from '../components/HomeContainer'
import TTInfo from '../components/TTInfo'
import LineList from '../components/LineList'
import Footer from '../components/Footer'
import BottomNavbar from '../components/BottomNavbar'
import dynamic from 'next/dynamic'
const TTTimeModal = dynamic(
    () => import('../components/TTTimeModal'),
    { ssr: false }
  )
const LegendModal = dynamic(
    () => import('../components/LegendModal'),
    { ssr: false }
)
export default function Home(props) {
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
        <SiteRoot locked={timeModalOpen || legendModalOpen}>
            <Navbar/>
            <HomeContainer test='xx'>
                <TTInfo data={props.info} TTTimeSwitcher={TTTimeSwitcher} legendSwitcher={legendSwitcher}/>
                <h6 style={{textAlign: 'center', marginBottom: '1.25rem', fontWeight: 'normal'}}>Projekt nieoficjalny / logo KMK wykorzystane w celach pokazowych</h6>
                <h1>Widok ulic w budowie</h1>
            </HomeContainer>
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
    return {
        props: {
            info
        },
    }
}