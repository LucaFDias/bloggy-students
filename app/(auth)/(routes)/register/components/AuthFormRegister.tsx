'use client'

import axios from 'axios';

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import AuthSocialButton from "@/components/AuthSocialButton";

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import { 
  FieldValues, 
  SubmitHandler, 
  useForm 
} from 'react-hook-form';
import InputForm from "@/components/input-form";

import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthFormRegister = () => {
  const router = useRouter();
  const session = useSession();

  const [ isLoading, setIsLoading ] = useState(false);

  // usario que estiver autenticada ira para session home
  useEffect(() => {
    if ( session?.status === 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router])

  const { 
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubtmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .catch(() => toast.error('Algo deu errado'))
    .finally(() => setIsLoading(false));
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false})
    .then((callback) => {
      if (callback?.error) {
        toast.error('Credencial invalida')

      }

      if (callback?.ok && !callback?.error) {
        router.push('/')
      }
    })
    .finally(() => setIsLoading(false))
  }

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
        <InputForm
          id="name"
          label="Nome"
          type="text"
          placeholder="Nome"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <InputForm
          id="email"
          label="E-mail"
          type="text"
          placeholder="E-mail"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <InputForm
          id="password"
          label="Senha"
          type="password"
          placeholder="Senha"
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <Button 
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md">
          Acessar conta
        </Button>
      </form>
      <div className="text-center">
        <span className="text-xs">Já possui conta? <Link className="text-sky-500 underline" href="/login">Clique aqui</Link></span>
      </div>
    </>
  );
};

export default AuthFormRegister;