import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import HubsPage from "./pages/HubsPage";
import CustomCard from "../src/components/Card";
import SparkCardImage from "../src/assets/Icons/Spark Card.png";
import CardPage from "./pages/CardPage";
import HubsDetailPage from "./pages/HubsDetailPage";
import ProductPage from "./pages/ProductPage";
import SectionPage from "./pages/SectionPage";


function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ padding: "20px", flex: "1" }}>
        <HubsPage />
        {/* <CustomCard
          imageUrl={SparkCardImage}
          // avatarUrl={AvatarImage}
        /> */}
        <CardPage />
        <HubsDetailPage />
       <ProductPage />
       <SectionPage />
      </div>
    </div>
  );
}

export default App;
