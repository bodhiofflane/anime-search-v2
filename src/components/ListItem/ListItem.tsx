import { ListItemProps } from './ListItem.props';

import styles from './ListItem.module.scss';

import Anime from '../../assets/anime-title.jpg';

const ListItem = ({children ,...props}: ListItemProps) => {
  return (
    <li className={styles.listItem} {...props}>
      <div className={styles.thumbntaiBox}>
        <img className={styles.thumbnail} src={Anime} alt="qwe" />
        <h3 className={styles.title}>Перерождение дяди</h3>
      </div>
      <p>2022</p>
    </li>
  );
}
 
export default ListItem;