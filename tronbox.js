module.exports = {
  networks: {
    development: {
// For trontools/quickstart docker image
      privateKey: '424926b8a48b775d92fee8b216e5f15803bc067f6518224c7010f7b61e4722a4',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "http://127.0.0.1:8090",
      solidityNode: "http://127.0.0.1:8091",
      eventServer: "http://127.0.0.1:8092",
      network_id: "*"
    },
    shasta: {
      privateKey: '7911b45e9db66ad59bd86846dc4a6c61e208cadd60d244878aa9a112cd4ec118',
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "https://api.shasta.trongrid.io",
      solidityNode: "https://api.shasta.trongrid.io",
      eventServer: "https://api.shasta.trongrid.io",
      network_id: "*"
    },
    mainnet: {
// Don't put your private key here, pass it using an env variable, like:
// PK=da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0 tronbox migrate --network mainnet
      privateKey: process.env.PK,
      consume_user_resource_percent: 30,
      fee_limit: 100000000,
      fullNode: "https://api.trongrid.io",
      solidityNode: "https://api.trongrid.io",
      eventServer: "https://api.trongrid.io",
      network_id: "*"
    }
  }
};
