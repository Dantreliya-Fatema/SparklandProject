import "./App.css";
import SideBar from "./components/SideBar";
import HubsPage from "./pages/HubsPage";
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
        <CardPage />
        <HubsDetailPage />
        <ProductPage />
        <SectionPage />
      </div>
    </div>
  );
}

export default App;
