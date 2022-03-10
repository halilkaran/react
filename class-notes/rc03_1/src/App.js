import "./App.scss"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import data from "./data";
 


function App() {
  return (
    <div>
      <Header />
    <Card data={data} />
      <Footer />
    </div>
  );
}
export default App;
