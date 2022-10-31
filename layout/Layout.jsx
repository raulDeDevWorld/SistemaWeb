import { handleSignOut } from '../firebase/utils'
import Button from '../components/Button'
import style from '../styles/Layout.module.css'

export default function Layout (props) {
    function logout() {
        handleSignOut()
    }
    return (
        <>
            <header className={style.header}>
                <p>Bienvenido Logistics</p>
                <Button style='buttonSecondary' click={logout}>
                    Cerrar Sesion
                </Button>
            </header>
            <main className={style.main}>{props.children}</main>
        </>

    )
}
