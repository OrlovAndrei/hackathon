export const tree = {
    name: "Network",
    attributes: { value: 5, weight: "100%" },
    children: [
        {
            name: "CS",
            attributes: { value: 5 },
            children: [
                {
                    name: "Voice",
                    attributes: { value: 5 },
                },
                {
                    name: "SMS",
                    attributes: { value: 4 },
                },
            ],
        },
        {
            name: "PS",
            attributes: { value: 5 },
            children: [
                {
                    name: "WEB",
                    attributes: { value: 5 },
                },
                {
                    name: "Video Streaming",
                    attributes: { value: 5 },
                },
                {
                    name: "IM",
                    attributes: { value: 5 },
                },
                {
                    name: "File Transfer",
                    attributes: { value: 5 },
                },
            ],
        },
    ],
};