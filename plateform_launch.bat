:: Start MongoDB
:: cd C:\Program Files\MongoDB\Server\3.6\bin
:: start cmd.exe /k "mongod.exe"

:: cd app directory, and start it
cd C:\AppMobile
start cmd.exe /k "npm install && npm install -g pm2 && pm2 restart pm2-conf.json && pm2 log"