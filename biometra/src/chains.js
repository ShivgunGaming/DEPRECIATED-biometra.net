//Cross-chain wallet
//MATIC Tx Internat Issue, patched up.

const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'Enter your chain rpc url here',
    ticker: 'ETH'
  };
  
  const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'Enter your chain rpc url here',
    ticker: 'MATIC'
  };
  
  const Avalanche = {
    hex: '0xa86a',
    name: 'Avalanche Mainnet',
    rpcUrl: 'Enter your chain rpc url here',
    ticker: 'AVAX'
  };
  
  const Binance = {
    hex: '0x38',
    name: 'Binance Mainnet',
    rpcUrl: 'Enter your chain rpc url here',
    ticker: 'BNB'
  };
  
  export const CHAINS_CONFIG = {
    '0x1': Ethereum,
    '0x13881': MumbaiTestnet,
    '0xa86a': Avalanche,
    '0x38': Binance,
  };
  
