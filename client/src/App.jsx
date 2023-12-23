import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => {

  return (
    <>
      <div className="min-h-screen"> {/* Mininum height as screen size */}
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </>
  )
}

export default App
