import InfoCard from "./components/Info-Card"
import Cards from "./components/Cards"
function App() {
  return (
    <div className="bg-very-dark-blue h-screen flex items-center justify-center">
    <main className="grid grid-cols-2 gap-8">
      <InfoCard />
      <Cards />
    </main>
    </div>
  )
}

export default App
