const fs = require('fs')
const csvwriter = require('csv-writer')

// let a = fs.readFileSync('./IngeniumCunductorQ.json', 'utf-8')

// let n = (JSON.parse(a));
// console.log(a);\

let n =[
    {
        "workItemID": "1500866702_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 1500866702"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000251860_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000251860"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000251634_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000251634."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000215597_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "clientId": "",
                    "MIR-REC-UPDT-IND": "N",
                    "applicationNo": "5000215597",
                    "reqType": "CLI",
                    "workflowId": "5000215597_4_0"
                },
                "basicDetails": {
                    "applicationNumber": "5000215597"
                },
                "Messages": {
                    "Message": [
                        {
                            "Severity": "4",
                            "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                        },
                        {
                            "Severity": "4",
                            "Content": "Security class does not allow updating ‘Client Blacklisted’ field"
                        },
                        {
                            "Severity": "3",
                            "Content": "The 'Client previously declined by company' indicator must be checked, if the 'Declined Date' is entered."
                        },
                        {
                            "Severity": "3",
                            "Content": "Invalid PAN verified indicator"
                        }
                    ],
                    "More": null
                },
                "createdAt": "02/03/2022 18:00:09",
                "waitingFor": "ClientCreationProcess",
                "_id": {
                    "timestamp": 1646224209,
                    "counter": 1530652,
                    "date": 1646224209000,
                    "time": 1646224209000,
                    "machineIdentifier": 10849264,
                    "processIdentifier": 17006,
                    "timeSecond": 1646224209
                }
            }
        },
        "wiPrevStep": "WaitForClientCreation",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000215485_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "clientId": "",
                    "MIR-REC-UPDT-IND": "N",
                    "applicationNo": "5000215485",
                    "reqType": "CLI",
                    "workflowId": "5000215485_4_0"
                },
                "basicDetails": {
                    "applicationNumber": "5000215485"
                },
                "Messages": {
                    "Message": [
                        {
                            "Severity": "4",
                            "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                        },
                        {
                            "Severity": "4",
                            "Content": "Security class does not allow updating ‘Client Blacklisted’ field"
                        },
                        {
                            "Severity": "3",
                            "Content": "The 'Client previously declined by company' indicator must be checked, if the 'Declined Date' is entered."
                        },
                        {
                            "Severity": "3",
                            "Content": "Invalid PAN verified indicator"
                        }
                    ],
                    "More": null
                },
                "createdAt": "02/03/2022 18:00:10",
                "waitingFor": "ClientCreationProcess",
                "_id": {
                    "timestamp": 1646224210,
                    "counter": 11178669,
                    "date": 1646224210000,
                    "time": 1646224210000,
                    "timeSecond": 1646224210,
                    "machineIdentifier": 1840975,
                    "processIdentifier": 19220
                }
            }
        },
        "wiPrevStep": "WaitForClientCreation",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101155307_4_0",
        "applicationAttributes": {
            "statusMessage": "Ingenium Client Id is empty for Application No. - 9101155307."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000211794_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000211794."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101175503_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101175503."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101165902_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101165902."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101189663_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101189663",
                    "workflowId": "9101189663_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910118966",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "3",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-01-26",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Pan card copy not attached on filenet and given pan number does not exists in NSDL record.\n",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-01-27",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            },
                            {
                                "Severity": "1",
                                "Content": "Pending future dated transactions exists on (2022-03-31)."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:13",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224214,
                    "counter": 13265765,
                    "date": 1646224214000,
                    "time": 1646224214000,
                    "processIdentifier": 29669,
                    "timeSecond": 1646224214,
                    "machineIdentifier": 4764704
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000259463_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000259463"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101161363_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101161363."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000252059_4_3",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000252059"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101161363_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101161363."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000211794_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000211794."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101138295_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101138295."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101204600_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101204600."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000259574_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000259574"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101226820_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101226820."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101199097_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101199097."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101243480_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101243480."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101249988_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101249988",
                    "workflowId": "9101249988_4_1",
                    "reqId": "483017"
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910124998",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "8",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-27",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "620",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-26",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-26",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-27",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1547",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "req doc not found",
                                    "MIR-CPREQ-STAT-CD": "RRJ",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-27",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "753",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-27",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "737",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Mail send for uploading",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-04-06",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "753",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            },
                            {
                                "Severity": "1",
                                "Content": "Pending future dated transactions exists on (2022-03-31)."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:24",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224225,
                    "counter": 14502607,
                    "time": 1646224225000,
                    "date": 1646224225000,
                    "timeSecond": 1646224225,
                    "processIdentifier": 8020,
                    "machineIdentifier": 5478989
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101253905_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101253905",
                    "workflowId": "9101253905_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910125390",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "5",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-26",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-26",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-27",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "1568",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-04-02",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "1568",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:27",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224227,
                    "counter": 1530815,
                    "date": 1646224227000,
                    "time": 1646224227000,
                    "machineIdentifier": 10849264,
                    "processIdentifier": 17006,
                    "timeSecond": 1646224227
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101274651_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101274651",
                    "workflowId": "9101274651_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910127465",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "1",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "WVD",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Completely Filled staff declaration form required. Proposal Number is missing on Form",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "680",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:29",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224229,
                    "counter": 4131774,
                    "date": 1646224229000,
                    "time": 1646224229000,
                    "machineIdentifier": 8205869,
                    "processIdentifier": 29263,
                    "timeSecond": 1646224229
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101275172_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101275172",
                    "workflowId": "9101275172_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910127517",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "2",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "staff declaration form required",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-29",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "680",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:29",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224229,
                    "counter": 200971,
                    "time": 1646224229000,
                    "date": 1646224229000,
                    "machineIdentifier": 6996605,
                    "processIdentifier": 13020,
                    "timeSecond": 1646224229
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000270868_5_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "7000270868",
                    "workflowId": "7000270868_5_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "700027086",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "8",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": "IDP REQ",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-30",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "312",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "LIVE PIC REQ",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-30",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1581",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "ADP REQ",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-30",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "782",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "AGP REQ",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-30",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "9055",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:30",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224230,
                    "counter": 5143530,
                    "time": 1646224230000,
                    "date": 1646224230000,
                    "machineIdentifier": 6568154,
                    "processIdentifier": 11502,
                    "timeSecond": 1646224230
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1901010195_4_4",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 1901010195"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101241607_4_4",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101241607",
                    "workflowId": "9101241607_4_4",
                    "reqId": "383358"
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910124160",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "7",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-10",
                                    "MIR-REQIR-CAT-ID": "DPREQ",
                                    "MIR-REQIR-ID": "5209",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-10",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-10",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "AS PER HO",
                                    "MIR-CPREQ-STAT-CD": "WVD",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-10",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "1597",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Application# mentioned on TAC mismatch with Proposal Form \n",
                                    "MIR-CPREQ-STAT-CD": "RRJ",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-11",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1542",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-03-15",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1542",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "As per RCU - Customer want to cancel the policy",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-04-03",
                                    "MIR-REQIR-CAT-ID": "DPREQ",
                                    "MIR-REQIR-ID": "124",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Mother name missing on proposal form",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-04-03",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1566",
                                    "MIR-CPREQ-SEQ-NUM": "008",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:33",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224233,
                    "counter": 8427385,
                    "time": 1646224233000,
                    "date": 1646224233000,
                    "machineIdentifier": 11785488,
                    "processIdentifier": 31201,
                    "timeSecond": 1646224233
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000270497_4_4",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000270497"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000276563_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000276563"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500042485_4_15",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7500042485"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000272753_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000272753"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101313612_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101313612"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101296772_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101296772."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101324763_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101324763."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500046230_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7500046230"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000252771_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "5000252771",
                    "workflowId": "5000252771_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "500025277",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "1",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1530",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1581",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1573",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1522",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1547",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Frequency tick overwrite in ECS",
                                    "MIR-CPREQ-STAT-CD": "RRJ",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "1597",
                                    "MIR-CPREQ-SEQ-NUM": "008",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "135",
                                    "MIR-CPREQ-SEQ-NUM": "009",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-24",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "010",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-24",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "1597",
                                    "MIR-CPREQ-SEQ-NUM": "011",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "PAN CARD COPY NOT ATTACHED ON FILENET AND GIVEN PAN NUMBER DOES NOT EXISTS IN NSDL RECORD.",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-25",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "012",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            },
                            {
                                "Severity": "1",
                                "Content": "Pending future dated transactions exists on (2022-10-06)."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:42",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224242,
                    "counter": 3685768,
                    "time": 1646224242000,
                    "date": 1646224242000,
                    "machineIdentifier": 11120995,
                    "processIdentifier": 3884,
                    "timeSecond": 1646224242
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101432030_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101432030",
                    "workflowId": "9101432030_4_1",
                    "reqId": "1265492"
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910143203",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "0",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "WVD",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-18",
                                    "MIR-REQIR-CAT-ID": "APSTU",
                                    "MIR-REQIR-ID": "2043",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-18",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-18",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-20",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "5008",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-20",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "801",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-20",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-20",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1542",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "5008",
                                    "MIR-CPREQ-SEQ-NUM": "008",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-23",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "009",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Pan card copy not attached on filenet and given pan number belongs to Gopalakrishnanratha. - Customer Name was G Radhakrishanan (G Stands for his father name Gopalakrishnan) Kindly review and do the needful\n",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2021-09-25",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "010",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            },
                            {
                                "Severity": "1",
                                "Content": "Pending future dated transactions exists on (2022-09-30)."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:00:43",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224243,
                    "counter": 14820246,
                    "time": 1646224243000,
                    "date": 1646224243000,
                    "machineIdentifier": 566036,
                    "processIdentifier": 5957,
                    "timeSecond": 1646224243
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101456878_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101456878."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101522372_4_5",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101522372."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000297935_4_5",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000297935"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101549885_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101549885."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000303494_4_9",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000303494"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000947143_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 5000947143"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101571091_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101571091."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500057533_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7500057533In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000272200_4_12",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000272200."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101598753_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101598753."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500058678_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 7500058678"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500059018_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000312035_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000312035."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101576313_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101576313"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101582263_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101578836_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101578836"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101586359_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101590580_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101590580."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101592758_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101592758"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101604628_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101604628"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101593897_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101593897"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101577835_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101577835"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101588273_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101588273"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000286373_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000285742_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 5000285742"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101597604_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101605380_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101605380"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101607301_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101607301."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101609620_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101609620"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101597332_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101597332"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101580709_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101580709"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101576087_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101576087"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1609011026_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 1609011026"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101580339_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101580339"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101609270_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101609270"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101594769_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101594769"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101580766_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101580766"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101600941_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101600941."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101602637_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101602637"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000257481_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101595527_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101595527"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000286691_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 5000286691"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101589305_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101589305"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101601846_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101601846"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101593274_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101593274"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101579415_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000287275_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 5000287275"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101577836_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful Loading attempt in Ingenium for Application No. - 9101577836."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101595389_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101595389."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101597407_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101597407"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101601843_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101601843."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101606208_4_0",
        "applicationAttributes": {
            "statusMessage": "Issue while reading the unified PFR Data for application No-->> 9101606208"
        },
        "wiPrevStep": "PFRUpdateProcessReqC",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000032014_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 8000032014."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000032318_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "8000032318",
                    "workflowId": "8000032318_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "800003231",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "8",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-10",
                                    "MIR-REQIR-CAT-ID": "DPREQ",
                                    "MIR-REQIR-ID": "5209",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1581",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1573",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1547",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "135",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:01:51",
                "waitingFor": "PFRUploadProcessReqP",
                "_id": {
                    "timestamp": 1646224311,
                    "counter": 14502654,
                    "time": 1646224311000,
                    "date": 1646224311000,
                    "timeSecond": 1646224311,
                    "processIdentifier": 8020,
                    "machineIdentifier": 5478989
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101610451_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-C",
                    "clientId": "",
                    "applicationNo": "9101610451",
                    "workflowId": "9101610451_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": null,
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "C",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": null,
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": null,
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": {
                                "MIR-REQT-FREE-TXT": null,
                                "MIR-CPREQ-STAT-CD": "RAC",
                                "MIR-CPREQ-CREAT-DT": "2022-02-26",
                                "MIR-REQIR-CAT-ID": "NUWRS",
                                "MIR-REQIR-ID": "1635",
                                "MIR-CPREQ-SEQ-NUM": "012"
                            }
                        }
                    },
                    "Messages": {
                        "Message": {
                            "Severity": "0",
                            "Content": "Fill in the Mandatory fields"
                        },
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:01:59",
                "waitingFor": "PFRUpdateProcessReqC",
                "_id": {
                    "timestamp": 1646224319,
                    "counter": 201023,
                    "time": 1646224319000,
                    "date": 1646224319000,
                    "machineIdentifier": 6996605,
                    "processIdentifier": 13020,
                    "timeSecond": 1646224319
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateC",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101611071_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101611071."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000287930_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000287930."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000313101_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000313101."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101601399_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101601399."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101610184_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101610184."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101582368_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101582368."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000031618_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 8000031618."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101615362_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101615362."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101610773_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101610773."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000288744_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000288744."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101611386_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101611386."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000288712_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000288712."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500060220_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7500060220."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101616352_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful Loading attempt in Ingenium for Application No. - 9101616352."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500060227_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7500060227."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000032818_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 8000032818."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101611301_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful Loading attempt in Ingenium for Application No. - 9101611301."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000287156_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000287156."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000288686_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000288686."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000313948_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7000313948In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1888000556_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 1888000556"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000483772_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101620652_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBAMLProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1900340100_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 1900340100"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101620663_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful Loading attempt in Ingenium for Application No. - 9101620663."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000289361_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000289361."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000311388_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000311388."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101624964_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101624964."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000289356_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000289356."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101620937_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101620937."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000289048_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000289048."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101608845_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101608845."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000314149_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "7000314149",
                    "workflowId": "7000314149_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "700031414",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "9",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-24",
                                    "MIR-REQIR-CAT-ID": "MEDQE",
                                    "MIR-REQIR-ID": "2016",
                                    "MIR-CPREQ-SEQ-NUM": "021",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1581",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1573",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "e-SCR is pending for approval",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "9926",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1547",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "FINRQ",
                                    "MIR-REQIR-ID": "CRIF1",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "135",
                                    "MIR-CPREQ-SEQ-NUM": "008",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "009",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:02:34",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224354,
                    "counter": 14820299,
                    "time": 1646224354000,
                    "date": 1646224354000,
                    "machineIdentifier": 566036,
                    "processIdentifier": 5957,
                    "timeSecond": 1646224354
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000314795_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7000314795In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101630686_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101630686."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101632356_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101632356."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101631339_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101631339."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101625334_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101625334."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101621121_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101621121"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101600810_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101600810."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101633898_4_0",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101620099_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101620099."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1501111494_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 1501111494."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101628160_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101628160."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101635747_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101635747."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101634747_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101634747."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101632732_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101632732"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1501108072_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "1501108072",
                    "workflowId": "1501108072_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "150110807",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "2",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-23",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-23",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1525",
                                    "MIR-CPREQ-SEQ-NUM": "015",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:43:54",
                "waitingFor": "NonUWPFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646226834,
                    "counter": 11183370,
                    "date": 1646226834000,
                    "time": 1646226834000,
                    "timeSecond": 1646226834,
                    "machineIdentifier": 1840975,
                    "processIdentifier": 19220
                }
            }
        },
        "wiPrevStep": "NonUWWaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101626730_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101626730."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500061766_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7500061766In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101632106_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101632106",
                    "workflowId": "9101632106_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910163210",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "6",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-18",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "782",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Image not clear\n",
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-24",
                                    "MIR-REQIR-CAT-ID": "PFREQ",
                                    "MIR-REQIR-ID": "1568",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Image not clear\n",
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-24",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1542",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:03:10",
                "waitingFor": "PFRUploadProcessReqP",
                "_id": {
                    "timestamp": 1646224390,
                    "counter": 1532577,
                    "date": 1646224390000,
                    "time": 1646224390000,
                    "machineIdentifier": 10849264,
                    "processIdentifier": 17006,
                    "timeSecond": 1646224390
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101619550_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101619550."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101590804_4_5",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101590804."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000292046_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000292046."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000291519_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000291519."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000034783_4_0",
        "applicationAttributes": {
            "statusMessage": "Unable to fetch bank-details from ingenium: 429 : [{\"fault\":{\"code\":900807,\"message\":\"Message throttled out\",\"description\":\"You have exceeded your quota\"}}]"
        },
        "wiPrevStep": "BankAccountDetails",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000316316_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7000316316In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101640310_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101640310."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000290423_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-C",
                    "clientId": "",
                    "applicationNo": "5000290423",
                    "workflowId": "5000290423_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": null,
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "C",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": null,
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": null,
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "215",
                                    "MIR-CPREQ-SEQ-NUM": "003"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "232",
                                    "MIR-CPREQ-SEQ-NUM": "004"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "171",
                                    "MIR-CPREQ-SEQ-NUM": "005"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "194",
                                    "MIR-CPREQ-SEQ-NUM": "006"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "196",
                                    "MIR-CPREQ-SEQ-NUM": "007"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-25",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "187",
                                    "MIR-CPREQ-SEQ-NUM": "008"
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": {
                            "Severity": "0",
                            "Content": "Fill in the Mandatory fields"
                        },
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:03:26",
                "waitingFor": "PFRUploadProcessReqC",
                "_id": {
                    "timestamp": 1646224406,
                    "counter": 14820320,
                    "time": 1646224406000,
                    "date": 1646224406000,
                    "machineIdentifier": 566036,
                    "processIdentifier": 5957,
                    "timeSecond": 1646224406
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadC",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101641552_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "clientId": "",
                    "MIR-REC-UPDT-IND": "N",
                    "applicationNo": "9101641552",
                    "reqType": "BEN",
                    "workflowId": "9101641552_4_0"
                },
                "basicDetails": {
                    "applicationNumber": "9101641552"
                },
                "Messages": {
                    "Message": [
                        {
                            "Severity": "4",
                            "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                        },
                        {
                            "Severity": "4",
                            "Content": "Client birthday date should not be earlier than (1902-03-02) date."
                        },
                        {
                            "Severity": "3",
                            "Content": "Invalid PAN verified indicator"
                        }
                    ],
                    "More": null
                },
                "createdAt": "02/03/2022 18:03:30",
                "waitingFor": "BeneficiaryCreationProcess",
                "_id": {
                    "timestamp": 1646224410,
                    "counter": 8427465,
                    "time": 1646224410000,
                    "date": 1646224410000,
                    "machineIdentifier": 11785488,
                    "processIdentifier": 31201,
                    "timeSecond": 1646224410
                }
            }
        },
        "wiPrevStep": "WaitForBeneficiaryCreation",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101639380_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101639380."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101640715_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101640715."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101633183_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101633183."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101629911_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101629911."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000315978_4_1",
        "applicationAttributes": {
            "statusMessage": "Internal server error - Unable to find ai.lumiq.empower.pfr.history.PFRRequest with id 2020634"
        },
        "wiPrevStep": "PFRUpdatesCheckProcess",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101607681_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101607681."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101631940_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101631940."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101621149_4_3",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101621149."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000292439_4_0",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 5000292439"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101629357_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101629357"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000316714_4_0",
        "applicationAttributes": {
            "statusMessage": "No Data Found for application no- 7000316714In Proposal Form"
        },
        "wiPrevStep": "SaveProposalForm",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101628499_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101628499."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101626191_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101626191"
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000309245_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000309245."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101632598_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101632598"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101628617_4_2",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101628617."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101633349_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101633349",
                    "workflowId": "9101633349_4_1",
                    "reqId": "2009859"
                },
                "basicDetails": {
                    "applicationNumber": ""
                },
                "Messages": "Error occured in publishing message to bulk-requiremnet kafka topic as there is kafka connectivity issue",
                "createdAt": "02/03/2022 18:17:27",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646225247,
                    "counter": 4132680,
                    "date": 1646225247000,
                    "time": 1646225247000,
                    "machineIdentifier": 8205869,
                    "processIdentifier": 29263,
                    "timeSecond": 1646225247
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000292638_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000292638."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101609135_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101609135."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101642464_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101642464"
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000289565_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000289565."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000291358_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000291358."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101577912_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101577912."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000310295_4_4",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 7000310295."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101622045_4_1",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000291411_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "5000291411",
                    "workflowId": "5000291411_4_0",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "500029141",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "1",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "5207",
                                    "MIR-CPREQ-SEQ-NUM": "007",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".Need to review by UW Team",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1535",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": ".Need to review by UW Team",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "1522",
                                    "MIR-CPREQ-SEQ-NUM": "005",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Need to review by UW Team\n",
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "AKREQ",
                                    "MIR-REQIR-ID": "1524",
                                    "MIR-CPREQ-SEQ-NUM": "006",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:04:33",
                "waitingFor": "PFRUpdateProcessReqP",
                "_id": {
                    "timestamp": 1646224473,
                    "counter": 14820345,
                    "time": 1646224473000,
                    "date": 1646224473000,
                    "machineIdentifier": 566036,
                    "processIdentifier": 5957,
                    "timeSecond": 1646224473
                }
            }
        },
        "wiPrevStep": "WaitForPFRUpdateP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000272083_4_4",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000272083."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000287073_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 5000287073."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101618565_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101618565."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101628702_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101628702."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1101623299_4_0",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 1101623299."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101618026_4_1",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101628432_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101628432."
        },
        "wiPrevStep": "UWFinalDecisionRequestSubmission",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101643560_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 9101643560."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "1501108877_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful UW decision attempt in Ingenium for Application No. - 1501108877."
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000901993_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 5000901993"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000291239_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-C",
                    "clientId": "",
                    "applicationNo": "5000291239",
                    "workflowId": "5000291239_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": null,
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "C",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": null,
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": null,
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "215",
                                    "MIR-CPREQ-SEQ-NUM": "003"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "232",
                                    "MIR-CPREQ-SEQ-NUM": "004"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "171",
                                    "MIR-CPREQ-SEQ-NUM": "005"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "194",
                                    "MIR-CPREQ-SEQ-NUM": "006"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "172",
                                    "MIR-CPREQ-SEQ-NUM": "007"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "196",
                                    "MIR-CPREQ-SEQ-NUM": "008"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "227",
                                    "MIR-CPREQ-SEQ-NUM": "009"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-22",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "192",
                                    "MIR-CPREQ-SEQ-NUM": "010"
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": {
                            "Severity": "0",
                            "Content": "Fill in the Mandatory fields"
                        },
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:04:24",
                "waitingFor": "PFRUploadProcessReqC",
                "_id": {
                    "timestamp": 1646224464,
                    "counter": 8427484,
                    "time": 1646224464000,
                    "date": 1646224464000,
                    "machineIdentifier": 11785488,
                    "processIdentifier": 31201,
                    "timeSecond": 1646224464
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadC",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000314781_4_2",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBCorrectProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000292748_4_1",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101637732_4_1",
        "applicationAttributes": {
            "statusMessage": "Main Thread Not in Final Queue, Current Step is : - NBUWProcess"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101636957_4_1",
        "applicationAttributes": {
            "statusMessage": "Open PFR(s) Found for this Application No.- 9101636957"
        },
        "wiPrevStep": "UWFinalDecisionPushToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "9101631387_4_1",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-P",
                    "clientId": "",
                    "applicationNo": "9101631387",
                    "workflowId": "9101631387_4_1",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": "F",
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "P",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": "910163138",
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": "7",
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "PROIN",
                                    "MIR-REQIR-ID": "1567",
                                    "MIR-CPREQ-SEQ-NUM": "001",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "VCP",
                                    "MIR-CPREQ-SEQ-NUM": "002",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": null,
                                    "MIR-CPREQ-STAT-CD": "RAC",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRI",
                                    "MIR-REQIR-ID": "1597",
                                    "MIR-CPREQ-SEQ-NUM": "003",
                                    "MIR-CPREQ-EFF-DT": null
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "PAN is required",
                                    "MIR-CPREQ-STAT-CD": "ORD",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-28",
                                    "MIR-REQIR-CAT-ID": "NUWRS",
                                    "MIR-REQIR-ID": "PANCD",
                                    "MIR-CPREQ-SEQ-NUM": "004",
                                    "MIR-CPREQ-EFF-DT": null
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": [
                            {
                                "Severity": "4",
                                "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                            },
                            {
                                "Severity": "4",
                                "Content": "In-force policy / in-force coverages. Unable to maintain or process."
                            }
                        ],
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:04:34",
                "waitingFor": "PFRUploadProcessReqP",
                "_id": {
                    "timestamp": 1646224474,
                    "counter": 201066,
                    "time": 1646224474000,
                    "date": 1646224474000,
                    "machineIdentifier": 6996605,
                    "processIdentifier": 13020,
                    "timeSecond": 1646224474
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadP",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000314448_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000314448"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7000309192_4_1",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7000309192"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "7500058775_4_3",
        "applicationAttributes": {
            "statusMessage": "Unsuccessful attempt for load-policy-details in ingenium for appNum: 7500058775"
        },
        "wiPrevStep": "SendCounterOfferDetailsToIngenium",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "5000287848_4_4",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "reqType": "PFR-C",
                    "clientId": "",
                    "applicationNo": "5000287848",
                    "workflowId": "5000287848_4_4",
                    "reqId": ""
                },
                "callFlowResponse": {
                    "MIR-RETRN-CD": null,
                    "MIR-CPREQ-SEQ-NUM": null,
                    "MIR-REQT-FREE-TXT": null,
                    "MIR-POL-OR-CLI-CODE": "C",
                    "MIR-REQIR-CAT-ID": null,
                    "MIR-REQIR-ID": null,
                    "MIR-POL-ID-BASE": null,
                    "MIR-CPREQ-STAT-CD": null,
                    "MIR-POL-ID-SFX": null,
                    "MIR-CLI-ID": null,
                    "MIR-CPREQ-CREAT-DT": null,
                    "MIR-CPREQ-EFF-DT": null,
                    "ReqtDetails": {
                        "TableReqtRecord": {
                            "ReqtRecord": [
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "215",
                                    "MIR-CPREQ-SEQ-NUM": "003"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "232",
                                    "MIR-CPREQ-SEQ-NUM": "004"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "171",
                                    "MIR-CPREQ-SEQ-NUM": "005"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "194",
                                    "MIR-CPREQ-SEQ-NUM": "006"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "172",
                                    "MIR-CPREQ-SEQ-NUM": "007"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "196",
                                    "MIR-CPREQ-SEQ-NUM": "008"
                                },
                                {
                                    "MIR-REQT-FREE-TXT": "Medicals raised due to wrong DE",
                                    "MIR-CPREQ-STAT-CD": "CAN",
                                    "MIR-CPREQ-CREAT-DT": "2022-02-08",
                                    "MIR-REQIR-CAT-ID": "MEDRQ",
                                    "MIR-REQIR-ID": "187",
                                    "MIR-CPREQ-SEQ-NUM": "009"
                                }
                            ]
                        }
                    },
                    "Messages": {
                        "Message": {
                            "Severity": "0",
                            "Content": "Fill in the Mandatory fields"
                        },
                        "More": null
                    }
                },
                "createdAt": "02/03/2022 18:04:36",
                "waitingFor": "PFRUploadProcessReqC",
                "_id": {
                    "timestamp": 1646224476,
                    "counter": 201068,
                    "time": 1646224476000,
                    "date": 1646224476000,
                    "machineIdentifier": 6996605,
                    "processIdentifier": 13020,
                    "timeSecond": 1646224476
                }
            }
        },
        "wiPrevStep": "WaitForPFRUploadC",
        "wiCurrStep": "IngeniumConductorQueue"
    },
    {
        "workItemID": "8000035173_4_0",
        "applicationAttributes": {
            "statusMessage": {
                "statusCode": "F",
                "appHeader": {
                    "clientId": "",
                    "MIR-REC-UPDT-IND": "N",
                    "applicationNo": "8000035173",
                    "reqType": "CLI",
                    "workflowId": "8000035173_4_0"
                },
                "basicDetails": {
                    "applicationNumber": "8000035173"
                },
                "Messages": {
                    "Message": [
                        {
                            "Severity": "4",
                            "Content": "Errors encountered. Activity not processed - view User Message List. Make corrections and re-submit."
                        },
                        {
                            "Severity": "4",
                            "Content": "8000035173 - Data for mandatory field is missing in the input file (NATIONALITY)"
                        }
                    ],
                    "More": null
                },
                "createdAt": "02/03/2022 18:05:52",
                "waitingFor": "ClientCreationProcess",
                "_id": {
                    "timestamp": 1646224552,
                    "counter": 14820368,
                    "time": 1646224552000,
                    "date": 1646224552000,
                    "machineIdentifier": 566036,
                    "processIdentifier": 5957,
                    "timeSecond": 1646224552
                }
            }
        },
        "wiPrevStep": "WaitForClientCreation",
        "wiCurrStep": "IngeniumConductorQueue"
    }
]







