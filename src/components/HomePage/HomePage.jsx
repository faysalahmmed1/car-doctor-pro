import About from "./About";
import Banar from "./Banar";
import Services from "./Services";



const HomePage = () => {
    return (
        <div className="h-screen">
            <Banar/>
            <About/>
            <Services/>
            
           
        </div>
    );
};

export default HomePage;