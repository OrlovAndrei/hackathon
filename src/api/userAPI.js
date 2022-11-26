import { host } from "./index";

export const registration = async (login, password) => {
    const { data } = await host.post("api/user/registration", {
        login,
        password,
    });
    localStorage.setItem("user_id", data.id);
    return data;
};

export const login = async (login, password) => {
    const { data } = await host.post("api/user/login", {
        login,
        password,
    });
    localStorage.setItem("user_id", data.id);
    return data;
};

export const editName = async (id, name) => {
    const { data } = await host.put("api/user/name", { id, name });
    return data;
};

export const editAbout = async (id, about) => {
    const { data } = await host.put("api/user/about", { id, about });
    return data;
};

export const fetchUsersDirections = async (usersId) => {
    const { data } = await host.get("api/user/direction", {
        params: { usersId },
    });
    return data;
};

export const addUsersDirection = async (usersId, directionsId) => {
    const { data } = await host.post("api/user/direction", {
        usersId,
        directionsId,
    });
    return data;
};

export const deleteUsersDirection = async (usersId, directionsId) => {
    const { data } = await host.delete("api/user/direction", {
        usersId,
        directionsId,
    });
    return data;
};
