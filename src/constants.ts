

export const getBlockChainEndpoint = (chainId: number) =>{
  return chainId === 1 ? "https://mainnet-api.ainetwork.ai" : "https://testnet-api.ainetwork.ai"
}
export const getBlockChainEventEndpoint = (chainId: number) => {
  return chainId === 1 ? "wss://mainnet-event.ainetwork.ai" : "wss://testnet-event.ainetwork.ai"
}
export const parseChainId = (chainId: '1' | '0') => {
  return chainId === '1' ? 1 : 0;
}

export const Path = {
  app: (appName: string): any => {
    return {
      root: () => `/apps/${appName}`,
      status: () => `${Path.app(appName).root()}/status`,
      balance: () => `${Path.app(appName).root()}/balance`,
      balanceOfUser: (userAddress: string) => `${Path.app(appName).balance()}/${userAddress}/balance`,
      historyOfUser: (userAddress: string) => `${Path.app(appName).balance()}/${userAddress}/history`,
      deposit: () => `${Path.app(appName).root()}/deposit`,
      depositOfUser: (userAddress: string) => `${Path.app(appName).deposit()}/${userAddress}`,
      billingConfig: () => `${Path.app(appName).root()}/billingConfig`,
      model: () => `${Path.app(appName).root()}/model`,
      userOfModel: (userAddress: string) => 
        `${Path.app(appName).model()}/${userAddress}`,
      request: (userAddress: string, requestKey: string) => 
        `${Path.app(appName).userOfModel(userAddress)}/${requestKey}/request`,
      response: (userAddress: string, requestKey: string) => 
        `${Path.app(appName).userOfModel(userAddress)}/${requestKey}/response`,
    }
  },
  transfer: (from: string, to: string, transferKey: string) => 
    `/transfer/${from}/${to}/${transferKey}/value`,
}

export const SECOND = 1000;
export const HANDLER_HEARBEAT_INTERVAL = 15 * SECOND;