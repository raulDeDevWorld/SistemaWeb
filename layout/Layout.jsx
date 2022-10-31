import { handleSignOut } from '../firebase/utils'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '../components/Button'
import style from '../styles/Layout.module.css'

export default function Layout (props) {
const router = useRouter()

    function logout() {
        handleSignOut()
    }
    function redirect() {
        router.push("/Admin")
    }
    console.log(router.pathname)
    return (
        <>
            <header className={style.header}>
                <p>Bienvenido Logistics</p>
                <div className={style.containerButtons}>
                    {router.pathname !== "/Admin" && 
                        <Button style='buttonSecondary' click={redirect}>
                            Home
                        </Button>
}
                    <Button style='buttonSecondary' click={logout}>
                        Cerrar Sesion
                    </Button>

                </div>
                
            </header>
            <main className={style.main}>{props.children}</main>
        </>

    )
}
