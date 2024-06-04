import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  title?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  description?: string;
  image?: ImageWidget;
  imageBackground?: ImageWidget;
}

export default function Feature({ 
  title = 'Visualise complex data',
  description = 'Our platform provides the detail and visual cues you need with workflows and performance analytics.',
  image = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/214f9e06-8dc6-4981-9d9c-1b4a1bf998eb',
  imageBackground
}: Props) {
  return (
    <div class="bg-iw-industrial-green overflow-hidden relative top-[-2px]">
      <div class="text-center container mx-auto pb-40 px-10 flex flex-col items-center lg:pb-40">
        <div class="relative">
          <div class="w-full flex flex-col gap-20">
            <div class="flex md:flex-row -md:flex-col -md:items-center md:items-center gap-4 justify-evenly w-full md:text-left -md:text-center">
              <h2 class="leading-tight text-[64px] md:text-[48px] lg:text-[64px] font-tobias text-iw-fresh-paint max-w-5xl -md:text-center z-20"dangerouslySetInnerHTML={{
                __html: title
              }} />
              <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-fresh-paint text-lg font-thin lg:max-w-sm -lg:max-w-xs -md:text-center z-20"dangerouslySetInnerHTML={{
                __html: description
              }} />
            </div>
            <Image
              class="rounded-xl z-20 text-[transparent]"
              alt={image}
              src={image}
              width={3000}
              height={1920}
              loading={'lazy'}
              decoding={'async'}
            />
          </div>  
          {
            imageBackground &&
            <div id="background" class="hidden md:block absolute w-full h-full bg-no-repeat bg-contain -translate-x-1/2 lg:top-[14%] -lg:top-[16%] bottom-0" 
              style={{
                backgroundImage: 'url(' + imageBackground + ')'
              }}></div>
          }
        </div>
      </div>
    </div>
  );
}
