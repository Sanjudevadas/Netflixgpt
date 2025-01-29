import { signOut } from 'firebase/auth';
import Logo from '../assets/Logonetflix.png';
import usericon from '../assets/netflix_usericon.jpg';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user =useSelector((store)=> store.user)

const handleSignOut= ()=>{
  signOut(auth).then(()=>{
    // Sign Out Successful
    navigate("/")
  }).catch((error)=>{
// Error happened
navigate("/error")
  })

  
}

  return (
    <header className="absolute top-0 w-full px-8 py-3 bg-gradient-to-b from-black z-20 flex items-center justify-between">
      {/* Logo */}
      <img className="w-40 md:w-44" src={Logo} alt="Netflix Logo" />

      {/* User Section */}
      { user && (<div className="flex items-center gap-4">
        <img className="w-10 h-10 md:w-12 md:h-12   border-gray-300" src={usericon} alt="User Icon" />
        
        <button onClick={handleSignOut} className="text-white px-4 py-2 text-sm md:text-base font-semibold rounded-md border border-gray-500 hover:bg-gray-700 transition">
          Sign Out
        </button>
      </div> )}
    </header>
  );
};

export default Header;
