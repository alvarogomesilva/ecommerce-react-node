import { Link, useNavigate } from "react-router-dom";
import { Store } from 'lucide-react';
import { set, z } from "zod";
import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/sign-in";
import { useAuthStore } from "../../store/auth-store";

const signSignIp = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

type SignIpForm = z.infer<typeof signSignIp>

export function SignIn() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignIpForm>()
    const setAuth = useAuthStore((set) => set.setAuth)
    const navigate = useNavigate()
    const { mutateAsync: signInFn } = useMutation({
        mutationFn: signIn
    })

    async function handleSignIn(data: SignIpForm) {
        
        try {
            const response = await signInFn({
                email: data.email,
                password: data.password
            })
            
            setAuth(response.data.token,response.data.user)

            response.data.user.role === 'ADMIN' ?  navigate('/painel'): navigate('/')

        } catch (error) {
            console.log(error)
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
                                            <h3>Faça seu login</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(handleSignIn)}>
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="name@example.com"
                                                required
                                                {...register('email')}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="password" className="form-label">Senha <span className="text-danger">*</span></label>
                                                <a href="#!" className="link-secondary text-decoration-none">Esqueçeu sua senha?</a>
                                            </div>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                required
                                                {...register('password')}
                                            />

                                        </div>

                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-primary p-2 mt-2" type="submit">Entrar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link to={"/sign-up"} className="link-primary text-decoration-none">Não possui conta? Cadastre-se</Link>

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