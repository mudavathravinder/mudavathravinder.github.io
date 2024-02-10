// fonts
import { sora } from '@next/font/google';

// font settings
const sora = sora({
  subsets: ['latin'],
  variabe: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';

import Header from '../components/Header';
import TopleftImg from '../components/TopLeftImg';


const Layout = ({ children }) => {
  return (
    <div
     className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable}
     font-sora relative'}
     >
     <topLeftImg/>
     <Nav/>
     <Header />
     {children}
    </div>
  );
};

export default Layout;
