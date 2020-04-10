import Repository from '@/repositories/SelfApi/Repository'

export default {
  login: (data) => Repository.post('/login', data),

  logout: () => Repository.post('/logout'),

  whoami: () => Repository.get('/api/whoami'),
}
