import BioEdit from "@/web/Components/BioEdit";
import Layout from "../../Layouts/Layout";

const Profile = ({ auth, user, universities }) => {
    console.log(user)
    return (
        <Layout auth={auth}>
            <BioEdit user={user} universities={universities} />
        </Layout>
    );
};

export default Profile;
