import React from 'react';
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="flex">
            <Navbar/>
            <main className="flex-1">
                <div className="bg-gray-400 text-right py-4 px-2 ">
                    <img className="w-8 h-8 rounded-full ml-auto"
                         src="https://avatars.githubusercontent.com/u/57622665?s=460&amp;u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&amp;v=4"
                         alt="Ahmed Kamel"/>
                </div>
                <div className="px-6 my-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;