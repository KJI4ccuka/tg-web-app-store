import {useTelegram} from "./hooks/useTelegram.js";
import {useEffect} from "react";
import Header from "./components/header/header.jsx";

function App() {
  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    tg.ready()
  }, []);

  return (
    <>

      <Header/>
      <div className={'App'}>
        <button onClick={onToggleButton}>toggle</button>
      </div>
    </>
  )
}

export default App
