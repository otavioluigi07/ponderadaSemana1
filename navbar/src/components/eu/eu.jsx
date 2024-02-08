import styles from './styles.module.scss'


function Eu() {
    return (
      <div className={styles.body}>

        <div className={styles.content}>
            <div>
                <h1 className={styles.title}>Minha atividade</h1>
            </div>
            <div className={styles.text}>
                <p>
                    Conheça o repositório do GitHub da Ponderada
                </p>
            </div>
            <div className={styles.button}>
                <a href = "https://github.com/otavioluigi07/ponderadaSemana1/tree/main"><button className={styles.btn} href = "#">Github</button></a>
            </div>
        </div>
      </div>        
    );
  }
  
  export default Eu;