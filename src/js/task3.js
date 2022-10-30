
export const funcs = {
    formatText
}

function formatText(text, maxStringSize, maxStringCount, selectedChoice) {
    let wordMass = text.replace(/\s+/g, ' ').trim().split(' ');
    let result;
    switch (selectedChoice) {
        case 0:
            result = wordMass.join(' ').slice(0, maxStringSize);
            break;
        case 1:
            wordMass.forEach((item, index, mass) => {
                mass.splice(index, 1, item.substring(0,
                    maxStringSize > item.length ?
                        item.length :
                        maxStringSize));
            });

            result = wordMass.slice(0, maxStringCount).join('\n');
            break;
        case 2:
            result = wordMass.join('').substring(0, maxStringCount).split('').join('\n');
            break;
        case 3:
            result = wordMass.join(' ').split('.').join('\n');
            break;
    }
    return result;
}