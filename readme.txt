To run the testcase :
  1. run the dumpdp.sh file
  2. run the server/api.js ( environment variable is alredy defined)

running through postman/ browers :
  sh populatedb.sh && DEV_ENV='test' node server/api.js

running through node :
  sh dumpdb.sh && ./node_modules/mocha/bin/mocha