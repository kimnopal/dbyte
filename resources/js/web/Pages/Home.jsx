import About from "../Components/About";
import Hero from "../Components/Hero";
import Major from "../Components/MajorList";
import GuestLayout from "../Layouts/GuestLayout";

const Home = ({ majors, auth }) => {
    return (
        <>
            <GuestLayout auth={auth}>
                <Hero />
                <Major majors={majors} />
                <About />
            </GuestLayout>
        </>
    );
}

export default Home;