// next image
import image from "next/image";


const TopLeftImg = () => {
  return (
   <div classname='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-
   [400px] opacity-50'>
    <image src='/top-left-img.png' width={400} height={400} alt=''/>
    </div>
    );
};

export default TopLeftImg;
