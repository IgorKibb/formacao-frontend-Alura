import Banner from "./banner.png"
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial(){
   return(
      <> {/**React fragment */}
         <Cabecalho />
         <main>
            <section className={styles.principal}>
               <Menu />
               <div className={styles.principal__imagem}>
                  <h1>A galeria mais completa do espaço!</h1>
                  <img src={Banner} alt="A imagem da Terra vista do espaço." />
               </div>
            </section>
         </main>
      </>

   );
};