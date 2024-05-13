import React, {useEffect,} from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation, user, userNavigation } from '../../constants/homeConstants.tsx';
// @ts-ignore
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './footer.tsx';
import { Button } from '@nextui-org/react';
// import useFetch from "../../hooks/useFetch";
import '../../css/layout_styles.css';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';



function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const Layout: React.FC = () => {
  const { data} = useFetch(`${BASE_URL}/`); 
 
  useEffect(()=>{
    if(data ){
      const responseData = data as { body: string }; 
      localStorage.setItem('sessionID', responseData.body);
    }

  },[data]);
  
  return (
    <div className="min-h-full background-image hide_scrollbar" >
      <main className="pt-10">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg radial-gradient-bg px-5 py-6 shadow sm:px-6" >
            <Outlet />
          </div>
        </div>
      </main>
      <div className="flex h-full w-full flex-col overflow-y-auto hide_scrollbar">
        <Footer />
      </div>
    </div>
  );
};
