import React, {useState} from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {languagesTypes} from "./types";
import GlobalStyles from "./global/styles/globalStyles";
import MainPageRouter from "./routers/MainPageRouter";


function App() {
    const [activeLanguage, setActiveLanguage] = useState<languagesTypes>('DE')
    return (

            <div className="App">
                <GlobalStyles/>
                <Header activeLanguage={activeLanguage}/>
                <Navigation activeLanguage={activeLanguage}
                            languageOptions={['EN', 'DE', 'FA', 'AR']}
                            setActiveLanguage={setActiveLanguage}/>
                <MainPageRouter activeLanguage={activeLanguage}/>
            </div>
    );
}

export default App;
