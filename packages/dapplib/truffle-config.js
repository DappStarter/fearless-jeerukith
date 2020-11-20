require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember erosion grace neck food spirit'; 
let testAccounts = [
"0x07b8a81db3a631cd1a5001a15d3b5b7e54af3074e1d32f4747bd9e6f38ab08ef",
"0x88877162a39333235884a0565e6ea111a586023abc90c0d47c5a453ea4af5fa7",
"0xfc8398c7ed85b9e34fa937b4f180d8622fc3d3937016ad8d37d13d44812f463a",
"0x9e6c36de7fe396e097dddd2787ed2077015bfb118d9eeaabd9ab53bd242a266c",
"0xe195c3db357d75f7ba7a0c32476eaf88ee3f6a83131c7010db82198a74c3f317",
"0xee61764c4171debbd43c835419c35b071172117f09a7604627a6a739fd34c47c",
"0x4bc23db88d809e511fe444877ea0d2f2609e489529fbc871dc7992c9e4a29078",
"0x6f30ef4b1f9a0a445f3950e622470fcc28eab19b1fbe7167120a0dd0a9b99f9b",
"0xfb0afcf3b7a78a42449e7a0d2752720d355a7fd5c89d7a3a8aa2064a4bbb4d31",
"0xb38f7939c7bf81bfac04a218647c22df40572c081d0a521cf175007a2d627126"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
