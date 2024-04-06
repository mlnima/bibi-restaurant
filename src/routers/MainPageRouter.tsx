import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "../components/HomePage";
import {languagesTypes} from "../types";
import PrivacyPage from "../components/PrivacyPage";
import AddressPage from "../components/AddressPage";

interface IProps {
    activeLanguage: languagesTypes
}

const MainPageRouter : React.FC<IProps> = ({ activeLanguage }) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage activeLanguage={activeLanguage}/>}/>
            <Route path="/data-privacy" element={<PrivacyPage />}/>
            <Route path="/address" element={<AddressPage />}/>
        </Routes>
    )
};

export default MainPageRouter