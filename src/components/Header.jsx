import Logo from "./Logo";
import Nav from './Nav';
import ReactStickyHeadroom from '@integreat-app/react-sticky-headroom';

const Header = ({ scrollToSection, sections }) => {
    return (
        <ReactStickyHeadroom scrollHeight={100}>
            <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between w-full bg-gray-200 md:h-20 mx-full opacity-90">
                <Logo />
                <Nav
                    scrollToSection={scrollToSection}
                    sections={sections}
                />
            </div>
        </ReactStickyHeadroom>
    );
};

export default Header;