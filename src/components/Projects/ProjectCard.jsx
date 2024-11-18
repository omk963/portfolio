
const ProjectCard = ({ name, link, img, desc }) => {
    return (
        <div className='lg:w-full p-3 shadow-inner shadow-slate-500 lg:grid lg:grid-cols-[2fr_3fr] flex flex-col w-5/6 m-auto'>

            {/* Image(s) */}
            <div className="hover:scale-[1.1] duration-700">{
                img.length > 1
                    ?
                    <div className="relative h-5/6 ">
                        <img src={img[0]} alt='Project Image #1' className="relative z-[1] lg:h-[105%] w-[65%] lg:w-[90%] mb-16" />
                        <span className="absolute lg:w-[22vw] lg:-right-10 -bottom-10 z-[2] overflow-hidden w-[35vw] h-[60%] right-2">
                            <img src={img[1]} alt='Project Image #2' className="scale-x-[1.5] scale-y-[1.8] z-[2]" />
                        </span>
                    </div>
                    :
                    // ! check with one image
                    <img src={img[0]} alt='Project Image' className="w-full" />
            }</div>

            <div className="flex flex-col w-5/6 m-auto lg:my-auto lg:ml-16">
                <h3 className="font-extrabold tracking-[0.5em] text-center text-3xl mb-3">{name}</h3>
                <p className="text-center lg:text-left">{desc}</p>
                <span className="flex flex-row w-full mt-3 justify-evenly">
                    <button className="w-1/5 p-2 duration-700 bg-blue-300 rounded-lg shadow-lg active:shadow-inner active:shadow-black shadow-gray-800 hover:scale-125 active:bg-blue-400">
                        <a href={link.demo.link}>
                            <img src={link.demo.logo} alt='Internet logo' className="w-2/5 m-auto" />
                        </a>
                    </button>
                    <button className="w-1/5 p-2 duration-700 bg-blue-300 rounded-lg shadow-lg active:shadow-inner active:shadow-black shadow-gray-800 hover:scale-125 active:bg-blue-400">
                        <a href={link.repo.link}>
                            <img src={link.repo.logo} alt='Github logo' className="w-2/5 m-auto" />
                        </a>
                    </button>
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;