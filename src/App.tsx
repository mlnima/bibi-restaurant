import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import {languagesTypes} from "./types";
import GlobalStyles from "./global/styles/globalStyles";
import MainPageRouter from "./routers/MainPageRouter";
import CallButton from "./components/CallButton";


function App() {
    const [activeLanguage, setActiveLanguage] = useState<languagesTypes>('DE')
    const [today, setToday] = useState(0)

    useEffect(() => {
        const today = new Date();
        setToday(today.getDay())
    }, []);

    return (

            <div className="App" >
                <GlobalStyles/>
                <Header activeLanguage={activeLanguage}/>
                <Navigation activeLanguage={activeLanguage}
                            today={today}
                            languageOptions={['EN', 'DE', 'FA', 'AR']}
                            setActiveLanguage={setActiveLanguage}/>
                <MainPageRouter activeLanguage={activeLanguage} today={today}/>
                <CallButton/>
            </div>
    );
}

export default App;
