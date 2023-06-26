import { Todo } from "@/models/Todo";

function arrayToMap(array: Todo[]) {
    const map = new Map();
    array.forEach((element) => {
        if (map.get(element.name) === undefined) {
            map.set(element.name, element.done);
        }
    });
    return map;
}

function mapToArray(map: Map<string, boolean>) {
    const array: Todo[] = [];
    map.forEach((value, key) => {
        array.push(new Todo(key, value));
    });
    return array;
}

export { arrayToMap, mapToArray };