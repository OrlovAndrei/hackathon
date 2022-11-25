import { makeAutoObservable } from "mobx";

export default class userStore {
    constructor() {
        this._id = 0;
        this._name = "";
        this._isAuth = false;
        makeAutoObservable(this);
    }

    setId(id) {
        this._id = id;
    }

    setName(name) {
        this._id = name;
    }

    setIsAuth(bool) {
        this._id = bool;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get isAuth() {
        return this._isAuth;
    }
}
