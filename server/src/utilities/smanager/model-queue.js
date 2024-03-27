class model_queue_manager {

    constructor() {
        this.model_queue = {
            "jarvis": {
                owner: "shreyashk",
                created: "04-12-2008"
            }
        }
    }
    async modelExists(model_id) {
        const model_fields = this.model_queue[model_id];
        if (model_fields) {
            return true;
        } else {
            return false;
        }
    }
    async getModelData(model_id) {
        const model_fields = this.model_queue[model_id];
        if (model_fields) {
            return { status: 200, data: model_fields };
        } else {
            return { status: 500, data: null };
        }
    }
    async removeModelfromQueue(model_id) {
        delete this.model_queue[model_id];
    }
}