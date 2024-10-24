<template>
    <div id="score">
        <h1>Score Board</h1>
        <section class="score">
            Jogador <span>{{ winCount }}</span> x <span>{{ loseCount }}</span> Computador
        </section>
    </div>
</template>

<script>
export default {
    props: ['winCount', 'loseCount']
}
</script>
<style lang="scss">
#score {
    padding: 24px;
    border-bottom: 1px solid black;
    font-size: 18px;
}

span {
    padding: 8px;
    border: 1px solid black;
    font-weight: bold
}
</style>