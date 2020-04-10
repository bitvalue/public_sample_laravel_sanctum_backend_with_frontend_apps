import Repository from '@/repositories/SelfApi/Repository'

export default {
  get: () => Repository.get('/sanctum/csrf-cookie'),
}
