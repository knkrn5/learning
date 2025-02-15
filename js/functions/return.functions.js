// return in arrow functions
const obj = () => ({
    key: "data"
  });
  
  const arr = () => {
    return [
      "user", "data"
    ];
  }
  
  const arr2 = (vars) => ([
    "user", "data"
  ]);
  
  
  const arr3 = () => ["user", "data"];
  
  const obj2 = () => {
    key: "data"
  };
  
  
  const str = () => {
    return "data"
  };

  
  const obj3 = () => {
    return {
      key: "data"
    }
  };

  
  const obj3 = () => {
    return {
      user: {
        key: "data",
        username: "karan",
        age: 22
      }
    }
  };
  
  const arr4 = () => {
    return ["a", "b"]
  };

  
// return in normal functions

  function obj4() {
    return {
      key: "data"
    }
  }
  
  function obj5() {
    return [
      "user", "data"
    ];
  }
  
  function arr5() {
    return [
      "user", "data"
    ];
  }
  
  
  function({ name: karan }) {
    console.log("test")
  }
  
  
  