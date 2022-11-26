import { host } from "./index";

export const fetchCompetence = async (name) => {
    const { data } = await host.get("api/competence", { params: { name } });
    return data;
};

import { host } from "./index";

export const setKnowledgeLevel = async (level) => {
    const { data } = await host.put("api/level", level);
    return data;
};
