import Image from "next/image";
import { skills, social_handles, projects } from "@/db"
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex flex-col gap-12 w-[95vw] md:w-[70vw] lg:w-[40vw] mx-auto mt-9">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[50%] border p-2 rounded-lg rotate-3 shadow-xl">
          <Image
            src={"/profile.jpg"}
            width={1000}
            className="w-full rounded-sm border"
            height={0}
            alt="Cover"
          />
        </div>
        <div className="w-[70%] mt-4">
          <h1 className="text-center text-[20px]">Abhishek Kr. Verma</h1>
          <h2 className="text-right text-[14px]">
            ~ B.Sc, CS & AI Enthusiast
          </h2>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[30px] text-center">Skills</h1>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
          {Array.from(skills.entries()).map(([k, v]) => (
            <div
              key={k}
              className="w-full border relative p-2 rounded-md shadow-md overflow-hidden"
            >
              <p className='z-50 relative'>

                {v.name}
              </p>
              {/* <div className='-rotate-6'> */}

              <Image src={v.logo} className='absolute -bottom-1 -right-1 rotate-6' width={30} height={0} alt={v.name} />
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[40px] text-center">Projects</h1>
        <span className="bg-green-500 w-6 h-6 relative top-4 rounded-full" />
        <div className="grid gap-2">
          {projects.map((p) => (
            <div key={p.title} className="border rounded-md p-6 bg-transparent backdrop-blur-lg z-10 space-y-3">
              <p className="font-bold">{p.title}</p>
              <div className="flex gap-1">
                {p.website_url && <a className="flex gap-0.5 hover:underline underline-offset-4 items-center justify-center" href={p.website_url}>Visit <ArrowUpRightIcon size={12} /></a>}
                {p.github_url && <a className="flex gap-0.5 hover:underline underline-offset-4 items-center justify-center" href={p.github_url}>Github <ArrowUpRightIcon size={12} /></a>}
              </div>
              <div className="flex gap-2">
                {
                  p.skills_used.map(t => {
                    const skill = skills.get(t);
                    if (!skill) return;
                    return <div className="flex gap-0.5 items-center justify-center text-[12px] border rounded-lg px-1.5 p-1 bg-muted">
                      <Image alt={skill.name} src={skill.logo} className="rounded-full" width={16} height={16} />
                      {skill.name}
                    </div>
                  })
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around">
          {
            Array.from({ length: social_handles.length }, (_, i) => <span className={`bg-${['red', 'blue', 'purple', 'green', 'indigo'][i % 5]}-500 w-6 h-6 relative top-${16 + (Math.random() * 10) - 5} rounded-full`} />)
          }
        </div>
        <div className="z-10 flex bg-transparent backdrop-blur-md justify-around border border-b-0 items-center p-6 rounded-t-lg">
          {social_handles.map((s) => (
            <Link key={s.platform} href={s.url}>
              <Image src={s.logo} alt={s.platform} width={30 + (s.extra_logo_width ?? 0)} height={30} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
