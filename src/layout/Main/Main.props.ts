import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainPorps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: ReactNode
}