import { reactive } from "vue";

export const store = reactive({
    difficulty: 'easy',
    numOfCells: 0,
    classCell: 'col10',
    isABomb: false,
    numberOfBomb: 0,
    itemToCheck: 0,
    arrayToCheck: [],
    leftColumn: [],
    rightColumn: [],
    arrayBomb: [],
});