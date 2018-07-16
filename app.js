process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old arre you ? ')
process.stdin.on('data', (number) => {
  
  if(number<100, number>-1)
  {
    console.log(2018 - number)
  }
   else {
     console.log('Vous devez avoir entre 0 et 99 ans')
   }
  process.exit()
})
