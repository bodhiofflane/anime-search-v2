
import styles from './HeaderNav.module.scss';

const navItem = ['Home', 'Category', 'Random Anime', 'About', 'Contacts'];

const HeaderNav = () => {

  return (
    <ul className={styles.headerNav}>
      {navItem.map(item => {
        return (
          <li key={item} className={styles.headerNavItem}>
            <a className={styles.headerNavLink} href="https://google.com">{item}</a>
          </li>
        )
      })}
    </ul>
  );
}
 
export default HeaderNav;