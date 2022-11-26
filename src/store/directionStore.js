import { makeAutoObservable } from "mobx";

export default class userStore {
    constructor() {
        this._schema = "";
        makeAutoObservable(this);
    }

    setSchema(schema) {
        this._schema = schema;
    }

    get Schema() {
        return this._schema;
    }
}
