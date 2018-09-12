import nfToken from '../nfTokenFactory'

export default function (tokenId, web3) {
  var contract = nfToken(web3)

  return new Promise((resolve, reject) => {
    contract.then((instance) => {
      instance.getToken(tokenId).then((response) => {
        resolve([
          parseInt(response[0].toString(), 10),
          response[1].toString()
        ])
      }).catch((error) => reject)
    })
  })
}
