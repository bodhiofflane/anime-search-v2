import classNames from 'classnames';

import { ContainerProps } from './Container.props';

import styles from './Container.module.scss';

const Container = ({children, className, ...props}: ContainerProps) => {
  return (
    <div
      className={classNames(styles.container, className)}
      {...props}
    >
      {children}
    </div>
  );
}
 
export default Container;