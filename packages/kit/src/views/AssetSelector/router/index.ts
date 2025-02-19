import type { IModalFlowNavigatorConfig } from '@onekeyhq/components';
import { LazyLoadPage } from '@onekeyhq/kit/src/components/LazyLoadPage';
import { EAssetSelectorRoutes } from '@onekeyhq/shared/src/routes';
import type { IAssetSelectorParamList } from '@onekeyhq/shared/src/routes';

const TokenSelector = LazyLoadPage(() => import('../pages/TokenSelector'));

const DeriveTypesAddressSelector = LazyLoadPage(
  () =>
    import('@onekeyhq/kit/src/views/WalletAddress/pages/DeriveTypesAddress'),
);

export const AssetSelectorRouter: IModalFlowNavigatorConfig<
  EAssetSelectorRoutes,
  IAssetSelectorParamList
>[] = [
  {
    name: EAssetSelectorRoutes.TokenSelector,
    component: TokenSelector,
  },
  {
    name: EAssetSelectorRoutes.DeriveTypesAddressSelector,
    component: DeriveTypesAddressSelector,
  },
];
