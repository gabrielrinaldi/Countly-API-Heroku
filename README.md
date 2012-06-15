##What's Countly?
Countly is an innovative, real-time, open source mobile analytics application. It collects data from mobile phones, and visualizes this information to analyze mobile application usage and end-user behavior. There are two parts of Countly: the server that collects and analyzes data, and mobile SDK that sends this data (for iOS & Android).

Below you can find Countly SDK repositories;

- [Countly Frontend Server (Countly-Frontend)](https://github.com/gabrielrinaldi/Countly-Frontend-Heroku)
- [Countly Android SDK (countly-sdk-android)](https://github.com/Countly/countly-sdk-android)
- [Countly iOS SDK (countly-sdk-ios)](https://github.com/Countly/countly-sdk-ios)

##How do I install Countly API Server on Heroku?

1. Create a Heroku server (Cedar)
2. Add MongoLab plugin
3. Configure this repository to push to Heroku
4. Run `heroku config`
5. Run `heroku config:add COUNTLYDB=Your MONGOLAB_URI without the scheme`
6. Push to Heroku and you are done

##API

Quick overview of some important files and directories included in this package;

#### api/api.js

Countly write and read API. Waits for write requests from the iOS/Android SDKs and read requests from the countly js helpers. Refer to [Countly Server API Reference](https://github.com/Countly/countly-server/wiki/Countly-Server-API-Reference) for details.

##Which mobile operating systems are supported?
Countly offers integration with world's two leading smartphones, Android and iOS.

##How can I help you with your efforts?
Glad you asked. We need ideas, feedbacks and constructive comments. All your suggestions will be taken care with upmost importance.

My [Twitter](http://twitter.com/gabriel_rinaldi)

Countly is also on [Twitter](http://twitter.com/gocountly) (Original) and [Facebook](http://www.facebook.com/Countly), if you would like to keep up with their fast progress!

##Countly

[http://count.ly](http://count.ly "Countly")

##Community & support

[http://support.count.ly](http://support.count.ly "Countly Support")
