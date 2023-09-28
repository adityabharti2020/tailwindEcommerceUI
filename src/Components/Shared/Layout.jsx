import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function Layout(){
    return (
        <div className='flex flex-row h-screen w-screen bg-neutral-100 overflow-hidden'>
            <Sidebar/>
            <div className='bg-teal-500'>header</div>
            <div><Outlet/></div>
            <p>Footer</p>
        </div>
    )
} 