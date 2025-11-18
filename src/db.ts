import { GithubIcon } from "lucide-react"

type Skill = {
    name: string,
    logo: string,
}

export const skills = new Map<string, Skill>([
    ["rust", { name: "Rust", logo: "https://www.svgrepo.com/show/374056/rust.svg" }],
    ["python", { name: "Python", logo: "https://www.svgrepo.com/show/374016/python.svg" }],
    ["typescript", { name: "Typescript", logo: "https://www.svgrepo.com/show/354478/typescript-icon.svg", }],
    ["docker", { name: "Docker", logo: "https://www.svgrepo.com/show/448221/docker.svg", }],
    ["kubernetes", { name: "Kubernetes", logo: "https://www.svgrepo.com/show/353983/kubernetes.svg" }],
    ["nextjs", { name: "Next.js", logo: "https://www.svgrepo.com/show/378440/nextjs-fill.svg", }],
    ["dioxus", { name: "Dioxus", logo: "https://dioxuslabs.com/assets/smalllogo-dxh37d2f8e29923d6a.png", }],
    ["expojs", { name: "Expo", logo: "https://www.svgrepo.com/show/341805/expo.svg", }],
    ["reactjs", { name: "React", logo: "https://www.svgrepo.com/show/452092/react.svg", }],
    ["elysiajs", { name: "Elysia.js", logo: "https://elysiajs.com/assets/elysia.svg", }],
    ["aws-ec2", { name: "AWS EC2", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/RHSMMGZKYJXPPNI2IOC6Z63HJEW4FD5ZYMKJSXD7HQ5IPUTQR2TQ/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg" }],
    ["aws-s3", { name: "AWS S3", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/DKY2SIL5N3MJQCULDNOQE7TKLNQIUXRSOHBJKJGQAHLZO7TLH3TQ/icon/c0828e0381730befd1f7a025057c74fb-43acc0496e64afba82dbc9ab774dc622.svg" }],
    ["aws-lambda", { name: "Lambda", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/BMZQS7MWY7VIUF7PXETK3ULHIXZQQOURXD3AK46KD7UE6WMRLUSA/icon/945f3fc449518a73b9f5f32868db466c-926961f91b072604c42b7f39ce2eaf1c.svg" }],
    ["aws-dynamodb", { name: "DynamoDB", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/AN2R6BU3DBLYCROPWJWYQWM62AYYLMXTM5V7AHNGQIU34L2VIEEA/icon/6f419a45e63123b4c16bd679549610f6-87862c68693445999110bbd6a467ce88.svg" }],
    ["mongodb", { name: "MongoDB", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" }],
    ["html", { name: "HTML", logo: "https://www.svgrepo.com/show/452228/html-5.svg" }],
    ["css", { name: "CSS", logo: "https://www.svgrepo.com/show/452185/css-3.svg" }],
    ["tailwindcss", { name: "TailwindCSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" }]
])

type Project = {
    title: string,
    website_url: string,
    github_url: string,
    skills_used: string[]
}

export const projects: Project[] = [
    {
        title: "Zomato Clone (Frontend Only)",
        website_url: "https://zomato-clone-iakv.vercel.app",
        github_url: "https://github.com/i-akv/zomato-clone-nextjs",
        skills_used: ["typescript", "nextjs", "react"]
    },
]

type SocialHandle = {
    platform: string;
    url: string;
    logo: string;
    extra_logo_width?: number
};

export const social_handles: SocialHandle[] = [
    {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/i-akv",
        extra_logo_width: 10,
        logo: "https://www.svgrepo.com/show/448234/linkedin.svg"
    },
    {
        platform: "x",
        url: "https://twitter.com/iakv_",
        extra_logo_width: -5,
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
    },
    {
        platform: "github",
        url: "https://www.github.com/i-akv",
        logo: "https://www.svgrepo.com/show/512317/github-142.svg"
    },
    //   {
    //     title: "Youtube",
    //     url: "https://www.github.com/i-akv/",
    //   },
    //   {
    //     title: "Instagram",
    //     url: "https://www.github.com/i-akv/",
    //   },
    {
        platform: "leetcode",
        url: "https://leetcode.com/u/i-akv",
        logo: "https://simpleicons.org/icons/leetcode.svg"
        // img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        // class_name: "bg-yellow-50",
    },
];
