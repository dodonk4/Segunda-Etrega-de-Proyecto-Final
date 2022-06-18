import fs from 'fs'
export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'srv+mongodb://xxxxxxxxxxxxxxxxxxx',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        type: "service_account",
        project_id: "segunda-entrega-de-proyecto",
        private_key_id: "faa3e82bba27e1c72c1762557a205b5be8917c4f",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXJMtcoLJucZUV\ne1KXW58/+D9Xvfle6m/fYbh3d0B+Lfss51vtg8Cpo2L23fEsbqD4h7p+Cq/p6gy/\nPPY8EyA71Rpw+hOO1yoAVDKQv97b4K+RKFrFqCqltrQUunHej6F3eU0gEHuEHQjV\nrvc9DgdMUkkaoFJpNM8tNxUhZeNMmfTryHqzAP93LArwYrNJab+B/dQKvDnNHSIT\nX6StQ92KW2QQHqXeDQewlEdFa0MsYLHST0u6ibB+t8qXtOzvbZgU66nPRsmn5J1n\noNQ0SSeoYeQ9M0RlqqAc39WdGrZL0WFPnNt4aM153vVEOpk+7s7n8smTBs4hgDx/\n8gE6oPAvAgMBAAECggEAQUZcnSH0gSXdAcOE739Q9euv7EMrYeznPHM9sKFx49a3\nmownjAypa86yvAvinISEOmOT5aIAdYwZifxJCTkUUpL5jsWRIYmOqMLjBJ/yUev9\n2KDRyZ6YMecZBCD9Y3VYnBMln1Dg6NiWUZ7gTJnxBOsCWx3BY0IuiZ1ov9VV/Ws6\nKRvPgwNZv08Ii04Rocywjd/FAEkHz+ZxoDeq8seFQsJWxdJG1x9/VmW5B0BRvJeU\n4dj0GPFiIJoR4h5xapWfu8lVTPgLL/++7rxYUjV/0cUk+dwFNy9NCX415By3w2Dp\nWq3CVbn8qiZvma0y4QpfNMV+kFNMAqm0AtRSIfwT4QKBgQD0dlPIz3IsFOkrZ9W4\nVKt6eAnp+63r73heiZUm9D2Bmr7qrFk3XcycKdE837ejZlFMlpH/ICRAlpoYXs+w\nZ7q2mWOCvmB+eWtSiR+spqK2d1EgPKTSXLqZRl9odxzhr8bDVAySdVP1hAiXN2L/\nyika7Zr41KBhsAx3j9JTDqJFswKBgQDhTDtEDq1Nm4SJMQVSF/A+nrp0y6tfuU7Y\nJ6tYWs1MTXJueE5BUZBQdxe2PGHiCm71Qb282Ik9nlDamERPG52Hzh88W1lxV23S\nbuqIcOP0/HkRDppNU5qjlvZDZ5E4q5XcMsgYw66w3vvIzjWg/2QBwIBAHKuU/7iW\nr2/nJrallQKBgBrWns4uEC/Mv+iXBrys9wKECTqZ+fcsHD/sxOY47EO9VHZ5I3ZT\novIGGUWgng2fXw+UfETRJ4m7vwEr74tDaBlB783bzsYz2FeAXGzdAoIbyVlLryC1\nM3s+YZ0bbp1Mafrp0FOH9AbBTxwi5YiFjku5iEkHNvBinovFy2Z49dHHAoGBAIzO\nNvAW+Crbul5/u6KOAYExdLjQHYAK8YLYcBcdUNeSQ6VVHRtnnXkcpT4oyMgb2zL+\n7lVbQ5K2IjQsG+0RBkg9A3qWYPUcPi/ZUE0LuPyA2i1V4gvX53q8O5bu4Gz5mARx\n3GrVyZUTF2ttrUi8tMT/iWgIQxgxJi1O4fImWNptAoGBANUHDRPZVS7Oa77QNNkH\nvtdcMdH9330MMlbnLMp/4xKMXr0fpt45IPvMOIr2KcJw/Mh92ZqRMQ0dJCujRu6R\nWEkOsqtVf/tEQCj1Z76P/lkfpCX7A1c44Ax47SYU7QMfY/zT97gdVmU0VYPK4SlT\nfelET1GhcfLAaRuFDJSIfgTm\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-jle6q@segunda-entrega-de-proyecto.iam.gserviceaccount.com",
        client_id: "117473190038915849261",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jle6q%40segunda-entrega-de-proyecto.iam.gserviceaccount.com"
    },
    MODO_PERSISTENCIA: 'firebase'
}