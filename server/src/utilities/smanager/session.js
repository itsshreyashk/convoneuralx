export default class Session {
    users;
    _length_key_;
    constructor() {
        this.users = {
            "test_id" : {
                "username" : "shreyash",
                "password" : "password"
            },
        };
        this._length_key_ = 20;
    }
    async addSession(username, password) {
        try {
            const rKey = (await this.makeRandomSSID());
            console.log(rKey);
            this.users[rKey] = {
                username: username,
                password: password,
            };
            return { success: true, ssid: rKey, message: "Session Added." };
        } catch (err) {
            console.log(`I've got an error ${err}`);
            return { success: false, message: err };
        }

    }
    async removeSession(ssidToRemove) {
        try {
            if (this.users.hasOwnProperty(ssidToRemove)) {
                delete this.users[ssidToRemove];
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(`Error removing session: ${err}`);
            return false;
        }
    }
    async getSessionData(ssid) {
        try {
            if (this.users.hasOwnProperty(ssid)) {
                return this.users[ssid];
            } else {
                return null; // Session data not found
            }
        } catch (err) {
            console.log(`Error retirieving session: ${err}`);
            return { status: false, msg: err }
        }
    }
    async makeRandomSSID() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^';
        let session_key_generated = '';
        for (let i = 0; i < parseInt(this._length_key_); i++) {
            session_key_generated += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return session_key_generated.toString();
    }
}