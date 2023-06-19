import Achievements from "../Components/Achievements";
import Bio from "../Components/Bio";
import GuestLayout from "../Layouts/GuestLayout";

const Profile = () => {
    return (
        <GuestLayout>
            <Bio />
            <Achievements />
        </GuestLayout>
    );
};

export default Profile;
