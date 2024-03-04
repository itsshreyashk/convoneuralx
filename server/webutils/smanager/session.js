export default class Session {   
    users;
    _length_key_;
    constructor() {
        this.users = [];
        this._length_key_ = 20;
    }
    async addSession(username, password) {
        try {
            const rKey = await this.makeRandomSSID();
            this.users.push({
                ssid: rKey,
                username: username,
                password: password,
            });
            return { success: true, ssid: rKey };
        } catch (err) {
            console.log(`I've got an error ${err}`);
            return null;
        }

    }
    async removeSession(ssidToRemove) {
        try {
            const indexToRemove = this.users.findIndex(user => user.ssid === ssidToRemove);
            if (indexToRemove !== -1) {
                this.users.splice(indexToRemove, 1);
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(`Error removing session: ${err}`);
            return false;
        }
    }

    async makeRandomSSID() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^';
        let shiftKey = '';
        for (let i = 0; i < this._length_key_; i++) {
            shiftKey += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return shiftKey;
    }
}