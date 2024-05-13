import { NavLink, Outlet } from "react-router-dom";
import style from '../css/LayoutBase.module.css'
import cat from '../images/кисик.jpg'
import Sidebar from '../components/Sidebar.jsx'

function LayoutBase () {
    return (
        <>
        <header className={style.header}>
            <NavLink to='/movies' className={({isActive}) => isActive ? style.activeLink : style.link}>Фильмы</NavLink>
            <NavLink to='/search' className={({isActive}) => isActive ? style.activeLink : style.link}>Поиск</NavLink>
        </header>

        <div className={style.content}>
            <Outlet />
            <Sidebar />
        </div>
        
        <footer className={style.footer}>
            <p className={style.wordInFooter}> &#169; 2024, Яночка</p>
            <img className={style.img} src={cat} alt="Картинка с котиком" />
        </footer>
        </>
    )
}

export default LayoutBase