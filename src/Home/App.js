import { Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import Gallary from "./Gallary";
import Typography from "./Typography";
import Aboutpage from "./Aboutpage";
import Iconlist from "./Iconlist";
import Shoppage from "./Shoppage";
function App() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Gallary" element={<Gallary />} />
                    <Route path="/Typography" element={<Typography />} />
                    <Route path="/Aboutpage" element={<Aboutpage />} />
                    <Route path="/Iconlist" element={<Iconlist />} />
                    <Route path="/Shoppage" element={<Shoppage />} />

                    {/* <Route path="contact" element={<Contact />} /> */}
                </Routes>
        </>
    );
}
export default App; 