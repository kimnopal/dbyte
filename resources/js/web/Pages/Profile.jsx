import Achievements from "../Components/Achievements";
import Bio from "../Components/Bio";
import Layout from "../Layouts/Layout";

const Profile = ({ auth }) => {
    return (
        <Layout auth={auth}>
            <Bio />
            <Achievements />
        </Layout>
    );
};

export default Profile;
