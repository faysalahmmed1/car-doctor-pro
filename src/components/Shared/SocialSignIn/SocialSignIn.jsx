
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

const SocialSignIn = () => {
    return (
        <div>
            <div className='flex text-4xl gap-x-2 text-center justify-center items-center mt-3'>
                <FcGoogle className='text-primary' />
                <FaGithub className='text-black' />
                <FaFacebook className='text-blue-600' />
            </div>
        </div>
    );
};

export default SocialSignIn;