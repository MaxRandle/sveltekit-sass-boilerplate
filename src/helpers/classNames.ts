export type ClassNamesArgs = {
  [key: string]: string | boolean | undefined;
};

export default (classes: ClassNamesArgs): string =>
  Object.entries(classes)
    .map((entry) => (entry[1] ? entry[0] : undefined))
    .filter((name) => !!name)
    .join(' ');
