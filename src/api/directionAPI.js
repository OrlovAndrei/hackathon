import { host } from "./index";

export const fetchDirections = async () => {
    const { data } = await host.get("api/direction");
    return data;
};

export const fetchDirectionById = async (id) => {
    const { data } = await host.get("api/direction/" + id);
    return data;
};
