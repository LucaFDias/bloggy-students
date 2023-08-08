'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { z } from 'zod';

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import InputForm from "@/components/input-form";
import AuthSocialButton from "@/components/AuthSocialButton";

import { 
  FieldValues, 
  SubmitHandler, 
  useForm 
} from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from '@hookform/resolvers/zod'

import { signIn, useSession } from 'next-auth/react';

const createUserFormSchema = z.object({
  email: z.string()
  .nonempty('O endereço de E-mail é obrigatório')
  .email('Formato de e-mail inválido'),
  password: z.string()
  .min(6, 'Senha incorreta mínimo de 6 caracteres')
})

type createUserFormData = z.infer<typeof createUserFormSchema>

const AuthFormLogin = () => {

  const router = useRouter();
  const session = useSession();
  const [ isLoading, setIsLoading ] = useState(false);

  // usario que estiver autenticado ira para session home
  useEffect(() => {
    if ( session?.status === 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router])

  const { 
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues, createUserFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubtmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn('credentials', {
      ...data,
      redirect: false
    })
    .then((callback) => {
      if(callback?.error) {
        toast.error('Credenciais invalidas')
      }

      if (callback?.ok && !callback?.error) {
        router.push('/')
      }
    })
    .finally(() => setIsLoading(false));
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false})
    .then((callback) => {
      if (callback?.error) {
        toast.error('Credencial invalida')
      }
    })
    .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="mt-6 mb-6">
        <div className="mb-4 flex gap-2">
          <AuthSocialButton
            icon={FcGoogle}
            onClick={() => socialAction('google')}
          />
          <AuthSocialButton
            icon={AiFillGithub}
            onClick={() => socialAction('github')}
          />
        </div>
        <div className="relative">
          <div
            className="
              absolute
              inset-0
              flex
              items-center"
            >
              <div
                className="
                  w-full 
                  border-t
                border-x-gray-300"
              />
            </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white dark:bg-[#020817] px-2 text-gray-500">
              Ou continue com
            </span>
          </div>
        </div>
      </div>
      <form 
        className="space-y-4 mb-4"
        onSubmit={handleSubmit(onSubtmit)}
      >
        <div>
          <InputForm
            id="email"
            label="E-mail"
            type="text"
            placeholder="E-mail"
            register={register}
            errors={errors}
          />
          {
            errors.email && 
              <span className="text-xs text-rose-500">{errors.email.message}</span>
          }
        </div>
        <div>
          <InputForm
            id="password"
            label="Senha"
            type="password"
            placeholder="Senha"
            register={register}
            errors={errors}
          />
          {
            errors.password && 
              <span className="text-xs text-rose-500">{errors.password.message}</span>
          }

        </div>
        <Button 
          disabled={isLoading}
          type="submit"
          className="w-full rounded-md"
        >
          Acessar conta
        </Button>
      </form>
      <div className="text-center">
        <span className="text-xs">Ainda não possui conta? <Link className="text-sky-500 underline" href="/register">Clique aqui</Link></span>
      </div>
    </>
  );
};

export default AuthFormLogin;