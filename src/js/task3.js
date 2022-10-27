
export const funcs = {
    formatText
}

function formatText(text, maxStringSize, maxStringCount, selectedChoice) {

    let formattedText = '';
    let currentStringCount = 0;
    let currentStringSize = 0;

    for (var i = 0; i < text.length; i++) {
        formattedText += text[i];
        currentStringSize++;
        switch (selectedChoice) {
            case 0:
                checkStringSize();
                if (checkStringCount()) {
                    return formattedText;
                }
                break;
            case 1:
                if (checkStringSize()) {
                    moveIndexToEnd(' ');
                }
                else if (text[i] == ' ') {
                    formattedText += '\n';
                }

                if (checkStringCount()) {
                    return formattedText;
                }
                break;
            case 2:
                formattedText += '\n';
                currentStringCount++;
                if (checkStringCount()) {
                    return formattedText;
                }

                break;
            case 3:
                if (checkStringSize()) {
                    moveIndexToEnd('.');
                }
                else if (text[i] == '.') {
                    formattedText += '\n';
                }
                if (checkStringCount()) {
                    return formattedText;
                }
                break;
        }
    }

    function checkStringSize() {
        if (currentStringSize >= maxStringSize) {
            formattedText += '\n';
            currentStringSize = 0;
            currentStringCount++;
            return true;
        }
        return false;
    }

    function checkStringCount() {
        if (currentStringCount >= maxStringCount) {
            return true;
        }
        return false;
    }

    function moveIndexToEnd(symbol) {
        for (var j = 0; j < text.length; j++) {
            if (text[i] == symbol) {
                break;
            } else {
                i++;
            }
        }
    }
    return formattedText;
}