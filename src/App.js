import { Header, Home, Services, About, Contact, Foo_ter} from "./Component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App(){
  return(
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home title="Grow your business with" area="home" img="Cat.png" />} />
          <Route exact path="/FirstReactWebsite" element={<Home title="Grow your business with" area="home" img="Cat.png" />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About title="welcome to about page" area="about" img="Coffee.png" />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Foo_ter />
      </Router>
    </>
  )
}
export default App;