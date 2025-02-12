const { getUniTVL } = require('../helper/unknownTokens')

module.exports = {
  misrepresentedTokens: true,
  polygon_zkevm: { tvl: getUniTVL({ factory: '0xcE87E0960f4e2702f4bFFE277655E993Ae720e84', useDefaultCoreAssets: true,  }), },
  canto: { tvl: getUniTVL({ factory: '0x116e8a41E8B0A5A87058AF110C0Ddd55a0ed82B7', useDefaultCoreAssets: true,  }), },
  linea: { tvl: getUniTVL({ factory: '0x4DDf0fa98B5f9Bd7Cb0645c25bA89A574fe9Be8c', useDefaultCoreAssets: true,  }), },
}
