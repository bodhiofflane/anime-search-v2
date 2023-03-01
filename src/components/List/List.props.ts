import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';



export interface ListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  children: ReactNode;
}