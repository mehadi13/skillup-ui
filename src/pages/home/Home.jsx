import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

import { Link } from "react-router-dom"
import Banner from "./Banner"
import HowWorks from "./HowWorks"
import Sample from "./Sample"
import ContactUs from "./ContactUs"
import AboutUs from "./AbutUs"
import Footer from "../shared/Footer"

const Home = () => {
  return (
    <main>
      <Banner/>
      <HowWorks/>
      <Sample/>
      <ContactUs/>
      <AboutUs/>
    </main>
  )
}

export default Home