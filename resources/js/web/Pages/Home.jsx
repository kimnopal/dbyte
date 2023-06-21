import About from "../Components/About";
import Hero from "../Components/Hero";
import Major from "../Components/MajorList";
import GuestLayout from "../Layouts/GuestLayout";

const Home = () => {
    return (
        <>
            <GuestLayout>
                <Hero />
                <Major />
                <About />
            </GuestLayout>
        </>
    );
}

export default Home;