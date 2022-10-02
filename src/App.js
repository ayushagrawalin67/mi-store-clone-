
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from "./components/Slider.js"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
import data from "./data/data.json"
function App() {
  return (

<div>



<Router>
<PreNavbar />

<Navbar />
<NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
<Slider start={"D"}/>
<Offers />
<Heading text="STAR PRODUCTS"/>
<StarProduct starProduct={data.starProduct} />
<Heading text="HOT ACCESSORIES" />
<HotAccessoriesMenu />
<Routes>
<Route  path="music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
<Route  path="smartDevices" element={<HotAccessories  smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
<Route  path="home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
<Route  path="lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} />
<Route  path="mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
</Routes>
</Router>
<Heading text="PRODUCT REVIEWS" />
<ProductReviews productReviews={data.productReviews} />
<Heading text={"VIDEOS"} />
<Videos videos={data.videos} />
<Heading text={"IN THE PRESS"} />
<Slider end={"d"}/>
<Footer footer={data.footer} />
</div>
  


  );
}

export default App;
