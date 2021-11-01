import React from 'react';
import DashboardDetails from './DashboardDetails/DashboardDetails';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-2" style={{background: '#343A40'}}>
                <Sidebar/>
            </div>
                        
            <div className="col-md-10" style={{}}>
                <DashboardDetails/>
            </div>            
        </div>
    );
};

export default Dashboard;