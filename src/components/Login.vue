<template>
    <div>
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button><br><hr/>
        <h3>note: admin & pass to login and once you are in the page if  you refresh it you will redirect to login again</h3>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username === 'admin' && this.input.password === 'pass') {
        this.$store.commit('setAuthentication', true)
        this.$router.replace({ name: 'secure' })
      } else {
        console.log('The username and / or password is incorrect')
      }
    }
  }
}
</script>
