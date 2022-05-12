import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';

require('dotenv').config({ path: __dirname + '/.env' });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: '0.8.10',
    networks: {
        hardhat: {
            chainId: 1337
        },
        rinkeby: {
            url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
            accounts: [`${process.env.PRIVATE_KEY}`]
        }
    }
};
