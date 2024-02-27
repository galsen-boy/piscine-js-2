const vowels = /([aoeuiAOEUI])/g;
const vowelDots = (str) => str.replace(vowels, '$&.');