
export const funcs = {
    formatText
}

let splitOptions = {
    withoutSplit: 0,
    splitBySymbol: 1,
    splitByWord: 2,
    splitBySentence: 3,
}

function formatText(text, maxStringSize, maxStringCount, selectedChoice) {
    let words = text.replace(/\s+/g, ' ').trim().split(' ');
    let result;
    switch (selectedChoice) {
        case splitOptions.withoutSplit:
            result = words.join(' ').slice(0, maxStringSize);
            break;
        case splitOptions.splitBySymbol:
            words.forEach((item, index, mass) => {
                mass.splice(index, 1, item.substring(0,
                    maxStringSize > item.length ?
                        item.length :
                        maxStringSize));
            });
            result = words.slice(0, maxStringCount).join('\n');
            break;
        case splitOptions.splitByWord:
            result = words.join('').substring(0, maxStringCount).split('').join('\n');
            break;
        case splitOptions.splitBySentence:
            result = words.join(' ').split('.').join('\n');
            break;
    }
    return result;
}