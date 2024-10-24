<template v-if="this.answer">
  <div id="app">

    <div class="content">
      <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount" /><br>
      <h1 v-html="this.question"></h1><br>
      <template v-for="answer in this.answers" :key="answer">
        <div class="option">
          <input :disabled="this.answerSubmited" type="radio" name="options" :value="answer"
            v-model="this.chosenAnswer">
          <label v-html="answer"></label>
        </div>
      </template>

      <button v-if="!this.answerSubmited" @click="this.submitAnswer()" class="send" type="button">Send</button><br><br>
      <section v-if="this.answerSubmited" class="result">
        <h4 v-if="this.chosenAnswer == this.correctAswer">&#9989; Correto!</h4><br>
        <h4 v-if="this.chosenAnswer !== this.correctAswer">&#10060; Errado o correto: {{ this.correctAswer }}</h4>
        <button @click="this.getNewQuestion()" class="send" type="button">Proxima Questao</button>
      </section>
    </div>
  </div>
</template>


<script>
import ScoreBoard from './components/ScoreBoard.vue';


export default {
  name: 'App',
  components: {
    ScoreBoard
  },
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAswer: undefined,
      chosenAnswer: undefined,
      answerSubmited: undefined,
      winCount: 0,
      loseCount: 0
    }
  },
  computed: {
    answers() {
      var answers = [...this.incorrectAnswers];
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAswer)
      return answers;
    }
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert('Marque uma alternativa')
      } else {
        this.answerSubmited = true
        if (this.chosenAnswer == this.correctAswer) {
          this.winCount++
        } else {
          this.loseCount++
        }
      }
    },

    async getNewQuestion() {
      this.answerSubmited = false;
      this.chosenAnswer = undefined;
      this.question = undefined;
      try {
        const response = await this.axios.get('https://opentdb.com/api.php?amount=1&category=23');
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAswer = response.data.results[0].correct_answer;

        console.log(response.data);
      } catch (error) {
        console.error("Erro ao obter a pergunta:", error);
      }
    }
  },
  created() {
    this.getNewQuestion()
  }
}

</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f5f5f5;
  padding: 20px;

  .content {
    width: 100%;
    max-width: 600px;
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #2c3e50;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 24px;
    word-wrap: break-word;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0;
    font-size: 18px;

    input[type=radio] {
      margin-right: 8px;
    }

    label {
      cursor: pointer;
    }
  }

  button.send {
    margin-top: 16px;
    height: 40px;
    min-width: 120px;
    padding: 0 20px;
    color: white;
    background-color: #1867c0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #145a9e;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .result {
    margin-top: 20px;

    h4 {
      font-size: 20px;
      margin: 12px 0;
    }
  }
}
</style>
