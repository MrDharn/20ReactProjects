
  
export const navData = [
  {
    label: "name",
    to: "/",
  },
  {
    label: "profile",
    to: "details",
    Children: [
      {
        label: "Location",
        to: "location",
      },
    ],
  },
  {
    label: "settings",
    to: "settings",
    Children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        Children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];
