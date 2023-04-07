import fotosPoupulares from "./fotos-populares.json";
import styles from "./Populares.module.scss";

export default function Populares(){
   return(
      <aside className={styles.populares}>
         <h2>Populares</h2>
         <ul className={styles.populares__imagens}>
            {fotosPoupulares.map((fotoPoupular) => {
               return(
                  <li key={fotoPoupular.id}>
                     <img src={fotoPoupular.path} alt={fotoPoupular.alt} />
                  </li>
               )
            })}
         </ul>
         <button>Ver mais fotos</button>
      </aside>
   )
}