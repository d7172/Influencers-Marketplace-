import React from 'react'
import Dashboard from './Dashboard'
import Campaign from './Campaign'
// import { Link, useLocation } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Sidebar() {
    return (
        <div>
            <h1 className="text-[#1E266D] text-[32px] text-center my-4 font-[500]">Brands</h1>
            <ul>
                <li><Dashboard /></li>
                <li><Campaign /></li>
            </ul>
        </div>
    )
}

export default Sidebar