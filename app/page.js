import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItLooks from '../components/HowItLooks'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import About from '../components/About'
import CounterSection from '../components/CounterSection'
import Section2 from '../components/Section2'
import FundingSection from '../components/FundingSection'
import Section3 from '../components/Section3'
import Footer from '../components/Footer'
import UuiSection from '../components/UuiSection'
export default function HomePage() {
  
  return (
    <>
      <main>
      <Navbar />
      <Hero />
      <HowItLooks />
      <HowItWorks />
      <Services />
      <About/>
      <CounterSection/>
      <Section2/>
      <FundingSection/>
      <Section3/>
      <Footer />
      <UuiSection/>
      </main>
    </>
  );
}
