import { generateToken,authToken, isValidPassword, createHash, resetAuth } from "../utils.js";
import { usersService } from "../DAO/repository/index.js";
import config from "../config/config.js";
//REGISTRO

export const registerJWT = async(req,res)=> {
    res.json({ status: 'Perfil Creado' })
}

export const loginJWT = async(req,res) => {
    if (!req.user) {
        return res.status(400).json({ error: 'Invalid credentialsss' })
    }

    const token = generateToken(req.user)

    try {
        res.json({ status: 'Bienvenido',payload:token });
        
    } catch (error) {
        res.json({ status: 'Contraseña o Mail Invalido',payload:[]});
        console.log(error)
        
    }
}
//ACCESO AL PERFIL

export const accessProfile = async(req,res)=> {
    const user = req.user.user
    const userfilter = {fullname: user.fullname,
                        email: user.email,
                        role: user.role,
                        place: user.place
    }
    res.json({usuario: userfilter})
    try {
        res.json({usuario: userfilter})
        
    } catch (error) {
        res.status(401).json({status:"sin autorizacion",payload:[]});
        console.log(error)     
    }
}

//RESTAURAR CONTRASEÑA

/* export const resetPass = async(req,res) => {
    const user = req.body
    const email = user.email

    const token = generateToken(user)

    const sendEmail = async() => {
        const transport = nodemailer.createTransport({
            service:"gmail",
            port:587,
            auth:{
                user:"shopmailingshop@gmail.com",
                pass:config.passEmail
            }
        })
        const result = await transport.sendMail({
            from:"shopmailingshop@gmail.com",
            to:email,
            subject:"Cambio de contraseña",
            html:`
                <div>
                    Cambio de contraseña: Copie el siguiente token y introduscalo en la siguiente pagina <br> 
                    https://front-of-backend-cuenca.vercel.app/api/session/reset-auth/${token}
                
                </div>
            `,
            attachments:[]
        })

        return result

    }
    
    try {
        const result = await usersService.getUserByEmail({email:email})

        if (result!= undefined) {
            await sendEmail()
            res.json({status:"Revise su casilla de mails para restaurar"})
        }else {
            res.json({status:"Usuario no existente"})
        }
    } catch (error) {
        console.log(error)
    }

} */

export const passAuthToken = async(req,res) => {
    const user = req.body 
    const token = req.params.token
    const password = user.password
    
    const emailAuth = await resetAuth(token)

    if (emailAuth){
    try {
        const result = await usersService.getUserByEmail({email:emailAuth.email})
        const a = isValidPassword(result, password)
        if(a) {
            res.json({status:"Elija otra contraseña no la misma"})
        } else{
            console.log(password)
            
            const hash = createHash(password)
            const b = await usersService.updateOne(result.id,hash)
            b
            res.json({status:"cambio con exito"})
        }
    } catch (error) {
        console.log(error)
    }}else{
        res.json({status:"Token invalido"})
    }
}

//CURRENT

export const current = async(req,res)=> {
    res.json({
        user: req.user
    })
}

export const logOut = async(req,res)=> {
    req.session.destroy(error => {
        if (error) {
          console.error('Error al cerrar sesión:', err)
        } else {
          console.log("Sesion cerrada")
          res.redirect('/')//HOME
        }
      })
}

//AUTENTICACION CON GITHUB

export const emptyReqRes= async(req,res)=> {

}

//Middleware para bloqueo de ingreso a DB 

export const authUser = async(req,res,next)=> {
    const user = req
    console.log("aa",user);
    if(user.email =="adminCoder@coder.com"){
        next()
    }else{res.send("Not Autorized, you r not admin ")}
}

//Enviar datos al front con dto current 

export const currentDTO = async(req,res)=>{
    const user = req.session.user
    const result = usersService.current(user)
    res.send({status:"success",payload:result})
}