import { Schema,models,model } from "mongoose";

const ClientSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    contact:{type:String},
    linkedin:{type:String, unique:true},
    subject:{type:String},
    message:{type:String},
    created_At:{type:Date, default:Date.now()}
})


 const ClientModel = models.Client || model("Client",ClientSchema)
 export default ClientModel

 // Q- in the following code: const ClientModel = models.Client || model("Client",ClientSchema); kya hum yeh jo "model" function kay first parameter may "Client" as a name pass kia hai isko collection consider krsktay hain kay yeh jo "Client" hai yeh collection hai ?

// Haan, aap sahi keh rahe hain. Is code mein, model("Client", ClientSchema) function ka pehla parameter, yani "Client", MongoDB collection ka naam hota hai.

// Mongoose mein, agar aapne "Client" naam diya hai, toh Mongoose automatically is naam ka plural form (yani "clients") ko collection ka naam samjhega. Toh jab aap ClientModel ka istemal karte hain, toh yeh aapko "clients" collection ke saath interact karne ki ijazat deta hai.

// Is tarah, aap "Client" ko collection ke naam ke roop mein samajh sakte hain.

// Q- acha toh phr jo "model" function may "collection" ka parameter hai wo kya krta hai ?

// Mongoose ka model function do parameters leta hai: pehla parameter collection ka naam hota hai, aur doosra parameter schema.

// Agar aap collection ka naam explicitly dena chahte hain, toh aap model function ka pehla parameter use karte hain. Is naam se Mongoose ko pata chalta hai ke yeh kis collection ke liye schema apply karna hai.

// Agar aapne pehla parameter specify nahi kiya, toh Mongoose aapke model ka naam le kar uska plural form generate karta hai (e.g., "Client" se "clients").

// Aap agar chahen, toh explicit collection name bhi de sakte hain. For example:


// const ClientModel = model("Client", ClientSchema, "my_custom_clients");

// Is example mein, "my_custom_clients" actual collection ka naam hai, jo database mein use hoga, lekin model ka naam ab bhi "Client" hi rahega.