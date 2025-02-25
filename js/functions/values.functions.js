//learning how to get the values

const fn = () => {
    [
        {},
        {}
    ],
    [
        {}
    ],
    [
        {}
    ],

}



const fn = () => [
    [
        {},  // First array
        {
            nested: [
                {},  // Nested array inside an object
                {}
            ]
        }
    ],
    [
        {}  // Second array
    ],
    [
        {}  // Third array
    ]
];


//========================================
let users = [
    { name: "Karan", age: 25 },
    { name: "Rohit", age: 30 }
  ];
  
  console.log(users);
  
  console.log(users[0].name);
  console.log(users[1].age);

  //=======================================
  let userGroups = {
    admins: ["Karan", "Rohit"],
    users: ["Anjali", "Priya", "Vikram"]
  };

  console.log(userGroups);
  
  console.log(userGroups.admins[0]); // "Karan"
  console.log(userGroups.users.length); // 3