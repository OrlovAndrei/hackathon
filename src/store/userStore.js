import { makeAutoObservable } from "mobx";

export default class userStore {
    constructor() {
        this._id = null;
        this._name = "";
        this._login = "";
        this._about = "";
        this._img = "";
        this._usersDirection = [];
        makeAutoObservable(this);
    }

    setId(id) {
        this._id = id;
    }

    setName(name) {
        this._name = name;
    }

    setAbout(about) {
        this._about = about;
    }

    setUsersDirection(direction) {
        this._usersDirection = direction;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get About() {
        return this._About;
    }

    get UsersDirection() {
        return this._usersDirection;
    }
}
