
import AuthFormLogin from './components/AuthFormLogin'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center w-full mt-6'>
      <div className='flex flex-col w-[400px] p-5 space-y-4'>
        <h3 className='text-3xl text-center font-bold'>Acessar conta</h3>
        <p className='text-xs text-gray-500 text-center'>Acesse sua conta e tenha acesso a conteúdo exclusivos de forma gratuita em uma das maiores comunidade de dev.</p>
        <div>
          <AuthFormLogin/>
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage