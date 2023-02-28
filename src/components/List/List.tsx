import { ListProps } from './List.props';

import styles from './List.module.scss';

const List = ({children}: ListProps) => {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}
 
export default List;