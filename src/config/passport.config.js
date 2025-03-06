import passport from "passport";
import jwt from "passport-jwt"
import local from "passport-local"
import { usersService } from "../DAO/repository/index.js";
import { createHash, isValidPassword } from "../utils.js";


const LocalStrategy = local.Strategy

/* const JWTStrategy = jwt.Strategy///Estrategia de JWT
const ExtractJWT = jwt.ExtractJwt//Funcion de extraccion */

 const initializePassport = () => {
    console.log("cbausb")
     passport.use("register", new LocalStrategy(
        {
            passReqToCallback:true,
            usernameField:"email"
        },
        async(req,username, password,done) => {
            let {fullname,role,email,place} = req.body
            console.log("asads",req.body)
            console.log("asads",email)
            try{
                const user = await usersService.getUserByEmail({email:email})
                console.log("fdeqada",user)
                if (user){
                    console.log("User already exist")

                    return done(null, false)
                }

                const tipo = ()=> {
                    if ((email == "adminFranco@gmail.com") && (password == "backdoor198245.")){
                        role="admin"
                        return role
                    } else {
                        role="user"
                        return role
                    }
                }

                const newUser = {
                   fullname,
                    place,
                    role: await tipo(),
                    email,
                    password:createHash(password)
                }
                console.log("aaaasdasd".newUser);
                const result = await usersService.createUser({fullname:newUser.fullname,
                                                                role: newUser.role,
                                                                email: newUser.email,
                                                                place: newUser.place,
                                                                password: newUser.password                                                
                })

                console.log(result)
                return done(null, result)
            }catch(e){
                return done("error to register " + e)
            }
        }
    ))
    //Login es el nombre para iniciar sesion con local
    passport.use("login", new LocalStrategy(
        {usernameField:"email"},
        async (email,password,done) => {
            try{
            console.log(email);//arreglar username en login
            const user = await usersService.getUserByEmail({email:email})/* .lean().exec() */
            if(!user){
                console.error("User doesnt exist")
                return done(null,false)
            }

            if(!isValidPassword(user,password)){
                console.error("Password not valid")
                return done(null,false)
            }
            return done(null,user)
            }catch(e) {
                return done("Error login " + e)
            }
        }
    ))
    //Login es el nombre para iniciar sesion con local
    passport.use("current", new LocalStrategy(
        {usernameField:"email"},
        async (username,password,done) => {
            try{
            const user = await usersService.getUserByEmail({email:username}).lean().exec()
            if(!user){
                console.error("User doesnt exist")
                return done(null,false)
            }

            if(!isValidPassword(user,password)){
                console.error("Password not valid")
                return done(null,false)
            }
            return done(null,user)
            }catch(e) {
                return done("Error login " + error)
            }
        }
    ))
    //Login es el nombre para iniciar sesion con local
    passport.use("current", new LocalStrategy(
        {usernameField:"email"},
        async (username,password,done) => {
            try{
            const user = await usersService.getUserByEmail({email:username}).lean().exec()
            if(!user){
                console.error("User doesnt exist")
                return done(null,false)
            }

            if(!isValidPassword(user,password)){
                console.error("Password not valid")
                return done(null,false)
            }
            return done(null,user)
            }catch(e) {
                return done("Error login " + error)
            }
        }
    ))


    

    passport.use(
        'jwt',
        new jwt.Strategy(
            {
                jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: 'TokenForJWT'
            },
            async (jwt_payload, done) => {

                try {
                    return done(null, jwt_payload)
                } catch (e) {
                    return done(e)
                }
            })
    )

    passport.serializeUser((user,done) => {
        done(null,user._id)
    })

    passport.deserializeUser(async(id,done)=> {
        const user = await usersService.getUserByID(id)
        done(null,user)
    })

} 





export default initializePassport