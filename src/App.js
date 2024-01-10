import "./App.css";
import SideBar from "./components/SideBar";
import HubsPage from "./pages/HubsPage";
import CardPage from "./pages/CardPage";
import HubsDetailPage from "./pages/HubsDetailPage";
import ProductPage from "./pages/ProductPage";
import SectionPage from "./pages/SectionPage";
import MemberPage from "./pages/MemberPage";
import HubCommunitiesPage from "./pages/HubCommunitiesPage";

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
        <MemberPage />
        <HubCommunitiesPage />
      </div>
    </div>
  );
}

export default App;
