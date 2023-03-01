import {IHeaderProps} from './Header.props';

import HeaderNav from '../../components/HeaderNav/HeaderNav';

import styles from './Header.module.scss';

import LoginButton from '../../components/LoginButton/LoginButton';
import Container from '../../components/Container/Container';

const Header = ({children, className, ...props}: IHeaderProps) => {
  return (
    <header
      className={className}
      {...props}
    >
      <Container>
        <div className={styles.innerHeader}>
          <div className={styles.headerBox}>
            <h2 className={styles.headerLogo}>Anime Search</h2>
          </div>

          <HeaderNav />

          <LoginButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
