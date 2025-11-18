type Skill = {
    name: string,
    logo: string,
}

export const skills = new Map<string, Skill>([
    ["rust", { name: "Rust", logo: "https://www.svgrepo.com/show/374056/rust.svg" }],
    ["python", { name: "Python", logo: "https://www.svgrepo.com/show/374016/python.svg" }],
    ["typescript", { name: "Typescript", logo: "https://www.svgrepo.com/show/354478/typescript-icon.svg", }],
    ["docker", { name: "Docker", logo: "https://www.svgrepo.com/show/448221/docker.svg", }],
    ["nextjs", { name: "Next.js", logo: "https://www.svgrepo.com/show/378440/nextjs-fill.svg", }],
    ["reactjs", { name: "React", logo: "https://www.svgrepo.com/show/452092/react.svg", }],
    ["elysiajs", { name: "Elysia.js", logo: "https://elysiajs.com/assets/elysia.svg", }],
    ["aws-ec2", { name: "AWS EC2", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/RHSMMGZKYJXPPNI2IOC6Z63HJEW4FD5ZYMKJSXD7HQ5IPUTQR2TQ/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg" }],
    ["aws-s3", { name: "AWS S3", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/DKY2SIL5N3MJQCULDNOQE7TKLNQIUXRSOHBJKJGQAHLZO7TLH3TQ/icon/c0828e0381730befd1f7a025057c74fb-43acc0496e64afba82dbc9ab774dc622.svg" }],
    ["aws-lambda", { name: "AWS Lambda", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/BMZQS7MWY7VIUF7PXETK3ULHIXZQQOURXD3AK46KD7UE6WMRLUSA/icon/945f3fc449518a73b9f5f32868db466c-926961f91b072604c42b7f39ce2eaf1c.svg" }],
    ["aws-apigateway", { name: "AWS EC2", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/YQSXE26XPXPOFR4RNTHADZ6A5EBPBODPAKV6IERNZE66HMBAER2A/icon/fb0cde6228b21d89ec222b45efec54e7-0856e92285f4e7ed254b2588d1fe1829.svg" }],
    ["aws-dynamodb", { name: "AWS DynmamoDB", logo: "https://a.b.cdn.console.awsstatic.com/a/v1/AN2R6BU3DBLYCROPWJWYQWM62AYYLMXTM5V7AHNGQIU34L2VIEEA/icon/6f419a45e63123b4c16bd679549610f6-87862c68693445999110bbd6a467ce88.svg" }],
    ["mongodb", { name: "MongoDB", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" }]
])

type Project = {
    title: string,
    website_url: string,
    github_url: string,
    skills_used: (Skill | undefined)[]
}

export const projects: Project[] = [
    {
        title: "Zomato Clone (Frontend Only)",
        website_url: "https://zomato-clone-iakv.vercel.app/",
        github_url: "https://zomato-clone-iakv.vercel.app/",
        skills_used: [
            skills.get("typescript"),
            skills.get("nextjs"),
        ]
    },
]

type SocialHandle = {
    title: string;
    url: string;
};

export const social_handles: SocialHandle[] = [
    {
        title: "LinkedIn",
        // img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        url: "https://www.linkedin.com/in/i-akv/",
    },
    {
        title: "X",
        // img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        url: "https://twitter.com/iakv_",
        // class_name: "bg-black/10",
    },
    {
        title: "Github",
        url: "https://www.github.com/i-akv/",
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
        title: "LeetCode",
        url: "https://leetcode.com/u/i-akv/",
        // img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
        // class_name: "bg-yellow-50",
    },
];
