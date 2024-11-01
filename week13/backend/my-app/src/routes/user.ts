import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";


export const userRoute = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET : string
    }
}>()

userRoute.post('/signup',async(c)=>{
    console.log(c.env.DATABASE_URL)
    const prisma =  new PrismaClient({
        datasources : {
            db:{
                url: c.env.DATABASE_URL
            }
        }
    }).$extends(withAccelerate());

    const body = await c.req.json();

    try {
        const user = await prisma.user.create({
            data:{
                name: body.name,
                username: body.username,
                password: body.password
            }
        })
        const jwt = sign({id:user.id},c.env.JWT_SECRET);

        return c.json({
            jwt: jwt
        })
    } catch(e){
        console.log(e);
        c.status(411);
        return c.json({
            message: "Failed to create a user"
        })
    }
})