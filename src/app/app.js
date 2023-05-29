import {Routes, Route, HashRouter } from "react-router-dom";
import Header from "./Header/Header";
import Callender from "./Callender/Callender";


function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Callender />} />
        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App;