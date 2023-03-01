import { ListItemProps } from './ListItem.props';

import styles from './ListItem.module.scss';

import Anime from '../../assets/anime-title.jpg';

const ListItem = ({title, thumbnail, to, children ,...props}: ListItemProps) => {
  return (
    <>
    <li className={styles.listItem} {...props}>
      <img className={styles.img} src={thumbnail} alt="qwe" />
      <h3 className={styles.title}>{title}</h3>
      {/* <p className={styles.secondInfo}>{to}</p> */}
    </li>

    </>
  );
}
 
export default ListItem;