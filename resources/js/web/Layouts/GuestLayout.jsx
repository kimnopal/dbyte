import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const GuestLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="md:max-w-[895px] m-auto border border-black h-[1000px]">
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default GuestLayout;