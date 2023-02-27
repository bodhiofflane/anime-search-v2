import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/useAppHooks';
import {fetchAnimeList} from '../../store/animeListSilce/animeListSlice';

import Header from '../../layout/Header/Header';

import styles from './App.module.scss';
import Footer from '../../layout/Footer/Footer';
import Main from '../../layout/Main/Main';

const App = () => {
  const dispatch = useAppDispatch();
  const animeList = useAppSelector((state) => state.animeList.animeList);
  const loadingStatus = useAppSelector(
    (state) => state.animeList.loadingStatus
  );

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  console.log(animeList);

  if (loadingStatus === 'loading') {
    return <h1>loading</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <Main className={styles.main}>
        <ul>
          {animeList.map((oneAnime) => {
            return <li>{oneAnime.title}</li>;
          })}
        </ul>
      </Main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
