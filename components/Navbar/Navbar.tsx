import Link from "next/link";
import styles from './Navbar.module.scss'

type NavbarProps = {

}
export const Navbar = (props: NavbarProps) => {

    return (
        <div className={styles.links}>
            <Link href={'/'}>
                Home
            </Link>
            <Link href={'/characters'}>
                Characters
            </Link>

        </div>
    )
}