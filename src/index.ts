import { ethers } from 'ethers';
import Counter from '../artifacts/contracts/Counter.sol/Counter.json';

function getEth() {
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        throw new Error('Get Metamask');
    }
    return eth;
}

async function hasSigners(): Promise<boolean> {
    const eth = getEth();
    const accounts = await (eth.request({
        method: 'eth_accounts'
    }) as Promise<string []>);

    return accounts && !!accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await (eth.request({
        method: 'eth_requestAccounts'
    }) as Promise<string []>);

    return accounts && accounts.length;
}

async function getContract() {
    if (!(await hasSigners()) && !(await requestAccounts())) {
        throw new Error('Let me take your money');
    }

    const provider = new ethers.providers.Web3Provider(getEth()).getSigner();
    const address = process.env.CONTRACT_ADDRESS;
    const contract = new ethers.Contract(
        address,
        Counter.abi,
        provider
    );
    const element = document.createElement('div');

    async function setCounter(count?) {
        element.innerHTML = count || await contract.getCounter();
    }

    setCounter();

    const button = document.createElement('button');
    button.innerText = 'Increment';
    button.onclick = async function () {
        await contract.count();
    };

    contract.on(contract.filters.CounterInc(), function (count) {
        setCounter(count);
    });
    document.body.appendChild(element);
    document.body.appendChild(button);
}

getContract();
