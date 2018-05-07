var config = {
  language: [
    {
      text: "English",
      url: "./index.html",
      selected: true
    }, {
      text: "简体中文",
      url: "./index_zh.html"
    }
  ],
  //计划百分比
  planPercent: {
    chain: "10%",
    dlos: "--%",
    dapps: "--%",
    connecttors: "--%"
  },
  // 年轴配置
  yearAxis: [
    {
      year: 2018,
      top: 92
    }, {
      year: 2019,
      top: 612
    }, {
      year: 2020,
      top: 1640
    }
  ],
  //阶段数据
  planRoad: {
    plan1: {
      children: [
        {
          name: "Q2",
          desc: "",
          iconType: "round",
          children: [
            [
              {
                name: "Command line wallet",
                isFinish: true
              }, {
                name: "Random Sortilege Algorithm (RSA)",
                isFinish: true
              }, {
                name: "Dynamic Stake Consensus (DSC)",
                isFinish: false
              }
            ],
            [],
            [],
            []
          ]
        }, {
          name: "Q3",
          desc: "",
          iconType: "round",
          children: [
            [
              {
                name: "Voting center",
                isFinish: false
              }, {
                name: "Goverance of Penta chain",
                isFinish: false
              }, {
                name: "Consensus incentive and expense",
                isFinish: false
              }, {
                name: "Smart contract",
                isFinish: false
              }, {
                name: "PC wallet",
                isFinish: false
              }
            ],
            [],
            [],
            []
          ]
        }, {
          name: "Q3",
          desc: "Blockchain expolorer",
          iconType: "star",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "Open source code available on Github",
          iconType: "github",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "Testnet launch",
          iconType: "star",
          children: [[], [], [], []]
        }
      ]
    },
    plan2: {
      percent: 10,
      children: [
        {
          name: "Q2",
          desc: "V1.0MARS",
          iconType: "star",
          children: [
            [
              {
                name: "Mobile wallet",
                isFinish: false
              }, {
                name: "Key management",
                isFinish: false
              }, {
                name: "Light node",
                isFinish: false
              }
            ],
            [
              {
                name: "Kernel of DLOS",
                isFinish: false
              }, {
                name: "Ledger strorage management",
                isFinish: false
              }
            ],
            [],
            []
          ]
        }, {
          name: "Q3",
          desc: "",
          iconType: "round",
          children: [
            [],
            [
              {
                name: "Consensus engine",
                isFinish: false
              }
            ],
            [
              {
                name: "Running environment",
                isFinish: false
              }, {
                name: "WASM for VM support",
                isFinish: false
              }
            ],
            []
          ]
        }, {
          name: "Q4",
          desc: "",
          iconType: "round",
          children: [
            [],
            [
              {
                name: "Network manager",
                isFinish: false
              }
            ],
            [
              {
                name: "NoSQL data storage Engine availableSupport of complex datatype（Datasets and Objects)and conditions query"
              }
            ],
            []
          ]
        }
      ]
    },
    plan3: {
      children: [
        {
          name: "",
          desc: "V2.0 JUPiTER",
          iconType: "star",
          children: [
            [],
            [
              {
                name: "PC version of DLOS UI",
                isFinish: false
              }, {
                name: "multi-chain support",
                isFinish: false
              }
            ],
            [],
            []
          ]
        }, {
          name: "",
          desc: "",
          iconType: "round",
          children: [
            [
              {
                name: "sidechain support",
                isFinish: false
              }, {
                name: "PENTA file system",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp operation and maintenance ",
                isFinish: false
              }, {
                name: "DApp UI Android",
                isFinish: false
              }, {
                name: "DApp UI IOS",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp Store",
                isFinish: false
              }, {
                name: "MPT-based KV data storage engine available to provide quick status roll back of smart contracts for fork-venerable chains",
                isFinish: false
              }
            ],
            []
          ]
        }
      ]
    },
    plan4: {
      children: [
        {
          name: "",
          desc: "",
          iconType: "round",
          children: [
            [
              {
                name: "Layered network architecture",
                isFinish: false
              }, {
                name: "Release of service registry",
                isFinish: false
              }
            ],
            [
              {
                name: "Enterprise operation & maintenacne platform",
                isFinish: false
              }, {
                name: "Enterprise Application",
                isFinish: false
              }, {
                name: "Chain member management",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp cluster operation mode",
                isFinish: false
              }, {
                name: "DApp integrated development environment",
                isFinish: false
              }, {
                name: "Components of Dapp transcation consensus and chain consensus added. Easy for devs to work on varied Dapps and chains for application scenarios",
                isFinish: false
              }, {
                name: "KV data storage engine to support complex data types and available for index and query of object attributes",
                isFinish: false
              }
            ],
            []
          ]
        }
      ]
    },
    plan5: {
      children: [
        {
          name: "",
          desc: "",
          iconType: "round",
          children: [
            [
              {
                name: "Sharding on Penta main chain",
                isFinish: false
              }
            ],
            [
              {
                name: "Support of DAG ledgers",
                isFinish: false
              }, {
                name: "Quantum-resistant cryptographic algorithm",
                isFinish: false
              }, {
                name: "Anonymity and privacy protection",
                isFinish: false
              }
            ],
            [
              {
                name: "Interfaces to ralational database available",
                isFinish: false
              }, {
                name: "Dapp file system available",
                isFinish: false
              }, {
                name: "Javascript and Java support of DApp development languages",
                isFinish: false
              }
            ],
            [
              {
                name: "Communication link layer protocols",
                isFinish: false
              }, {
                name: "Identity authentication protocols",
                isFinish: false
              }, {
                name: "Value layer protocols",
                isFinish: false
              }
            ]
          ]
        }
      ]
    }
  }
}
