import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

export async function deployCounter() {
    console.log('Here mfer');

    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    await counter.deployed();

    console.log('Address: ', counter.address);

    return counter;
}

async function count(counter) {
    await counter.count()
    console.log('Counter', await counter.getCounter());
}

deployCounter().then(count);
