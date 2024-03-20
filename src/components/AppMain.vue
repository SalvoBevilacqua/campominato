<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        checkBomb(num) {
            let numberOfBombClose = 0;
            this.store.arrayToCheck = [];
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
            }

            this.store.arrayToCheck.forEach(element => {
                this.store.arrayBomb.forEach(bomb => {
                    if (element === bomb) {
                        numberOfBombClose++;
                    }
                });
            });

            console.log('le bombe vicine sono: ', numberOfBombClose);
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
    <h3 v-if="!store.started">Select difficulty and click Play!</h3>

    <div v-else class="row p-0 m-0">
        <div v-for="num in store.numOfCells"
            class="border d-flex justify-content-center align-items-center align-content-center"
            :class="store.classCell, num" @click="checkBomb(num)">
            <p class="m-0 p-0">{{ num }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>