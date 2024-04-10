import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "../components/HomePage";
import {languagesTypes} from "../types";
import PrivacyPage from "../components/PrivacyPage";
import AddressPage from "../components/AddressPage";
import NotFoundPage from "../components/NotFoundPage";

interface IProps {
    activeLanguage: languagesTypes,
    today:number
}

const MainPageRouter : React.FC<IProps> = ({ activeLanguage,today }) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage activeLanguage={activeLanguage} today={today}/>}/>
            <Route path="/data-privacy" element={<PrivacyPage />}/>
            <Route path="/address"  element={<AddressPage activeLanguage={activeLanguage} />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
};

export default MainPageRouter