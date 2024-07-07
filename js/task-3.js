function checkForSpam(message) {
    var lowercaseMessage = message.toLowerCase();
    var forbiddenWords = ['spam', 'sale'];
    for (var i = 0; i < forbiddenWords.length; i++) {
        if (lowercaseMessage.includes(forbiddenWords[i])) {
            return true;
        }
    }
    return false;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
