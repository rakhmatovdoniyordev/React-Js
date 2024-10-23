import "./App.css";
import Category from "./components/category/Category";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Posts from "./components/posts/Posts";
import Recent from "./components/recent/Recent";

//Component
function App() {
  return (
    //JSX
    <div className="App">
      <Header/>
      <Category/>
      <Posts/>
      <Recent/>
      <Footer/>
    </div>
  );
}

export default App;
