import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Callender from "./Callender/Callender";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Callender />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;