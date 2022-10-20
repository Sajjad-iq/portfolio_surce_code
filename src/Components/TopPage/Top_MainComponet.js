import Center from "./Center/Center"
import Header from "./Header/Header"
import HeroDivice from '../../assets/hero-devices.svg'
export default function Top_MainComponet() {
  return (
    <main className="Top-MainComponet">
      <Header />
      <Center />
      <img className="hero-devices" src={HeroDivice} alt="" />
    </main>
  )
}
