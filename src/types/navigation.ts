import R from '../res';

export type TNavigationParams = {
  [R.routes.ROOT_MAIN]: {tab: string} | undefined;

  [R.routes.STACK_PRODUCT_DETAIL]: undefined;
  [R.routes.STACK_PRODUCT_LIST]: undefined;

  [R.routes.SCREEN_PRODUCT_DETAIL]: undefined;
  [R.routes.SCREEN_PRODUCT_LIST]: undefined;
};
