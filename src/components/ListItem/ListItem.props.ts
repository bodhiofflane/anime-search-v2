import {DetailedHTMLProps, LiHTMLAttributes, ReactNode} from 'react';

export interface ListItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: ReactNode;
  title: string;
  thumbnail: string;
  to?: number;
}