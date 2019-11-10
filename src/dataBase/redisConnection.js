const redis = require('async-redis');
class RedisClient {
    static getClient() {
        var client = redis.createClient();
        //check the server is on 
        client.on('connect', function () {
            console.log("redis server is running");
        });
        client.on('error', function (error) {
            console.log("something went wrong" + error);
        });
        return client;
    }
}
module.exports = RedisClient;