import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  href: string;
  text: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  topImageBackground?: ImageWidget;
  bottomImageBackground?: ImageWidget;
  videoLink?: string;
  cta?: CTA;
}

export default function HeroFlats({
  title = "<p>There’s a <em>better way</em> to manage your risk data</p>",
  description =
    "<p>Meet the new standard for intelligent risk management. Consolidate and visualise risk data, automate tasks and connect to your insurance providers.</p>",
  topImageBackground = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/0ed54618-9017-4826-95ef-f003b7981a29',
  bottomImageBackground = 'https://insurwave.com/assets/Home/HomeSectionVector.svg',
  videoLink = 'https://iw-prod.directus.app/assets/250e3d13-d86a-41da-b10d-74f7f6777906#t=0.1',
  cta = { href: "/demo", text: "BOOK A DEMO" },
}: Props) {
  return (
    <div class="relative pt-[108px]">
      <div class="absolute top-0 left-0 right-0 sm:bottom-[40%] -sm:bottom-[20%] bg-iw-industrial-green overflow-hidden"></div>
      <Image
        class="absolute z-10 text-[transparent]"
        alt={topImageBackground}
        src={topImageBackground}
        width={1920}
        height={1080}
        loading={'lazy'}
        decoding={'async'}
      />
      <div class="text-center container mx-auto pt-20 pb-5 px-10 flex flex-col items-center space-y-8">
        <h1 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-blue-bright text-iw-forecast z-40" dangerouslySetInnerHTML={{
          __html: title
        }} />
        <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-forecast max-w-5xl z-20"  dangerouslySetInnerHTML={{
          __html: description
        }} />
        <div class="w-full z-20">
          <a href={cta.href}>
            <button class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-blue-bright text-iw-industrial-green hover:!bg-iw-blue-shade mb-12 z-20 uppercase" type="button">{cta.text}</button>
          </a>
          <video controls={true} class="rounded-xl w-full" preload="auto">
            <source src={videoLink} type="video/mp4" />
          </video>
        </div>
      </div>
      <Image
        class="absolute w-full z-10 sm:top-[55%] -sm:top-[75%] text-[transparent]"
        alt={bottomImageBackground}
        src={bottomImageBackground}
        width={1920}
        height={530}
        loading={'lazy'}
        decoding={'async'}
      />
    </div>
  );
}
