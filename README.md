# Running
# Dates are inclusive.  The example below will pull 2024-05-24 and 2024-05-25
# panelLevelData gets the hourly data and stores in JSON form to data directory
node panelLevelData <startDate> <endDate> 
Example:  node panelLevelData 2024-05-24 2024-05-25

# Running DB migration scripts
`npm run db-migrate-up`

This assumes the DB has been created using the command `CREATE DATABASE santa_workshop;`.

# Docker

Creating Docker image (one-time process):
`docker pull mysql:8.0`

Starting Docker instance:
`docker run --name adventofsql-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -v $HOME/mysql-data:/var/lib/mysql -d mysql:8.0`

Connecting to MySQL running in Docker:
`docker exec -it adventofsql-mysql bash`
`mysql -u root -p`