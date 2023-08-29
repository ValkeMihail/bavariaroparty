import { createClient } from "contentful";

export const client = createClient({
  space: process.env.SPACE as string,
  environment: process.env.ENVIRONMENT as string, 
  accessToken: process.env.ACCESS_TOKEN as string
})