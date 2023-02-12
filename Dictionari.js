var word;
var wordarr;
var checkWord;
function addword () {
    word = document.getElementById("curentWord").value;
    wordarr = word.split(' ');
    }
function Check () {
    checkWord = document.getElementById("this").value;
        for (let i = 0; i < wordarr.length; ++i) {
            if (wordarr[i] == checkWord)
                document.getElementById("text").innerHTML =
                    '<div class="card" style="width: 13rem;">\n' +
                    '  <div class="card-body">\n' +
                    '    <p class="text-success">This word already exist.</p>\n' +
                    '  </div>\n' +
                    '</div>'
            else {
                document.getElementById("text").innerHTML =
                    '<div class="card" style="width: 13rem;">\n' +
                    '  <div class="card-body">\n' +
                    '    <p class="text-danger">This word do not exist.</p>\n' +
                    '  </div>\n' +
                    '</div>'
                wordarr = checkWord.split(' ');
            }
        }
    }