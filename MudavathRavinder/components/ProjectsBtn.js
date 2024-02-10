// next image
import image from 'next/image';

// next link
import link from'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const projectsBtn = () => {
    return ( 
    <div classname='mx-auto xl:mx-0'>
        <link
         href={'/work'}
         classname='relative w-[185px] h-[185px] flex justify-center items-center
         bg-circleStar bg-cover bg-center bg-no-repeat group'
         >
            <image 
            src={'/rounded-text.png'}
            width={141}
            height={148}
            alt=''
            classname='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
            />
            <HiArrowRight classname='absolute text-4xl group-hover:translate-x-2
            transition-all duration-300' />
        </link>
    </div>
    )
};

export default projectsBtn;