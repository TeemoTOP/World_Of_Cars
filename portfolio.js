window.onload = function() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        var text = paragraphs[i].textContent;
        paragraphs[i].innerHTML = capitalizeSentences(text);
    }
};

function capitalizeSentences(text) {
    return text.replace(/(^|\.\s+)([a-z])/g, function(match) {
        return match.toUpperCase();
    });
}

