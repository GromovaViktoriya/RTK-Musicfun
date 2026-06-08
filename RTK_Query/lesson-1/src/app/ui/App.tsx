import {Routing} from "@/common/routing";
import {Header} from "@/common/components";
import s from './App.module.css'


function App() {

  return (
    <>
        <div className={s.layout}>
            <Routing />
        </div>
        <Header/>
    </>
  )
}

export default App
