export default class Session {
    users;
    _length_key_;
    constructor() {
        this.users = [];
        this._length_key_ = 20;
    }
    async addSession(username, password) {
        try {
            const rKey = (await this.makeRandomSSID());
            console.log(rKey);
            this.users.push({
                ssid: rKey,
                username: username,
                password: password,
            });
            return { success: true, ssid: rKey, message : "Session Added." };
        } catch (err) {
            console.log(`I've got an error ${err}`);
            return { success: false, message: err };
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
    // lol plss dont get deleted
    async makeRandomSSID() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^';
        let session_key_generated = '';
        for (let i = 0; i < parseInt(this._length_key_); i++) {
            session_key_generated += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return session_key_generated.toString();
    }
}