<template>
  <div class="home">
    <h1>Home</h1>
    <form @submit.prevent="login">
      <p class="error" v-if="error">{{ error.message }}</p>
      <input type="text" placeholder="email" v-model="account.email"><br>
      <input type="text" placeholder="password" v-model="account.password"><br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory'

export default {
  data() {
    return {
      account: { email: 'test@example.com', password: 'password' },

      error: null,
    }
  },

  methods: {
    async login() {
      try {
        await RepositoryFactory('User').login(this.account)
        this.$router.push('/dashboard')
      } catch (error) {
        this.$set(this, 'error', this.$store.state.api.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .error {
    color: #f00;
  }

  input, button {
    font-size: 1.25rem;
  }

  button {
    margin-top: 1rem;
  }
}
</style>
