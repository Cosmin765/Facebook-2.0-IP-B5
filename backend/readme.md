# The source code for the backend

_**NOTE**_: Make sure to populate the database with dummy data by running **[IP]Final version script.sql** from _database/scripts_.

i. For development:
1. Start the database, by running _database/start.bat_.
2. Modify the application.properties file, from all the modules (Facebook and Ads), so that _spring.datasource.url_ points to **localhost**, instead of **database**.
3. Run the project from inside Intellij.
4. Stop the database, by running _database/stop.bat.

ii. For building - run _build.bat_

_**NOTE**_: first build will be slower as docker needs to setup the build environment and download all the dependencies.

iii. For production:
- deploying to production: run _start.bat_.
- stopping production: run _stop.bat_.
