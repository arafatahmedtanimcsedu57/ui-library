import { useCallback, useContext } from 'react';
import classNames from 'classnames';
import { prefix as addPrefix } from './prefix';
import { CustomContext } from '../CustomProvider/CustomProvider';

export type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | undefined
  | null
  | boolean;


export interface ClassArray extends Array<ClassValue> {} //eslint-disable-line @typescript-eslint/no-empty-interface

export interface ClassDictionary {
  [id: string]: unknown;
}
/**
 * Add a prefix to all classNames.
 *
 * @param str prefix of className
 * @returns { withClassPrefix, merge, prefix }
 *  - withClassPrefix: A function of combining className and adding a prefix to each className.
 *    At the same time, the default `classPrefix` is the first className.
 *  - merge: A merge className function.
 *  - prefix: Add a prefix to className
 *  - rootPrefix
 */
function useClassNames(str: string) {
  const { classPrefix = 'bdris' } = useContext(CustomContext) || {};
  const componentName = addPrefix(classPrefix, str);

  /**
   * @example
   *
   * if str = 'button':
   * prefix('red', { active: true }) => 'bdris-button-red bdris-button-active'
   */
  const prefix = useCallback(
    (...classes: ClassValue[]) => {
      const mergeClasses = classes.length
        ? classNames(...classes)
            .split(' ')
            .map(item => addPrefix(componentName, item))
        : [];

      return mergeClasses.filter(cls => cls).join(' ');
    },
    [componentName]
  );

  /**
   * @example
   *
   * if str = 'button':
   * withClassPrefix('red', { active: true }) => 'bdris-button bdris-button-red bdris-button-active'
   */
  const withClassPrefix = useCallback(
    (...classes: ClassValue[]) => {
      const mergeClasses = prefix(classes);
      return mergeClasses ? `${componentName} ${mergeClasses}` : componentName;
    },
    [componentName, prefix]
  );

  /**
   * @example
   * rootPrefix('btn') => 'bdris-btn'
   * rootPrefix('btn', { active: true }) => 'bdris-btn bdris-active'
   */
  const rootPrefix = (...classes: ClassValue[]) => {
    const mergeClasses = classes.length
      ? classNames(...classes)
          .split(' ')
          .map(item => addPrefix(classPrefix, item))
      : [];

    return mergeClasses.filter(cls => cls).join(' ');
  };

  return {
    withClassPrefix,
    merge: classNames,
    prefix,
    rootPrefix
  };
}

export default useClassNames;
