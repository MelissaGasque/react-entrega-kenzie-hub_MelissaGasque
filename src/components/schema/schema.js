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
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[\s\S]{8,}$/, "A senha precisa ter no mínimo uma letra maiuscula, uma letra minuscula, um número e um caractere especial"),

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

export const SchemaModalCreate = z.object({
    title: z.string().nonempty("Adicionar a tecnologia é obrigatório"),
    
    status: z.string().nonempty("Escolher o status é obrigatório")
})

export const SchemaModalEditDelet = z.object({
    status: z.string().nonempty("Escolher o status é obrigatório"),
})