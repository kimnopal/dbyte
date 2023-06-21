import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const GuestLayout = ({ children, auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            <div className="md:max-w-[865px] m-auto">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default GuestLayout;