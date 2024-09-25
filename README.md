# new-sharoon-portfolio

Now remember if you counter the following error while creating in mongoDB :
``` the error is: MongoServerError: E11000 duplicate key error collection: Cluster0.clients index: contact_1 dup key: { contact: null }
    at InsertOneOperation.execute (G:\new-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\operations\insert.js:51:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async executeOperation (G:\new-portfolio2\node_modules\mongoose\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)     
(node:internal/process/task_queues:95:5) tfolio2\node_modules\mongoo
    at async executeOperation (G:\new-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\    at async executeOperation (G:\new-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\operations\execute_operation.js:136:16)
    at async Collection.insertOn    at async executeOperation (G:\new-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\operations\execute_operation.js:136:16)
    at async Collection.insertOne (G:\new-portfolio2\node_modules\mongoose\node_modulesnew-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\operations\execute_operation.js:136:16) 
    at async Collection.insertOne (G:\new-portfolio2\node_modules\mongoose\node_modules\mongodb\lib\collection.js:154:16) {
  errorResponse: {
oose\node_modules\mongodb\lib\operations\execute_operation.js:136:16)
    at async Collection.insertOne (G:\new-portfolio2\node_modules\mongoose\node_modumodules\mongoose\node_modules\mongodb\lib\collection.js:154:16) {
s\mongodb\lib\collection.js:154:16) {
s\mongodb\lib\collection.js:154:16) {
  errorResponse: {
s\mongodb\lib\collection.js:154:16) {
  errorResponse: {       cate key error 
s\mongodb\lib\collection.js:154:16) {
  errorResponse: {      icate key error 
    index: 0,
s\mongodb\lib\collection.js:154:16) {
  errorResponse: {     licate key error 
    index: 0,
on.js:154:16) {        _1 dup key: { con
    code: 11000,
    errmsg: 'E11000 duplicate key error collection: Cluster0.clients index: contact_1 dup key: { contact: null }',
    keyPattern: { contact: 1 },
    keyValue: { contact: null }
  },
  index: 0,
  code: 11000,
  keyPattern: { contact: 1 },
  keyValue: { contact: null },
  [Symbol(errorLabels)]: Set(0) {}
} ``` 
 
So it simply saying that there is an duplicate key on the field with 'unique' constraint, like here it is 'Contact' because i set it to as 'Unique' but when unfortunately i am not inputting or inputting the same contact which is already any document have in collection So it will raise an error , So its simple way to remove 'unique' constraint from that field and then write this in mongo-compass shell:
``` syntax:
db.collectionName.dropIndex('indexName')

In our case:
db.clients.dropIndex('contact_1')

//you can find the indexName in error message.```