let k = []

n.forEach(element => {
    let b = {}
    b['workItemID'] = element.workItemID 

    
    if (
        typeof (element.applicationAttributes.statusMessage) == 'object') {
        b['statusMessage'] = JSON.stringify(element.applicationAttributes.statusMessage, 5)
    } else if (
        typeof (element.applicationAttributes.statusMessage) == 'string') {
        b['statusMessage'] = element.applicationAttributes.statusMessage
    }
    b['wiPrevStep'] = element.wiPrevStep 
    b['wiCurrStep'] = element.wiCurrStep
    // b['isParent'] = element.isParent

    k.push(b)


});


let createCsvWriter = csvwriter.createObjectCsvWriter
let date = new Date()
console.log(date);
const csvWriter = createCsvWriter({
    path: `./ingeniumConductorQueue${date}.xls`,
    header: [

        // Title of the columns (column_names)
        { id: 'workItemID', title: 'workItemID' },
        { id: 'statusMessage', title: 'applicationAttributes' },
        { id: 'wiPrevStep', title: 'wiPrevStep' },
        { id: 'wiCurrStep', title: 'wiCurrStep' },
        // { id: 'isParent', title: 'isParent' },

    ]
})

csvWriter
    .writeRecords(k)

    .then(() => console.log('Data uploaded into csv successfully'));


