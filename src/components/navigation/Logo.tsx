import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/voicedx.png"
        alt="VoiceDx Logo"
        width={140}
        height={40}
        className="h-auto w-auto"
        priority
      />
    </div>
  );
};

export const LogoSmall = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/voicedx.png"
        alt="VoiceDx Logo"
        width={120}
        height={35}
        className="h-auto w-auto"
      />
    </div>
  );
};

export const LogoLarge = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/voicedx.png"
        alt="VoiceDx Logo"
        width={160}
        height={45}
        className="h-auto w-auto"
      />
    </div>
  );
};
