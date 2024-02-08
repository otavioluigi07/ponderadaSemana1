import styles from './styles.module.scss'


function Navbar() {
    return (
    <div className={styles.Navbar}>
        
        <div className={styles.container}>
        <h1 className = {styles.logo}>RAPIDINHO</h1>
        <div className= {styles.links}>
            <a href="https://www.google.com">GOOGLE</a>
            <a href="https://www.youtube.com">YOUTUBE</a>
            <a href="https://www.spotify.com">SPOTIFY</a>
            <a href="https://www.instagra,.com">INSTAGRAM</a>
            <a href="https://www.twwiter.com">X</a>
        </div>
        </div>
        <div className={styles.banner}>
        </div>
        <div className={styles.proposito}>
            <h1>Qual o propóstio do RAPIDINHO?</h1>
            <p>A proposta do rapinho é ser um site onde você pode ter em um único só lugar todos as suas redes sociais!
            </p>

        </div>


    </div>






    );
  }
  
  export default Navbar;