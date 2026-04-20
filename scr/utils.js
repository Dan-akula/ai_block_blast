export function randomElem(arr) {
    if (arr.length == 1){
        return arr[0]
    }
    if (arr.length == 0){
        return
    }
    return arr[Math.floor(Math.random() * arr.length)]
}