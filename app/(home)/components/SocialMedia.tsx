import Image from "next/image";

interface SocialMedia {
  id:number;
  socialId:string;
  img:string;
  alt:string;
}

const socialMedias = [
  {
    id: 0,
    alt: "telegram",
    img: "/images/telegram.png",
    socialId: "@thisguylosthismind",
  },
  {
    id: 1,
    alt: "github",
    img: "/images/github.png",
    socialId: "@erfan-j",
  },
];

export default function SocialMedia() {
  return (
    <section className="border-t p-4 flex flex-col gap-y-4 border-primary">
      <strong className="text-xl">you can find me here:</strong>
      <div className="flex gap-x-5 justify-center">
        {socialMedias.map((socailMedia: SocialMedia) => {
          return (
            <div key={socailMedia.id} className="flex flex-col items-center gap-y-4">
              <Image
                alt={socailMedia.alt}
                src={socailMedia.img}
                width={50}
                height={50}
                loading="eager"
              />
              <span>{socailMedia.socialId}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
