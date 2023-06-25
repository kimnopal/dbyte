import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children, auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <div className="md:max-w-[865px] m-auto min-h-screen">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Layout;