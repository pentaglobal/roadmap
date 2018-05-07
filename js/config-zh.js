var config = {
  language: [
    {
      text: "English",
      url: "./index.html"
    }, {
      text: "简体中文",
      url: "./index_zh.html",
      selected: true
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
      top: 1600
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
                name: "命令行钱包",
                isFinish: true
              }, {
                name: "散列抽签算法",
                isFinish: true
              }, {
                name: "DSC共识算法实现",
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
                name: "投票中心",
                isFinish: false
              }, {
                name: "Penta链治理结构",
                isFinish: false
              }, {
                name: "共识奖励与费用",
                isFinish: false
              }, {
                name: "智能合约",
                isFinish: false
              }, {
                name: "PC端钱包",
                isFinish: false
              }
            ],
            [],
            [],
            []
          ]
        }, {
          name: "Q3",
          desc: "区块链浏览器",
          iconType: "star",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "Github发布开源代码",
          iconType: "github",
          children: [[], [], [], []]
        }, {
          name: "Q4",
          desc: "测试网络上线",
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
          desc: "v1.1发布",
          iconType: "star",
          children: [
            [
              {
                name: "移动钱包",
                isFinish: false
              }, {
                name: "秘钥管理",
                isFinish: false
              }, {
                name: "轻节点",
                isFinish: false
              }
            ],
            [
              {
                name: "DLOS内核",
                isFinish: false
              }, {
                name: "账本存储管理",
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
                name: "共识引擎",
                isFinish: false
              }
            ],
            [
              {
                name: "运行环境",
                isFinish: false
              }, {
                name: "VM支持WASM",
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
                name: "网络管理器",
                isFinish: false
              }
            ],
            [
              {
                name: "实现NoSQL数据存储引擎,<br>支持复杂类型(数据集、对象),<br>支持数据条件查询"
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
          desc: "v2.1发布",
          iconType: "star",
          children: [
            [],
            [
              {
                name: "DLOS UI PC版",
                isFinish: false
              }, {
                name: "多链支持",
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
                name: "侧链支持",
                isFinish: false
              }, {
                name: "Penta网络文件系统",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp 运维支持",
                isFinish: false
              }, {
                name: "DLOS UI Android版",
                isFinish: false
              }, {
                name: "DLOS UI IOS版",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp Store",
                isFinish: false
              }, {
                name: "实现基于 MPT 的 KV 数据引<br>擎 , 为易产生分叉链提供智能合<br>约 state 快速状态回滚机制",
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
                name: "分层网络结构",
                isFinish: false
              }, {
                name: "服务注册发布",
                isFinish: false
              }
            ],
            [
              {
                name: "企业版运维平台",
                isFinish: false
              }, {
                name: "企业级应用组件",
                isFinish: false
              }, {
                name: "链成员管理",
                isFinish: false
              }
            ],
            [
              {
                name: "DApp集群运行模式",
                isFinish: false
              }, {
                name: "DApp集成开发工具",
                isFinish: false
              }, {
                name: "增加一些DApp交易共识组件<br>和链共识组件，以便开发者更容<br>易的开发适合应用场景的多样化<br>DApp和链",
                isFinish: false
              }, {
                name: "支持复杂类型的KV数据存储引<br>擎支持对象属性索引和查询",
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
                name: "Penta主链实现分片",
                isFinish: false
              }
            ],
            [
              {
                name: "支持DAG格式账本",
                isFinish: false
              }, {
                name: "抗量子计算机攻击密码算法",
                isFinish: false
              }, {
                name: "匿名与隐私保护",
                isFinish: false
              }
            ],
            [
              {
                name: "实现关系数据库接口的DApp<br>数据引擎",
                isFinish: false
              }, {
                name: "实现DApp文件系统",
                isFinish: false
              }, {
                name: "DApp开发语言支持javacript,-<br>java",
                isFinish: false
              }
            ],
            [
              {
                name: "通信链路层协议",
                isFinish: false
              }, {
                name: "身份认证协议",
                isFinish: false
              }, {
                name: "价值层协议",
                isFinish: false
              }
            ]
          ]
        }
      ]
    }
  }
}
