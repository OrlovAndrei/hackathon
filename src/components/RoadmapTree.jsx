import React from "react";
import Tree from "react-d3-tree";

const debugData = [
    {
        name: "Accounts",
        children: [
            {
                name: "Dev - SOC Log Aggregator zzc",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "IL-NX-Default-Dev zzf",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "The Knights of Ni zzd",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "Dev - Cloud Testing zzj",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "Dev - Turbot zza",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "Dev - Cloud Management zzb",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                    {
                        name: "RestrictAMItoVPC_1",
                    },
                ],
            },
            {
                name: "Prod - AWS Organizations (Secondary) zze",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "Dev - testing app zzh",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "Dev - Cloud Security Monitoring zzk",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
            {
                name: "EC-Default Dev Collab zzg",
                children: [
                    {
                        name: "FullAWSAccess",
                    },
                ],
            },
        ],
    },
];

const containerStyles = {
    width: "100%",
    height: "100vh",
};

export default class RoadmapTree extends React.PureComponent {
    state = {};

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2,
            },
        });
    }

    render() {
        return (
            <div
                style={containerStyles}
                ref={(tc) => (this.treeContainer = tc)}
            >
                <Tree
                    data={debugData}
                    translate={this.state.translate}
                    orientation={"horizontal"}
                />
            </div>
        );
    }
}
