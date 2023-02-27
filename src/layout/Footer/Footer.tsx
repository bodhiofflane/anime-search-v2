import { FooterProps } from './Footer.props';


const Footer = ({children, className, ...props}: FooterProps) => {
  return (
    <footer className={className} {...props}>
      {children}
    </footer>
  );
}
 
export default Footer;