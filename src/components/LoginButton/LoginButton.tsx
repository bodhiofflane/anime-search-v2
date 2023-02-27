
import styles from './LoginButton.module.scss';

const LoginButton = () => {
  return (
    <ul className={styles.loginButtonGroup}>
      <li><a className={styles.loginButton} href="#s">Login</a></li>
      <li><a className={styles.loginButton} href="#s">Regestry</a></li>
    </ul>
  );
};

export default LoginButton;
