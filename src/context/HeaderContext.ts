import { createContext } from 'react';
import { breakpoint } from '../components/shared/styles';

interface HeaderContextInterface {
  navBreakpoint: number;
}

export const defaultHeaderContext = {
  navBreakpoint: breakpoint,
};

export const HeaderContext = createContext<HeaderContextInterface>(defaultHeaderContext);
