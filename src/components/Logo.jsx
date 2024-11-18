import logo from "../assets/jj-logo.png"

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="Logo" className="object-cover h-20 w-16 ml-4" />
        </div>
    );
};

export default Logo;