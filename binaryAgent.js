// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.




function binaryAgent(str) {
  // split the binary string into an array of bytes
  const binaryArr = str.split(' ');

  // convert binary to decimal and then to ASCII characters
  const translatedStr = binaryArr.map(byte => {
    // parse binary to decimal
    const decimalValue = parseInt(byte, 2)

    // convert decimal to ASCII characters
    return String.fromCharCode(decimalValue);
  })

  return translatedStr.join('')
}