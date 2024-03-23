function checkEnding(str1, str2) {
    let index1 = str1.length - 1;
    let index2 = str2.length - 1;
    while (index2 >= 0) {
        if (str1[index1] !== str2[index2]) {
            return false;
        }
        index1--;
        index2--;
    }
    return true;
}
console.log(checkEnding("samurai", "zi"));
console.log(checkEnding("samurai", "urai"));
