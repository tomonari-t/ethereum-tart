import sword from '../images/token-images/icons-sword--1024-1024.png'
import shield from '../images/token-images/icons-shield--1024-1024.png'
import swordSmall from '../images/token-images/icons-sword--128-128.png'
import shieldSmall from '../images/token-images/icons-shield--128-128.png'

const TOKEN_TYPE_IMAGE_URLS = [
  sword,
  shield,
]

const TOKEN_TYPE_IMAGE_URLS_SMALL = [
  swordSmall,
  shieldSmall,
]

export default function (tokenType, size) {
  switch (size) {
    case 'small':
      return TOKEN_TYPE_IMAGE_URLS_SMALL[tokenType]
    default:
      return TOKEN_TYPE_IMAGE_URLS[tokenType]
  }
}
