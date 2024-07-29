//////////////////////////////////////////////////////////// 



// importing the native and the npm packages 
import { input } from '@inquirer/prompts';
import { writeFile , createWriteStream, readFile} from 'node:fs';
import { image ,imageSync  } from 'qr-image';




// taking the url from the user as an input using inquire package 
var answer = await input({ message: 'Enter the  URL you want to convert : ' });



// saving the url we get from the user to a url.txt file 
writeFile("URL.txt", answer, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
        });



// converting the input(url) provided by the user into a qr code image  after reading the test file 

readFile("URL.txt", "utf8", (err, data) => {
  if (err) throw err;

//converting the data readed from the file ! 
  var qr_png = image(data, { type: 'png' });//converting the url and specifying the type ! 
  qr_png.pipe(createWriteStream('QR.png'));//writing the qr png into the files stream 

//optional:
//var svg_string = imageSync('QR', { type: 'png' });


});


