import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from "zod";


const signSignUp = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

type SignUpForm = z.infer<typeof signSignUp>

export function SignUp() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm) {
        console.log(data)
    }

    return (
        <section className="p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="card border-light-subtle shadow-sm">
                    <div className="row g-0">
                        <div className="col-12 col-md-6 bg-primary">
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <div className="col-10 col-xl-8 py-3">

                                    <hr className="border-primary-subtle mb-4" />
                                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                    <p className="lead m-0">We write words, take photos, make videos, and interact with artificial intelligence.</p>
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
                                                className="form-control"
                                                id="name"
                                                required
                                                {...register('name')}
                                            />
                                        </div>
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
                                                <button
                                                    disabled={isSubmitting}
                                                    className="btn bsb-btn-xl btn-primary p-2 mt-2" 
                                                    type="submit">
                                                    Cadastrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                                            <Link to={"/sign-in"} className="link-secondary text-decoration-none">Já possui conta? Faça login</Link>

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