import styles from './styles.module.scss'


function Navbar() {
    return (
      <div className={styles.container}>

        <h1 className = {styles.logo}>RAPIDINHO</h1>

        <div className= {styles.links}>
            <a href="https://www.google.com">GOOGLE</a>
            <a href="https://www.google.com">YOUTUBE</a>
            <a href="https://www.google.com">SPOTIFY</a>
            <a href="https://www.google.com">INSTAGRAM</a>
            <a href="https://www.google.com">X</a>
        </div>

      </div>
    );
  }
  
  export default Navbar;