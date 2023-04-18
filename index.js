class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    let pattern = /[^a-zA-Z0-9-' ]+/g;
    return str.replace(pattern, '');
  }

  static titleize(str) {
    let excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = str.split(' ');

    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    for (let i = 1; i < words.length; i++) {
      if (!excludeWords.includes(words[i])) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }

    return words.join(' ');
  }
}