import React from "react"; 
import ReactDOM from "react-dom/client"; 
import Header from "./Header"; 
import Footer from "./Footer"; 


const root = ReactDOM.createRoot(document.getElementByID("root")); 



root.render(
    <React.StrictMode>
        <div>
            <body>
                <Header />
                <Note />
                <Footer />
            </body>
        </div>
    </React.StrictMode>
); 