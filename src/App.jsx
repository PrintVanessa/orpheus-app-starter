import ChatBox from './components/ChatBox'
import OrpheusScene from './components/OrpheusScene'
import './index.css' // make sure you're using index.css, not App.css

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-underworldGray to-echoPink text-white font-sans">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <OrpheusScene />
        <ChatBox />
      </div>
    </div>
  )
}

export default App
