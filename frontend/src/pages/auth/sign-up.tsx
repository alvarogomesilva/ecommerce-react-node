import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/sign-up";
import { Store } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";


const signSignUp = z.object({
    name: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
})

type SignUpForm = z.infer<typeof signSignUp>

export function SignUp() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting,
            errors
        } } = useForm<SignUpForm>({ resolver: zodResolver(signSignUp) })

    const { mutateAsync: signUpFn } = useMutation({
        mutationFn: signUp,
        onError: () => { }
    })

    async function handleSignUp(data: SignUpForm) {
        try {
            await signUpFn({
                name: data.name,
                email: data.email,
                password: data.password
            })

            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.message('Novo Cadastro', {
                description: 'Usuário cadastrado com sucesso',
            })
            navigate('/sign-in')
        } catch (error) {
            toast.error('Erro ao cadastrar usuário')
        }
    }

    return (
        <section className="p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="card border-light-subtle shadow-sm">
                    <div className="row g-0">
                        <div className="col-12 col-md-6 bg-primary">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <div className="col-10 col-xl-8 py-3 text-center">
                                    <Store
                                        size={150}
                                        color="white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h3>Cadastre-se</h3>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!" onSubmit={handleSubmit(handleSignUp)}>
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Nome Completo<span className="text-danger">*</span></label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                id="name"
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name && (
                                                <p className="invalid-feedback d-block">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                id="email"
                                                placeholder="name@example.com"

                                                {...register("email", { required: true })}

                                            />
                                            {errors.email && (
                                                <p className="invalid-feedback d-block">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="password" className="form-label">Senha <span className="text-danger">*</span></label>
                                                <a href="#!" className="link-secondary text-decoration-none">Esqueçeu sua senha?</a>
                                            </div>
                                            <input

                                                type="password"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                id="password"

                                                {...register("password", { required: true })}
                                            />
                                            {errors.password && (
                                                <p className="invalid-feedback d-block">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button
                                                    disabled={isSubmitting}
                                                    className="btn bsb-btn-xl btn-primary p-2 mt-2"
                                                    type="submit">
                                                    {isSubmitting? 'Cadastrando...': 'Cadastrar'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link to={"/sign-in"} className="link-primary text-decoration-none">Já possui conta? Faça login</Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}