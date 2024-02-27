import { privateKeyToAccount } from 'viem/accounts';
import { StoryClient, StoryConfig } from '@story-protocol/core-sdk';
import { http } from 'viem';

const account = privateKeyToAccount('0xa128d3f31fb2239e0731a683fd50ec9f912b2c43ad9037b9008e311876cd0215');

const config: StoryConfig = {
    transport: http('https://rpc.ankr.com/eth_sepolia'),
    account: account,// in newer versions of viem, this doesn't work
}
const client = StoryClient.newClient(config);
//console.log(client);

// this works, but if you use an NFT that is already registered response.txHash is undefined
async function createIp(){
    const response = await client.ipAsset.registerRootIp({
        tokenContractAddress: '0xd516482bef63Ff19Ed40E4C6C2e626ccE04e19ED',
        tokenId: '12',
        txOptions: { waitForTransaction: true},
    });
    console.log(response);
    console.log(`Root IPA created at txn hash: ${response.txHash}\nIPA ID: ${response.ipId}`);
};

createIp();




console.log(`Test complete!`);
