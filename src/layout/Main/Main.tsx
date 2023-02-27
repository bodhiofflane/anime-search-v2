import Container from '../../components/Container/Container';
import { MainPorps } from './Main.props';

const Main = ({children, className, ...props}: MainPorps) => {
  return (
    <main className={className} {...props}>
      <Container>
        {children}
      </Container>
    </main>
  );
}
 
export default Main;