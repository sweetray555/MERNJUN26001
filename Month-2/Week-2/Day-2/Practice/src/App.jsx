
import './App.css'
import Home from './home'


function App() {
  

  return (
    <>
     Hello
     {/*Props Concept*/}
<Home name={"Tapas"} age={30} obj={{email:"tapas@gmail.com",std1:{name:"student 1"}}}/>
<profile name={"random person"}>
  <h1>this is profile heading</h1>

  </profile>
    </>
  )
}

export default App
