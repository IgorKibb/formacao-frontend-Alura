import Home from '../../assets/home-ativo.png'
import Curtidas from '../../assets/mais-curtidas-inativo.png'
import Vistas from '../../assets/mais-vistas-inativo.png'
import Novas from '../../assets/novas-inativo.png'
import Surpreenda from '../../assets/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu(){
   return(
      <nav className={styles.menu}>
         <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
               <img src={Home} alt="" />
               <a href="/">InÍcio</a>
            </li>
            <li className={styles.menu__item}>
               <img src={Curtidas} alt="" />
               <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
               <img src={Vistas} alt="" />
               <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
               <img src={Novas} alt="" />
               <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
               <img src={Surpreenda} alt="" />
               <a href="/">Surpreenda-me</a>
            </li>
         </ul>
      </nav>
   );
};