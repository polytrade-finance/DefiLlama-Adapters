const { get } = require('./helper/http')
const { sumTokens2 } = require('./helper/solana')

async function staking() {
  const { data } = await get("https://api-edge.only1.app/staking-pools")

  const owners = data.map(i => i.publicKey)
  return sumTokens2({ tokens: ['3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR'], owners, })
}

module.exports = {
  timetravel: false,
  methodology: "TVL is the sum of all tokens in the staking pools",
  solana: {
    staking,
    tvl: async () => ({})
  }
}