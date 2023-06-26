(() => {
  //No aplicando el principio de responsabildiad única
  type Gender = "M" | "F";
  class Person {
    // public name:string;
    // public gender: Gender;
    // public birthdate: Date;

    // constructor(name: string, gender:Gender, birthdate: Date){
    //     this.name = name;
    //     this.gender = gender;
    //     this.birthdate = birthdate;
    // }

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "angelopernia@gmail.com",
    "Admin",
    "Angelo",
    "M",
    new Date("1991-12-17")
  );

  console.log({ userSettings });

  //   const newUser = new User();

  //   const newPerson = new Person("Angelo", "M", new Date("1991-12-17"));
  //   console.log({ newPerson });
})();
