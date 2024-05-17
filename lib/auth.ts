import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

import { db as prisma} from "@/lib/prisma"

import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
    // @see https://github.com/prisma/prisma/issues/16117
    // @ts-ignore
    adapter: PrismaAdapter(prisma as any),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENTID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text", placeholder: "" },
                cnpj: { label: "cnpj", type: "text", placeholder: "" },
            },
            async authorize(credentials, req): Promise<any> {
                console.log("Authorize method", credentials);
        
                if ((!credentials?.email && !credentials?.cnpj) || !credentials?.password) {
                  throw new Error("Dados de Login necessários");
                }
        
                let user;
        
                if (credentials.cnpj) {
                  user = await prisma.user.findUnique({
                    where: {
                      cnpj: credentials.cnpj,
                    },
                  });
        
                  if (!user) {
                    throw new Error("CNPJ não encontrado");
                  }
                } else if (credentials.email) {
                  user = await prisma.user.findUnique({
                    where: {
                      email: credentials.email,
                    },
                  });
        
                  if (!user) {
                    throw new Error("Email não encontrado");
                  }
                }
        
                if (!user || !user.hashedPassword) {
                  throw new Error("Usuário não registrado através de credenciais");
                }
        
                const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
                if (!matchPassword) {
                  throw new Error("Senha incorreta");
                }
        
                return user;
              },
            }),
          ],
          session: {
            strategy: "jwt",
          },
          secret: process.env.SECRET,
          debug: process.env.NODE_ENV === "development",
          pages: {
            signIn: "/pages/login",
          },
        };