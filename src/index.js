module.exports = function check(str, bracketsConfig) {
  let bracketsArr = str.split('');

    for (let i = 0; i < bracketsArr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === bracketsArr[i] && bracketsConfig[j][1] === bracketsArr[i + 1]) {
                bracketsArr.splice(i, 2);
                i = -1;
                continue;
            }
        }
    }
    return bracketsArr.length === 0 ? true : false;
}
