import { z } from "zod";

export const SchemaLogin = z.object({
    email: z
    .string().nonempty("O email é obrigatório")
    .email("Formato de e-mail inválido"),
    
    password:
    z.string()
    .min(8, "A senha é obrigatória"),
})

export const SchemaRegister = z.object({
    name: z
    .string().
    nonempty("O nome é obrigatório"),

    email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de e-mail inválido"),

    password: z
    .string()
    .min(8, "A senha é obrigatória e precisa ter no mínimo 8 caracteres")
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/, "A senha precisa ter no mínimo uma letra, um número e um caractere especial"),

    confirm:
    z.string()
    .nonempty("O nome é obrigatório"),

    bio: z
    .string()
    .nonempty("O nome é obrigatório"),

    contact: z
    .string(),

    course_module:z
    .string()
    .nonempty("Escolher a profissão é obrigatório")
   
}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path:["confirm"],
});

