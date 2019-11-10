const RedisClient = require('../DataBase/redisConnection');
const client = RedisClient.getClient();
class RedisCurd {
    async insert(key, object) {
        try {
            await client.set(key, object);
        }
        catch (err) {
            console.log("error during write operation" + err);
        }
    }
    async get(key) {
        try {
            return await client.get(key);
        }
        catch (err) {
            console.log("error during read operation" + err);
        }
    }
}
module.exports = RedisCurd;