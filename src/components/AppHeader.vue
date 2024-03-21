<script>
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { store } from "../store";
export default {
    data() {
        return {
            store,
        };
    },
    created() {

    },
    methods: {
        play() {
            switch (this.store.difficulty) {
                case 'easy':
                    this.store.numOfCells = 100;
                    this.store.classCell = 'col10';
                    this.store.numberOfBomb = 10;
                    this.store.itemToCheck = 10;
                    this.store.leftColumn = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
                    this.store.rightColumn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
                    break;
                case 'medium':
                    this.store.numOfCells = 64;
                    this.store.classCell = 'col8';
                    this.store.numberOfBomb = 18;
                    this.store.itemToCheck = 8;
                    this.store.leftColumn = [1, 9, 17, 25, 33, 41, 49, 57];
                    this.store.rightColumn = [8, 16, 24, 32, 40, 48, 56, 64];
                    break;
                case 'hard':
                    this.store.numOfCells = 36;
                    this.store.classCell = 'col6';
                    this.store.numberOfBomb = 18;
                    this.store.itemToCheck = 6;
                    this.store.leftColumn = [1, 7, 13, 19, 25, 31];
                    this.store.rightColumn = [6, 12, 18, 24, 30, 36];
                    break;

                default:
                    this.store.numOfCells = 100;
                    this.store.classCell = 'col10';
                    this.store.numberOfBomb = 10;
                    this.store.itemToCheck = 10;
                    this.store.leftColumn = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
                    this.store.rightColumn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
                    break;
            };
            // popolo l'array delle bombe
            this.randomArray(this.store.numOfCells);

            // calcolo il punteggio per vincere la partita
            this.store.maxPoints = this.store.numOfCells - this.store.numberOfBomb;

            // stampo l'array delle bombe
            console.log('sono buono, le bombe sono nelle caselle: ', this.store.arrayBomb);
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        randomArray(max) {
            this.store.arrayBomb = [];
            while (this.store.arrayBomb.length < this.store.numberOfBomb) {
                const randomN = this.randomNum(1, max);
                if (!this.store.arrayBomb.includes(randomN)) {
                    this.store.arrayBomb.push(randomN);
                }
            }
            return this.store.arrayBomb;
        },
        resetMatch() {
            window.location.reload(true);
        }
    }
}
</script>

<template>
    <header class="w-100 p-3 d-flex justify-content-between align-items-center">
        <a class="d-flex g-2 align-items-center text-decoration-none text-black" @click="resetMatch">
            <img src="../assets/mobile-logo.png" alt="logo">
            <h2>Campo Minato</h2>
        </a>

        <div v-if="!store.arrayBomb.length > 0" class="d-flex align-items-center gap-2">
            <label for="form-select" class="text-nowrap">Select difficulty:</label>
            <select class="form-select border border-secondary" aria-label="Default select example" id="form-select"
                v-model="store.difficulty">
                <option selected value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button class="btn btn-outline-secondary" @click="play">Play!</button>
        </div>

        <button v-else class="btn btn-outline-secondary" @click="resetMatch">Rematch!</button>
    </header>
</template>

<style lang="scss" scoped>
img {
    height: 4rem;
}
</style>