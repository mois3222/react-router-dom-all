import { APIInfo, UserInfo } from "@/models";

export const loginAdapter = <T extends APIInfo>(user: T): UserInfo => ({
  id: user.id,
  name: user.name,
  email: user.email,
});
