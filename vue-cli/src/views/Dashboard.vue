<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p class="message">Your email address is<br>{{ user.email }}</p>
    <p class="error" v-if="error">{{ error.message }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory'

export default {
  computed: {
    user() {
      return this.$store.state.user.data
    }
  },

  data() {
    return {
      error: null,
    }
  },

  methods: {
    async logout() {
      try {
        await RepositoryFactory('User').logout()
        this.$store.commit('user/logout')
        this.$router.push('/')
      } catch (error) {
        this.$set(this, 'error', this.$store.state.api.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  .message {
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .error {
    color: #f00;
  }

  button {
    font-size: 1.25rem;
  }
}
</style>
