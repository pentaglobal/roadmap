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
                name: "Command-line Wallet",
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
                name: "DSC Voting Center",
                isFinish: false
              }, {
                name: "Penta chain Governance",
                isFinish: false
              }, {
                name: "Consensus Incentives and Costs",
                isFinish: false
              }, {
                name: "Smart Contracts Implementation",
                isFinish: false
              }, {
                name: "Desktop Wallet Deployment",
                isFinish: false
              }
            ],
            [],
            [],
            []
          ]
        }, {
          name: "Q3",
          desc: "Blockchain Explorer",
          iconType: "star",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "Source Code Available on Github",
          iconType: "github",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "Launch of Testnet",
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
          desc: "V1.0 MARS",
          iconType: "star",
          children: [
            [
              {
                name: "Mobile wallet",
                isFinish: false
              }, {
                name: "Keystore Management",
                isFinish: false
              }, {
                name: "Lightweight Client Nodes",
                isFinish: false
              }
            ],
            [
              {
                name: "DLOS Kernel",
                isFinish: false
              }, {
                name: "Ledger Strorage Management",
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
                name: "Consensus Engine Deployment",
                isFinish: false
              }
            ],
            [
              {
                name: "Production Environment Release",
                isFinish: false
              }, {
                name: "WASM for VM Support",
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
                name: "Penta Network Manager Release",
                isFinish: false
              }
            ],
            [
              {
                name: "NoSQL data storage engine release, supporting blob datatypes（Datasets and Objects) and conditions query"
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
          desc: "V2.0 JUPITER",
          iconType: "star",
          children: [
            [],
            [
              {
                name: "Desktop version of DLOS UI",
                isFinish: false
              }, {
                name: "Multi-chain Support Release",
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
                name: "Sidechain Support Launch",
                isFinish: false
              }, {
                name: "PENTA File System Deployed",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp Operations and Maintenance Support",
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
                name: "MPT-based key-value data engine available for rapid status reporting and smart contract roll back for fork-vulnerable chains",
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
                name: "Layered Network Architecture",
                isFinish: false
              }, {
                name: "Service Registry Release",
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
                name: "DApp Integrated Development Environment Release",
                isFinish: false
              }, {
                name: "Components of Dapp transaction consensus and chain consensus released. Easy to use engine for Dapp and sidechain application use case development",
                isFinish: false
              }, {
                name: "Key-value data storage engine supporting blob datatypes（Datasets and Objects) and object metadata queries",
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
                name: "Sharding on Penta Main Chain",
                isFinish: false
              }
            ],
            [
              {
                name: "Support for Directed Acyclic Graph (DAG) Ledgers",
                isFinish: false
              }, {
                name: "Quantum-resistant Ledger (QRL) Cryptographic Algorithm Support",
                isFinish: false
              }, {
                name: "Anonymity and Privacy Protection Services Release",
                isFinish: false
              }
            ],
            [
              {
                name: "Relational Database Support Deployed",
                isFinish: false
              }, {
                name: "DApp File System Services Available",
                isFinish: false
              }, {
                name: "Javascript and Java support of DApp development languages",
                isFinish: false
              }
            ],
            [
              {
                name: "Communication-links Layer Protocols Release",
                isFinish: false
              }, {
                name: "Identity Authentication Protocols Release",
                isFinish: false
              }, {
                name: "Value Layer Protocols Release",
                isFinish: false
              }
            ]
          ]
        }
      ]
    }
  }
}
