import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { deployHello } from '../scripts/deploy-hello';

describe('hello world', () => {
    it('should say hi', async () => {
        const hello = await deployHello()

        expect(await hello.hello()).to.equal("Hello, World");

    });
});
