import React from "react";
import { NavbarAdminComponent } from "../../Components/NavbarAdminComponent";
import './style.css'

const Admin = () => {
    return (
        <div className="container-admin">
            <NavbarAdminComponent></NavbarAdminComponent>

            <div className="dashboard-admin">

            </div>
        </div>
    )
}

export default Admin