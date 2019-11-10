const RedisCurd = require('../dataBase/rediscurd');
class UserInteraction {
    constructor() {
        this.redisCurd = new RedisCurd();
    }
    async insertSignUpInfo(req, res) {
        let response = await this.redisCurd.insert(req.key, req.object);
        res.send(response);
    }
    async getUserInfo(req, res) {
        let response = await this.redisCurd.get(req);
        res.send(response);
    }
}
module.export = UserInteraction;