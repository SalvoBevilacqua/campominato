<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        won() {
            const dom = document.getElementById("mydom");
            dom.innerHTML = '';
            dom.innerHTML = `<h2 class="mt-5 pt-5 text-center">Complimenti, hai vinto!</h2>`;
        },
        foundBomb() {
            this.store.arrayBomb.forEach(bomb => {
                const bombs = document.getElementById(bomb);
                bombs.innerHTML = '';
                bombs.innerHTML = '<i class="fa-solid fa-bomb"></i>';
            });
        },
        checkBomb(num) {
            let numberOfBombClose = 0;
            this.store.arrayToCheck = [];

            this.store.arrayBomb.forEach(element => {
                if (num === element) {
                    this.store.isABomb = true;
                    this.foundBomb();
                    return;
                };
            });

            if (!this.store.isABomb) {
                if (this.store.leftColumn.includes(num)) {
                    this.existNumber(num - store.itemToCheck);
                    this.existNumber(num - store.itemToCheck + 1);
                    this.existNumber(num + 1);
                    this.existNumber(num + store.itemToCheck);
                    this.existNumber(num + store.itemToCheck + 1);
                } else if (this.store.rightColumn.includes(num)) {
                    this.existNumber(num - store.itemToCheck - 1);
                    this.existNumber(num - store.itemToCheck);
                    this.existNumber(num - 1);
                    this.existNumber(num + store.itemToCheck - 1);
                    this.existNumber(num + store.itemToCheck);
                } else {
                    this.existNumber(num - store.itemToCheck - 1);
                    this.existNumber(num - store.itemToCheck);
                    this.existNumber(num - store.itemToCheck + 1);
                    this.existNumber(num - 1);
                    this.existNumber(num + 1);
                    this.existNumber(num + store.itemToCheck - 1);
                    this.existNumber(num + store.itemToCheck);
                    this.existNumber(num + store.itemToCheck + 1);
                };
                this.store.arrayToCheck.forEach(elementToCheck => {
                    this.store.arrayBomb.forEach(bomb => {
                        if (elementToCheck === bomb) {
                            numberOfBombClose++;
                        }
                    });
                });

                // stampo il numero di bombe vicine
                const notABombs = document.getElementById(num);
                notABombs.innerHTML = '';
                if (numberOfBombClose !== 0) {
                    notABombs.innerHTML = `<p class="m-0 p-0">${numberOfBombClose}</p>`;
                }
                this.store.points = this.store.points + 1;
            };

            // verifico la vincita
            if (this.store.points === this.store.maxPoints) {
                this.won();
            }
        },
        existNumber(int) {
            if (int > 0 && int < 101) {
                this.store.arrayToCheck.push(int);
            }
        },
    }
}
</script>

<template>
    <h3 v-if="store.numOfCells === 0" class="text-center mt-5 pt-5">Select difficulty and click Play!</h3>

    <div v-else class="row p-0 m-0">
        <div v-for="num in store.numOfCells"
            class="border d-flex justify-content-center align-items-center align-content-center fw-bold"
            :class="store.classCell" @click="checkBomb(num)" :id="num">
            <p class="m-0 p-0 fw-bold">
                <i class="fa-solid fa-fan"></i>
                <!-- per debug
                {{ num }} -->
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>