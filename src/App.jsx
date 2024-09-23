import Header from "./components/header";
import About from "./components/aboutus";
import Experience from "./components/Experience";
import Footer from "./components/footes";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
