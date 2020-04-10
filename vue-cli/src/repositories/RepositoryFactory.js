import SelfApiCsrfCookie from './SelfApi/CsrfCookie'
import SelfApiUser from './SelfApi/User'
// import AnotherEndpointApiPost from './AnotherEndpointApi/Post'

const Endpoints = {
  SelfApi: {
    CsrfCookie: SelfApiCsrfCookie,
    User: SelfApiUser,
  },

  // AnotherEndpointApi: {
  //   Post: () => AnotherEndpointApiPost,
  // },
}

export default (entity, endpoint = 'SelfApi') => Endpoints[endpoint][entity]
