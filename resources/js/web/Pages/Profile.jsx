import Achievements from "../Components/Achievements";
import Bio from "../Components/Bio";
import Layout from "../Layouts/Layout";

const Profile = ({ auth, user }) => {
    return (
        <Layout auth={auth}>
            <Bio user={user} />
            <Achievements user={user} />
        </Layout>
    );
};

export default Profile;
