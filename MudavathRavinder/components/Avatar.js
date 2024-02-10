// next image
import image from 'next/image';

const Avatar = () => {
    return (
        <div classname='hidden xl:flex xl:max-w-none'>
            <image
              src={'/avatar.png'}
              width={737}
              height={678}
              alt=''
              classname='translate-z-0 w-full h-full'
              />
        </div>
    )

};

export default Avatar;