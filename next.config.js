const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// https://nextjs.org/docs/#custom-configuration



module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    RESTURL_IMAGEAPI: (() => {
      if (isDev) return 'http://localhost:4000/assets/images/characters'
      if (isProd) {
        return 'https://swapi-express-gateway.herokuapp.com/assets/images/characters'
      }
      if (isStaging) return 'https://swapi-express-gateway.herokuapp.com/assets/images/characters'
      return 'RESTURL_IMAGEAPI:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    RESTURL_MYAPI: (() => {
      if (isDev) return 'http://localhost:4000/api'
      if (isProd) {
        return 'https://swapi-express-gateway.herokuapp.com/api'
      }
      if (isStaging) return 'https://swapi-express-gateway.herokuapp.com/api'
      return 'RESTURL_MYAPI:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })()
  }
  
  // async function headers() {
  //   return [
  //     {
  //       source: '/characters',
  //       headers: [
  //         {
  //           key: 'User-Agent',
  //           value: '*',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/characters/:id',
  //       headers: [
  //         {
  //           key: 'User-Agent',
  //           value: '*',
  //         },
  //       ],
  //     },
  //   ]
  // }

  return {
    env,
    // headers
  }
}
