import Home from "../../pages/Home";
import Footer from "./footer";
import Header from "./header";



function Layout(){
    return (
        <div>
            <div><Header /></div>
            <div><Home /></div>
            <div><Footer /></div>
        </div>
    );
}

export default Layout;