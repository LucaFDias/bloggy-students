import Link from "next/link";
import Image from "next/image";

import Image01 from "@/public/1.jpg";
import Image02 from "@/public/2.jpg";
import Image03 from "@/public/3.jpg";

const HomePage = () => {  
  return (
    <>
      {/* COLECTIONS */}
      <section
        className="mt-10 px-5"
      >
        <div className="grid grid-cols-3 space-x-5">
          <div>
            <Link
              href="/"
              className="relative"
            >
              <Image
                src={Image01}
                alt="Image 1"
                className="rounded"
              />
              <div className="absolute bottom-0 w-full p-5">
                <h1 className="text-center text-3xl text-white font-bold">Por onde comecar?</h1>
                <p className="text-sm">Esquema para comecar no mundo do desenvolvimento</p>
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span>Avatar</span>
                    <span className="text-sm font-normal">Nome do avatar</span>
                  </div>
                  <span className="text-xs font-light">July, 2023</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col space-y-5">
            <div>
              <Link
                href="/"
                className="relative"
              >
                <Image
                  src={Image02}
                  alt="Image 2"
                  className="rounded"
                />
                <div className="absolute bottom-0 w-full p-5">
                  <h1 className="text-center text-3xl">Por onde comecar?</h1>
                  <p className="text-sm">Esquema para comecar no mundo do desenvolvimento</p>
                </div>
              </Link>
            </div><div>
              <Link
                href="/"
                className="relative"
              >
                <Image
                  src={Image03}
                  alt="Image 2"
                  className="rounded"
                />
                <div className="absolute bottom-0 w-full p-5">
                  <h1 className="text-center text-3xl">Por onde comecar?</h1>
                  <p className="text-sm">Esquema para comecar no mundo do desenvolvimento</p>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Link
              href="/"
              className="relative"
            >
              <Image
                src={Image01}
                alt="Image 1"
                className="rounded"
              />
              <div className="absolute bottom-0 w-full p-5">
                <h1 className="text-center text-3xl">Por onde comecar?</h1>
                <p className="text-sm">Esquema para comecar no mundo do desenvolvimento</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* ALL CATEGORIES */}
      <div className="my-10 p-5 w-full">
        <h1 className="text-3xl font-semibold">Categorias</h1>
      </div>
      
      {/* CONTAINER 1 */}
      <section className="max-w-full mx-auto">
        <div className="flex-[1] w-full flex flex-col justify-start items-stretch relative min-w-[1px] max-w-full">
          <span className="w-[1px] h-[120px] gap-1 self-center from-slate-600 bg-gradient-to-t"></span>
        </div>
        {/* CONTAINER 2 */}
        <div className="flex w-full">
          <div className="flex-1">
            <div className="pr-[64px]">
              <div className="translate-y-[-50%]">
                <div className="relative mt-[56px]">
                  <div className="w-full h-[200px] shadow-md">
                      {/* CARD 1 */}
                      <div className="flex justify-between">
                        <div>Ola</div>
                        <div>
                          <div>Ola 2</div>
                          <div>Ola 3</div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LINE VERTICAL */}
          <div className="flex flex-col">
            <span className="pr-[1px] bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 flex-1 w-[1px] self-center"></span>
            <span className="w-2.5 h-2.5 shadow-sm bg-[#999] rounded-full my-1"></span>
            <span className="flex-1 w-[1px] border-r self-center"></span>
          </div>
          <div className="flex-1">
            <div className="pl-[59px] -mt-2 pb-64 mb-6">
              ola
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO */}
      <section>

      </section>
      
    </>
  );
};

export default HomePage;