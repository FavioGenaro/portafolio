
import { useEffect, useState } from 'react';
import menu from './../assets/menu.svg';
import close from './../assets/close.svg';
import moonIcon from '../assets/moon.svg'
import lightIcon from '../assets/light.svg'

export const Header = () => {

    const initialState = () => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches || document.querySelector('#root').classList.contains('dark')){
            return "dark";
        }
        return "light";   
    }

    const [activado, setActivado] = useState(false);
    const [theme,setTheme] = useState(initialState)

    function clickMenu(e){
        setActivado(!activado);
    }

    function handleChangeTheme (){
        setTheme((theme === "light") ? "dark":"light")
    }

    useEffect(()=>{
        if(theme === "dark"){
            document.querySelector('#root').classList.add('dark')
        }else{
            document.querySelector('#root').classList.remove('dark')
        }
    }, [theme])

    // console.log(open)
    return (
        <div className="header-nav container fixed mx-auto dark:text-red-900">
            <div className='relative w-full flex sm:items-center sm:justify-center'>
                <div className="button">
                    <button className="sm:hidden p-2 mr-auto cursor-pointer" onClick={clickMenu}>
                        <img src={activado ? close : menu} alt="menu" className='w-12'/>
                    </button>
                </div>
                <nav className={`header ${activado ? 'header-open':'header-close'} transition-all duration-500 ease-in sm:opacity-100 sm:flex sm:flex-row sm:static sm:justify-center gap-0 sm:gap-4 font-medium`}>
                    <a href="#" className="menu-item border-t">Inicio</a>
                    <a href="#" className="menu-item">Sobre mí</a>
                    <a href="#" className="menu-item">Educación</a>
                    <a href="#" className="menu-item">Proyectos</a>
                    <a href="#" className="menu-item">Contacto</a>
                </nav>
                <div className="btn-theme dark:bg-slate-950 absolute right-0 p-2 rounded-full">
                    <button onClick={handleChangeTheme} className="border-2 dark:border-cyan-950 flex items-center gap-2 justify-center w-15 p-2 rounded-full">
                        <img src={(theme === 'dark') ? moonIcon : lightIcon} alt="" className="w-5 inline"/>
                        {/* {(theme === 'dark')?<moonIcon/>:<lightIcon/>} */}
                        {/* <span className='inline'>{(theme === 'dark') ? "Dark mode" : "Light mode"}</span> */}
                    </button>
                </div>
            </div>
            
        </div>
    )
}
