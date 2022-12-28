export type ResponsiveProp<T extends string = string> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
    };

/**
 * @param propName name of the property to be made into a responsive class
 * @param propValue value of values associated with the property.
 * @returns array of responsive class names
 */
export function getResponsiveClasses(propName: string, propValue: ResponsiveProp) {
  const argObject = propValue instanceof Object ? propValue : { base: propValue };
  const classes = Object.entries(argObject).map(
    ([breakpoint, val]) => `breakpoint-${breakpoint}--${propName}-${val}`
  );

  return classes;
}
