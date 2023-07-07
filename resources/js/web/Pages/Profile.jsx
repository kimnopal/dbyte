import { Head } from "@inertiajs/react";
import Achievements from "../Components/Achievements";
import Bio from "../Components/Bio";
import Layout from "../Layouts/Layout";
import ProfileQuestionList from "../Components/ProfileQuestionList";

const Profile = ({ auth, user }) => {
    return (
        <Layout auth={auth}>
            <Head title="Profile" />
            <Bio user={user} />
            <Achievements user={user} />
            <ProfileQuestionList questions={user.questions} user={user} />
        </Layout>
    );
};

export default Profile;
