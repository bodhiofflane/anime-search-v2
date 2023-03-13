import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/useAppHooks';
import {fetchAnimeList} from '../../store/animeListSilce/animeListSlice';

import Header from '../../layout/Header/Header';

import styles from './App.module.scss';
import Footer from '../../layout/Footer/Footer';
import Main from '../../layout/Main/Main';
import ListItem from '../ListItem/ListItem';
import List from '../List/List';

const App = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector((state) => state.animeList.animeList);
  const loadingStatus = useAppSelector(
    (state) => state.animeList.loadingStatus
  );

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  if (loadingStatus === 'loading') {
    return <h1>loading</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <Main className={styles.main}>
        <List>
          {animeList.map((oneAnime) => {
            return <ListItem key={oneAnime.title} title={oneAnime.title} thumbnail={oneAnime.thumbnail} to={oneAnime.aired.to}/>;
          })}
        </List>
      </Main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
