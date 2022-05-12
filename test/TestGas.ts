import '@nomiclabs/hardhat-ethers';
import { expect } from 'chai';
import { deployHello } from '../scripts/deploy-hello';
import { ethers } from 'hardhat';

describe('TestGas', () => {
    it('Test', async () => {
        const TestGas = await ethers.getContractFactory('TestGas');
        const gas = await TestGas.deploy();
        await gas.deployed();

        for (let i = 0; i < 10; ++i) {
            await gas.test1();
            await gas.test2();
            await gas.test3();
            await gas.test4();
            await gas.test5();
        }
    });
});
