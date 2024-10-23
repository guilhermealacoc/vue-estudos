<template>
  <div id="app">
    <h1>Onde surgiram os primeiros ancestrais do homem?</h1><br>
    <div class="option">
      <input type="radio" name="options" value="True">
      <label for="options">True</label>
    </div><br>
    <div class="option">
      <input type="radio" name="options" value="False">
      <label for="options">False</label>
    </div><br>
    <button class="send" type="button">Send</button>
  </div>
</template>

<script>
export default {
  name: 'App'
}


</script>


<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  h1 {
    text-align: center;
    min-width: 960px;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0;
  }

  input[type=radio] {
    margin-right: 8px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: white;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;

  }
}
</style>
