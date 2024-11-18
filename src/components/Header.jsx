import Logo from "./Logo";
import Nav from './Nav';
import ReactStickyHeadroom from '@integreat-app/react-sticky-headroom';

const Header = ({ scrollToSection, sections }) => {
    return (
        <ReactStickyHeadroom scrollHeight={100}>
            <div className="bg-gray-200 sticky top-0 md:h-20 mx-full z-[20] w-full flex flex-wrap justify-between items-center opacity-90 z-10">
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