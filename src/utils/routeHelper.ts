export const createVersionedRoute = (version: string, path: string): string => {
  return `/${version}${path}`;
};
