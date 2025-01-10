export type UserRole = "candidate" | "company" | "admin";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

// Demo users data
export const users: User[] = [
  {
    id: 1,
    name: "Ali Hassan",
    email: "ali@gmail.com",
    password: "1234",
    role: "candidate",
  },
  {
    id: 2,
    name: "Tech Corp",
    email: "c@gmail.com",
    password: "1234",
    role: "company",
  },
  {
    id: 3,
    name: "Admin User",
    email: "admin@gmail.com",
    password: "1234",
    role: "admin",
  },
];

// Helper functions
export const addUser = (user: Omit<User, "id">) => {
  const newUser = {
    ...user,
    id: users.length + 1,
  };
  users.push(newUser);
  return newUser;
};

export const findUser = (email: string, password: string) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
