<template>
  <div>
    <header>
      <div class="logo">BLACKBOX</div>
      <wallet-info></wallet-info>
    </header>


    <main>
      <div class="box">
        Blackbox is a layer of security powered by the Secret Network that allows for private transactions on non-private chains.
      </div>
      <div class="label">Paste ETH destination address and amount below for your secure transaction!</div>
      <div>
        <input type="address" required v-model="address" placeholder="ETH Address">
      </div>
      <input type="address" required v-model="amount" placeholder="ETH Amount 0.1 &#128274;">
      <button @click="encrypt">ENCRYPT</button>
      <p class="label">Test: {{ JSON.stringify(pubkey) }}</p>
    </main>


    <footer>
      <a href="https://www.triviumnode.com/">
        <img src="@/assets/Trivium_white.svg" alt="Built by Trivium" class="trivimg">
      </a>
        <div class="credit">Built by Trivium</div>
      <a href="https://scrt.network/">
        <img src="@/assets/scrt.svg" alt="Built by Trivium" class="scrtimg"> 
      </a>
        <div class="credit">Powered by Secret</div>
      

    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      amount: '',

      privkey: '',
      pubkey: Uint8Array,

      cyphtext: ''
    }
  },
  methods: {
    encrypt() {
      let keychain = enigmautils.GenerateNewKeyPair();
      this.privkey = keychain.privkey();
      this.pubkey = keychain.pubkey;
    
      

    }
  }

}
</script>

<style>

</style>