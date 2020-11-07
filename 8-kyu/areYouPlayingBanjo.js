// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    const firstLetter = name.charAt(0).toLowerCase();
    return firstLetter === "r" ? `${name} plays banjo` :  `${name} does not play banjo`;
}