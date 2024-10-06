import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Home() {
    return (
      <>
       <Header/>
       <h1 className="text-emerald-500">This is Home</h1>
       <div className="flex gap-4">
       <Link className="bg-gray-800 rounded-md text-yellow-300 text-center p-3" to="/signup">Sign Up</Link>
       <Link className="bg-gray-800 rounded-md text-yellow-300 text-center p-3" to="/signin">Sign In</Link>
       </div>
       <Footer/>
      </>
    )
  }
  
  export default Home