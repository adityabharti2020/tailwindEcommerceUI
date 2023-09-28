import React from "react";
import  {AiFillWechat}  from 'react-icons/ai';
import {DASHBOARD_SIDEBAR_LINKS} from '../lib/consts/Navigation'
import { Link, useLocation } from "react-router-dom";
import className from 'classname'
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-slate-50 hover:text-cyan-950 hover:no-underline active:bg-slate-100 rounded-sm text-base  mt-0.5'

export default function Sidebar(){
    return (
        <div className="flex flex-col bg-cyan-950 text-white w-80 p-3 ">
            <div className="flex items-center gap-2 px-1 py-3">
                <AiFillWechat fontSize={35}/>
                <span className="text-2xl">ChatApp</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {
                    DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLink key={item.key} item ={item}>
                              {item.label}
                        </SidebarLink>
                    ))
                }
            </div>
            <div>Bottom Part</div>
            
        </div>
    )
}
function SidebarLink({item}){
    const { pathname } = useLocation();
    return (
        <Link to={item.path} className={className(pathname === item.path ? 'text-slate-50' : 'text-yellow-500',linkClass)}>   {/*to add multiple classes npm i classname*/}
        <span className="text-xl">{item.icon}</span>
        <span className="font-bold">{item.label}</span>
        
        </Link>
    )

}