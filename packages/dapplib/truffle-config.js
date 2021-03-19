require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name reward stereo provide hunt kiwi bone gauge'; 
let testAccounts = [
"0xea4f21d1240b5f124bdbbd144d15730449299cd8b5e4e5db35d42f7284c3a6fa",
"0x381bd46df00afb3b5c01efd28474b6a084e49da1f761a99b1f86864259493ceb",
"0xc60b7a107ca278a342eec063a892177b1a2dac0588ce4ad281a966a0b10da56f",
"0x0caea7cecf206c63d61828f5451bb32b4b1c3db0c295d5d317bf1beb9a1ee12a",
"0x426f02ceb556b87d74d2b28dda4e4515458ffb55969e55c4dfa957b85e387568",
"0x25cde179e1700f510c25173d5a9fed8e65323ba737af8667d0ee61d730e7ef5a",
"0x9b3e248ce46e88cc8d36b68cd18060db6f75574800079b6528b2fbd7752a24c2",
"0x73ff7576478be640886d0075e610d4cd730544a0eed8e059cdae4b86401aea61",
"0x59e11e58972f546a1c3edf847d3e7710ab62deafd4f4e8176c41c4c14e015a32",
"0xe2a04413aab0f6c89d52037df7a29388d04c315d772be5bf6c209dd269cd0738"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
