const email= 
{
    name: "Gmail",
    mailboxes:
    {
    starred:[
        {from: "person1", subject: "subject1", body: "This is an email body1" , read: true},
        {from: "person2", subject: "subject2", body: "This is an email body2" , read: true},
        {from: "person3", subject: "subject3", body: "This is an email body3" , read: true}
        ],
    inbox:[
        {from: "person4", subject: "subject4", body: "This is an email body4" , read: true},
        {from: "person5", subject: "subject5", body: "This is an email body5" , read: true},
        {from: "person6", subject: "subject6", body: "This is an email body6" , read: true}
        ],
    trash:[
        {from: "person7", subject: "subject7",  body: "This is an email body7", read: false},
        {from: "person8", subject: "subject8",  body: "This is an email body8", read: false},
        {from: "person9", subject: "subject9",  body: "This is an email body9", read: false}
        ],
    drafts:[
        {to: "person1", subject: "subject10", body: "This is an email body10" , sent: false},
        {to: "person3", subject: "subject11", body: "This is an email body11" , sent: false},
        {to: "person5", subject: "subject12", body: "This is an email body12" , sent: false}
        ],
    outbox:[
        {to: "person6", subject: "subject13", body: "This is an email body13" , sent: true},
        {to: "person2", subject: "subject14", body: "This is an email body14" , sent: true},
        {to: "person1", subject: "subject15", body: "This is an email body15" , sent: true}
        ]
    },
    contacts:[
        {name: "person1", address: "person1@gmail.com"},
        {name: "person2", address: "person2@gmail.com"},
        {name: "person3", address: "person3@gmail.com"},
        ]   
};

console.log("mailboxes:", Object.keys(email.mailboxes));
