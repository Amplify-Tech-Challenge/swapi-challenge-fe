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
      if (isDev) return 'http://localhost:3000/api'
      if (isProd) {
        return 'https://swapi-challenge-fe.vercel.app/api'
      }
      if (isStaging) return 'http://localhost:3000/api'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })()
  }

  return {
    env,
  }
}
