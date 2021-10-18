function getGreeting(name = 'you') {
  return `Hello ${name}!`
}

console.log(getGreeting())

function replaceName(text, name, newName) {
  return text.replaceAll(name, newName)
}

console.log(replaceName('Hello Jane. Goodbye Jane', 'Jane', 'John'))
