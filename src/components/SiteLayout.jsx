import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared shell for every route: navbar, page content, footer.
function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-clip bg-primary">
      <Navbar />

      <main id="main-content" role="main">
        <Outlet />
      </main>

      {/* Footer outside <main> per HTML spec */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Footer />
      </div>
    </div>
  );
}

export default SiteLayout;
