##What's Countly?

Countly is an innovative, real-time, open source mobile analytics application. It collects data from mobile phones, and visualizes this information to analyze mobile application usage and end-user behavior. There are two parts of Countly: the server that collects and analyzes data, and mobile SDK that sends this data.

Below you can find Countly SDK repositories;

- [Frontend Server (Countly-Frontend)](https://github.com/gabrielrinaldi/Countly-Frontend-Heroku) **Required**
- [Android SDK (countly-sdk-android)](https://github.com/Countly/countly-sdk-android)
- [iOS SDK (countly-sdk-ios)](https://github.com/Countly/countly-sdk-ios)
- [ActionScript 3 SDK (countly-sdk-as3)](https://github.com/Countly/countly-sdk-as3)
- [Windows Phone SDK (countly-sdk-windows-phone)](https://github.com/Countly/countly-sdk-windows-phone)
- [Blackberry WebWorks SDK (countly-sdk-blackberry-webworks)](https://github.com/Countly/countly-sdk-blackberry-webworks)
- [Icenium and Phonegap SDK (countly-sdk-js)](https://github.com/Countly/countly-sdk-js)
- [Unity SDK (countly-sdk-unity)](https://github.com/Countly/countly-sdk-unity)

##How do I install Countly API Server on Heroku?

1. Create a Heroku server (Cedar)
2. Add MongoLab plugin
3. Configure this repository to push to Heroku
4. Run `heroku config`
5. Run `heroku config:set VARIABLE=value` and add all variables from config.js except the port one
6. Push to Heroku and you are done

## How do I upgrade Countly API Server on Heroku?

1. Update the respository in your machine
2. Add the missing configuration variables (check above)
3. Run `db.sessions_.remove();` on MonboDB console
4. Push the app to Heroku

##API

Countly write and read API. Waits for write requests from the iOS/Android SDKs and read requests from the countly js helpers. Refer to [Countly Server API Reference](https://github.com/Countly/countly-server/wiki/Countly-Server-API-Reference) for details.

##How can I help you with your efforts?

Glad you asked. We need ideas, feedbacks and constructive comments. All your suggestions will be taken care with upmost importance.

My [Twitter](http://twitter.com/gabriel_rinaldi)

Countly is also on [Twitter](http://twitter.com/gocountly) (Original) and [Facebook](http://www.facebook.com/Countly), if you would like to keep up with their fast progress!

##Countly

[http://count.ly](http://count.ly "Countly")

##Community & support

[http://support.count.ly](http://support.count.ly "Countly Support")
