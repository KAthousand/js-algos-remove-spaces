//REMOVE SPACES

const removeSpaces = str => {
  return str.split(" ").join("")
}

console.log(removeSpaces("alphabet soup is green   "))

module.exports = {
  removeSpaces
}
