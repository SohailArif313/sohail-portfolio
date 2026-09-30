import Image from "next/image";

export function ProfileAvatar() {
  return (
    <div className="animate-float relative size-56 sm:size-72 lg:size-80">
      {/* Soft mint glow behind the photo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl"
      />

      {/* Faint outer ring */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full border border-primary/20"
      />

      {/* Rotating mint-to-amber gradient ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--highlight),var(--primary))]"
      />

      {/* Dark gap between the ring and the photo */}
      <div className="absolute inset-[3px] rounded-full bg-background p-[6px]">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src="/images/profile/sohail.webp"
            alt="Portrait of Sohail Arif"
            width={800}
            height={800}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 224px"
            // Above the fold, so load it right away (helps LCP).
            priority
            className="size-full object-cover"
          />
          {/* Inner shadow to blend the grey photo background into the dark theme */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </div>
  );
}