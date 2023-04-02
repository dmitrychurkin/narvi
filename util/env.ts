export const isBrowser = () => typeof document !== 'undefined';

export const isServer = () => !isBrowser();
