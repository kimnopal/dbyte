import About from "../Components/About";
import Hero from "../Components/Hero";
import Major from "../Components/Major";
import GuestLayout from "../Layouts/GuestLayout";

const Home = () => {
    return (
        <>
            <GuestLayout>
                {/* <h1>hello world</h1> */}
                <Hero />
                <Major />
                <About />
            </GuestLayout>
        </>
    );
}

export default Home;