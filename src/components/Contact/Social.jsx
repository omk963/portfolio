import { social } from '../../index';

const Social = () => {
    return (
        <div className="flex flex-row justify-around w-full mt-10">
            {social.map(media => {
                return (
                    <button className='w-1/6 duration-300 hover:scale-110'>
                        <a href={media.link}>
                            <img src={media.logo} alt={media.name} />
                        </a>
                    </button>
                );
            })}
        </div>
    );
};

export default Social;