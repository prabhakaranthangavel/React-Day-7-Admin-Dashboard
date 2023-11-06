import React from 'react'
import './style/App.css'

// import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// import fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>

{/* <!-- Page Wrapper --> */}
    <div id="wrapper">

        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <a className="collapse-item" href="register.html">Register</a>
                        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">404 Page</a>
                        <a className="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="data:image/jpeg;base64,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" alt="Rocket Image Here"></img>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>
        </ul>
        {/* <!-- End of Sidebar --> */}

    </div>
    </div>

  )
}

export default App