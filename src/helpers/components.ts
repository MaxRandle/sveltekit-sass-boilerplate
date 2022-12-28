export type ResponsiveProp<T extends string = string> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
    };

/**
 * @param className name of the property to be made into a responsive class
 * @param classValue value of values associated with the property.
 * @returns array of responsive class names
 */
export function getResponsiveClasses(className: string, classValue: ResponsiveProp) {
  const argObject = classValue instanceof Object ? classValue : { base: classValue };
  const classes = Object.entries(argObject).map(
    ([breakpoint, val]) => `breakpoint-${breakpoint}--${className}-${val}`
  );

  return classes;
}
