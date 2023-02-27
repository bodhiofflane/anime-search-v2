import { DetailedHTMLProps, ReactNode } from 'react';

export interface ContainerProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}