function sleep(milliseconds) { //Code Taken From https://www.sitepoint.com/delay-sleep-pause-wait/
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/**
 * @param {string} text
 * @param {number} milliseconds
 */

module.exports = function (text, milliseconds) {
    if (text == undefined || text == null) {
        throw new Error('You Must Fill All Parameters');
    } else {
        var texta = text.split("");
        for (let i = 0; i < texta.length; i++) {
            sleep(milliseconds);
            process.stdout.write(`${texta[i]}`)
        }
    }
}