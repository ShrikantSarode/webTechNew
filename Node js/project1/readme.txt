 npm init -y - it is used to create packages.json file

 express js- add dependencies in packages.json

 npm install express

 cd C:\Program Files\MongoDB\Server\4.2\bin

mongod
mongo

use userdetails

show dbs
db

db.createCollection("users");  -->create collection
show collections

insert();
insertOne();
insertMany();

db.users.insert([{ "name" : "Shrikant","age":22,"place":"Nashik"},{"name" :"Raju","age":22,"place":"Nashik"},
{"name" :"Kaju","age":20,"place":"Pune"}]);


db.users.find().pretty()
db.users.find({"place":"Pune"})

 db.users.remove({"place":"Pune"})

 db.users.update({"place":"Nashik"},{$set:{"name":"ShriMan","age":50}})

 db.users.update({"name":"Raju"},{$set:{"name":"Kaju","place":"Dhule"}})

 mongoose is a middleware and it is a driver for tranferring data .

 npm i mongoose