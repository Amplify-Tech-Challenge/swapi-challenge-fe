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
    RESTURL_MYAPI: (() => {
      if (isDev) return 'http://localhost:4000/api'
      if (isProd) {
        return 'https://swapi-express-gateway.herokuapp.com/api'
      }
      if (isStaging) return 'https://swapi-express-gateway.herokuapp.com/api'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
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
