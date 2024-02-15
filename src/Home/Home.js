import Aboutus from "./Aboutus"
import Foodbox from "./Foodbox";
import Footer from "./Footer";
import Header from "./Header"
import Latestarri from "./Latestarri";
import Organicsec from "./Organicsec";
import Ourblog from "./Ourblog";
import Ourclient from "./Ourclient";
import Ourteam from "./Ourteam";
import Slider1 from "./Slider1";
import Thirdsec from "./Thirdsec";

function Home(){
    return(
        <>
        <Header></Header>
        <Slider1></Slider1>
        <Aboutus></Aboutus>
        <Thirdsec></Thirdsec>
        <Latestarri></Latestarri>
        <Ourclient></Ourclient>
        <Foodbox></Foodbox>
        <Ourteam></Ourteam>
        {/* <Organicsec></Organicsec> */}
        <Ourblog></Ourblog>
        <Footer></Footer>
        </>
    );
}
export default Home;