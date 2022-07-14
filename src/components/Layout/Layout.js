import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <div className="layout-navbar-container">
                <Navbar />
            </div>
            <div className="layout-content-container">
                {children}
            </div>
            {/* <div className="layout-footer-container">
                <Footer/>
            </div> */}
        </div>
    )
}

export default Layout;