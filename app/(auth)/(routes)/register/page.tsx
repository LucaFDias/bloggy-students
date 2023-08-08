import AuthFormRegister from './components/AuthFormRegister';

const Register = () => {
  return (
    <div className='flex items-center justify-center w-full mt-6'>
      <div className='flex flex-col w-[400px] p-5 space-y-4'>
        <h3 className='text-3xl text-center font-bold'>Registrar conta</h3>
        <p className='text-xs text-gray-500 text-center'>Registre sua conta e tenha acesso a conteúdo exclusivos de forma gratuita em uma das maiores comunidade de dev.</p>
        <div>
          <AuthFormRegister/>
        </div>
      </div>
    </div>
  )
}

export default Register;