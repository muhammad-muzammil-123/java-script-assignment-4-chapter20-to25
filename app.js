// #*#*#*#*#*#*#*#*#*#* CHAPTER (17) TO (20) #*#*#*#*#*#*#*#*#*#*#*#*#*#*#

// ######################## QUESTION NO: 1 ##############
//   var arr = [[], [[]],[]];
//   console.log(arr[1])

// #################QUESSTION NO:2 ####################
// var arr = [[0,1,2,3],[1,0,1,2],[1,2,1,3]]
// console.log(arr[1][2])

// ###################### QUESTION NO :3 #################
// NUMERIC VALUE FROM ARRAY
// var numericValue = [1,2,3,4,5,6,7,8,9,10];
// console.log(numericValue)
// NUMERIC VALUE FROM LOOPS
  
// for(var i = 1; i <=  10; i ++){
//     console.log(i)
// }
 
// ################## QUESTION NO: 4 ####################
//  var tableName = prompt("enter a number for table");
//  var tableLength = prompt("enter a length for table");
//  for(var i = 1; i <= tableLength; i ++){
//   document.write(tableName + " X" +  i + "  = " + i*tableName + "<br>");
//  }


// #################### QUESTION NO: 5 #######################
// var userInput = prompt("Enter a fruit name")
//  var fruitsName = ["apple","mango","Orange","Banana"];
//  var flags = false;
//  for(var i = 0; i < fruitsName.length; i++){
//     if(userInput === fruitsName[0]){
      
//            flags = true
  
//  }
// } 
// if(flags){
//     console.log("this index is ",fruitsName[i]);
// }
// if(flags){
//     console.log("this index is ", fruitsName[i]);
// }if(userInput === fruitsName[2]){
//     console.log("this index is two");
// }if(userInput === fruitsName[3]){
//     console.log("this index is three");
    
// }
  
// ###################### QUESTION NO : 6 ####################
    //          (a)
// for(var i = 1; i <= 15; i++){
//     console.log(i);
// }
            //  (b)
// for(var i = 10; i >= 1; i--){
//     console.log(i)
// }               
            //  (c)
// for(var i = 0; i <= 10; i++){
//     console.log(i*2)
// }
             // (d)
// for(var i = 1; i <= 10; i++){
//     console.log((i*2)-1)
// }
            //  (e)
// for(var i = 1; i <= 10; i++ ){
//     console.log(i*2000)
// }

// ####################### QUESTION NO:7 #################
// var userInput = prompt("welcome to this backery.. What do you want sir/madam");
// var arr = ["cake","applepie","cookie","chips","patties"];
// var flags = false
// for(var i = 0; i < arr.length; i++){
//     if(userInput ===arr[i]){
//        flags = true
//     }
// }if(flags){
//      console.log(userInput + " is available at index " + arr.indexOf(userInput))
// }else{
//         console.log(userInput + " is not available")
//     }

// ########################## QUESTION NO: 8 ####################
// for(var i = 1; i <= 20; i ++){
// console.log(i*5)
// }


// #*#**#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#* CHAPTER (21) TO (25) #*#*#*#*#*#*#*#*#*#*#*#*#*
// ########################### QUESTION NO: 1 ########################
//  var firstName = prompt("Enter your firstname");
//  var lastName = prompt("Enter your last name");
//  var fullName = firstName + " " + lastName;
//  console.log(fullName);

// ########################## QUESTION NO: 2 ########################

// var userInput = prompt("enter modal your phone");
// console.log("the modal is : ",userInput);
// console.log("the length is : ", userInput.length);

// ######################### QUESTION NO: 3 ###################
// var country = "pakistani";
// var index = country.indexOf("n");
// console.log(country);
// console.log( " the index is " + index);

// ######################## QUESTION NO: 4 #################
// var xyz = "hello world";
// var lastIndex = xyz.lastIndexOf("l");
// console.log(xyz);
// console.log(lastIndex);

// ####################### QUESTION NO: 5 #####################

// var country = "pakistani";
// var character = country.charAt(3);
// console.log(country);
// console.log(character);

// ################### QUESTION NO:6 ########################
// var firstName = ["muhammad"];
// var lastName = ["muzammil"];
// var fullName = firstName.concat(lastName);
// console.log(fullName);

// ######################  QUESTION NO: 7 ######################
// var city = "hyderabad";
// console.log(city)
// console.log(city.replace("hyder","islam"));

// ###################QUESTIION NO: 8####################
// var friends = "ali and sani are friends they play cricket and football"
// console.log(friends);
// console.log(friends.replace(/and/g , "&"));

// ###################### QUESTION NO: 9 #####################
// var stringToNumber = "786";
// console.log(  stringToNumber);
// console.log( typeof( stringToNumber));
// var convert = Number(stringToNumber);
// console.log(convert);
// console.log(typeof(convert));

// ####################### QUESTION NO: 10 ##################
// var userInput = prompt("enter your favourite dish");
// var saveInput = userInput.toUpperCase();
// console.log(saveInput);

// ##################### QUESTION NO: 11 ######################
// var userInput = prompt("enter your favourite dish");
// var saveInput = userInput.slice(0,1).toUpperCase(); + userInput.slice(0, 8) 
//  console.log(saveInput);

// ######################## QUESTION NO: 12 ###################

// var num = 35.36 ;
// console.log(num)
// console.log(typeof (num))
// num = 3536
// console.log(num.toString())
// console.log(typeof(num))

// ################### QUESTION  NO: 13 #################
// var userInput = prompt("Enter your fullname");
// var specialSymbol = ["!","@","#","%","&","*","^"];
// var flags = true;
// for(var i = 0; i < specialSymbol.length; i++){
//     if(userInput.includes(specialSymbol[i])){
//                flags = false;
//                break;   
//     }
// }if(flags){
//     console.log("this is valid name");
// }else{
//     alert("this is not valid name");
// }

// ##################### QUESTION NO:14 #########################
// var foods = ["cookies","patties","chips","cake","apple pie"];
// var userFood = prompt("Enter a favourite food");
// var flags = false
// for(var i = 0; i < foods.length; i++){
//   if(userFood.toLowerCase() === foods[i]){
//     flags  = true;
//   }  
// }if(flags){
//     console.log(userFood.toLowerCase() +" is available at index is " +foods.indexOf(userFood));
// }else{
//     alert("this food is not available in this bakery");
// }

// ########################### QUESTION NO: 15 #######################
// var password = prompt("Enter a password");
// if(password.toLowerCase().length > 6 ){
//     console.log("congratulations")
// }else{
//     console.log("please enter a valid password");
// }
















































































