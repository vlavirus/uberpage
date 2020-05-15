
function toAlternatingCase(input) {
    let arr = input.split('');
    let answer = [];
    for (let i = 0; i < input.length; i++) {
        if ( arr[i] == arr[i].toUpperCase()) {
            answer[i] = arr[i].toLowerCase();
        } else {
            answer[i] = arr[i].toUpperCase();
        }
    }
    return(answer.join(''));
}


  var txt = "HeLlO WoRlD";
  console.log(toAlternatingCase(txt));