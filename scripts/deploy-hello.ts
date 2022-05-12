import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

export async function deployHello() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    return hello;
}

async function sayHello(hello: any) {
    console.log(await hello.hello());
}

deployHello().then(sayHello)
