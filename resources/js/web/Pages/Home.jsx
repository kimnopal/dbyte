import Hero from "../Components/Hero";
import GuestLayout from "../Layouts/GuestLayout";

const Home = () => {
    return (
        <>
            <GuestLayout>
                {/* <h1>hello world</h1> */}
                <Hero />
            </GuestLayout>
        </>
    );
}

export default Home;