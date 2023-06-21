import { Head } from "@inertiajs/react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Major from "../Components/MajorList";
import Layout from "../Layouts/Layout";

const Home = ({ majors, auth }) => {
    return (
        <>
            <Head title="Home" />
            <Layout auth={auth}>
                <Hero />
                <Major majors={majors} />
                <About />
            </Layout>
        </>
    );
}

export default Home;