import {useForm} from 'react-hook-form'
import loginHandler from './LoginHandler'
import Logo from '../../../assets/logo.svg'

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();    

    const submitHandler = async (values) => {
        await loginHandler(values);
    };

    return (
        <div>
            <img src={Logo} alt="logo"  className='absolute top-10'/>
            <h1 className="font-semibold text-3xl mb-10">Login</h1>
            <form method='POST' onSubmit={handleSubmit(async (values) => {
                await submitHandler(values);
            })}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="text-md flex-1 block w-96 border-1 focus:border-button-100 border-input-100 text-input-200 rounded-xl px-6 py-4 bg-primary-100"
                    placeholder="username"
                    {...register("username", { required: true })}
                />
                <label className='text-red-500 block'>{errors.username?.type === 'required' && "Please fill your username"}</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="text-md flex-1 block w-96 border-1 border-input-100 text-input-200 rounded-xl px-6 py-4 bg-primary-100 mt-3"
                    placeholder="password"
                    {...register("password", { required: true })}
                />
                <label className='text-red-500 block'>{errors.password?.type === 'required' && "Please fill your password"}</label>
                <button
                    type="submit"
                    className="justify-center block mt-8 w-96 py-4 px-6 rounded-xl text-lg font-medium drop-shadow-lg text-black bg-button-100 hover:bg-button-200">
                    Login
                </button>
                <h1 className='mt-3 text-center'>Don't have an account?
                    <a href="https://api.whatsapp.com/send?phone=6281334666364" target="_blank" rel="noopener noreferrer">
                        <span className='text-text-200'>Request Now</span>
                    </a>
                </h1>
            </form>
        </div>
    );
}