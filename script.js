// -Function Declaration- //
// In function declaration, you can declare a function with a name and parameters. They can be called using their name within the code. For example:
const HackClubInfo = "Hack Club is a coding club from Shelburne, Vermont. Learn more at hackclub.com"
function ReturnHackClubInfo() {
  console.log(HackClubInfo)
}
ReturnHackClubInfo();


// -Calling Functions- //
// You can call a function by inputting its name, followed by ();. For example:
ReturnHackClubInfo();



// -Parameters and Arguments- //
// Parameters are variables used in function creation. Arguments are values passed to a function if it's called. For example:
function returnPrizes(prizes) {
 return `Here are the Hack Club prizes: ${prizes}`
