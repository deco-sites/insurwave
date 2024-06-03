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
  subTitle?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  text?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  description?: string;
  backgroundImage?: ImageWidget;
  photo?: ImageWidget;
  logo?: ImageWidget;
}

export default function Testimonial({ 
  title = '<p><em>Beyond </em>expectations</p>',
  subTitle = '<p dir="ltr">Insurwave is driving the change asset holders were waiting for: streamlined operations, better risk transfer decisions and intelligent data management.</p>',
  backgroundImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/38ee312e-15d5-4ab0-8ff6-eec4bc6b41f8',
  text = '<span>“</span><span class="[&>*]:inline [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-blue-bright"><p>We have <em>automated </em>many of our internal processes and part of our interaction with the market. That’s how <em>Insurwave made it possible for us to be risk managers again</em> instead of insurance contract administrators.</p></span><span>”</span>',
  description = '<span class=""><p class="font-grotesk uppercase text-base">Lars Henneberg</p><p class="font-grotesk uppercase text-sm">Vice President, Head of Risk Management, A.P. Møller-Mærsk</p></span>',
  photo = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/3023f307-eba4-42f9-985c-7503ba1c3f95',
  logo = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/22269090-00bf-437a-8085-f88498c2f3ae'
}: Props) {
  return (
    <div class="bg-iw-blue-bright relative overflow-hidden">
       <Image
          class="absolute w-screen h-full z-10 text-[transparent]"
          alt={backgroundImage}
          src={backgroundImage}
          width={1920}
          height={1080}
          loading={'lazy'}
          decoding={'async'}
        />
      <div class="container mx-auto -lg:px-4 py-20 flex flex-col items-center space-y-8 z-20">
        <h1 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-fresh-paint text-iw-industrial-green text-center z-20" dangerouslySetInnerHTML={{
          __html: title
        }} />
        <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-industrial-green text-center max-w-5xl z-20" dangerouslySetInnerHTML={{
          __html: subTitle
        }} />
        <div class="flex md:space-x-4 sm:flex-row -sm:flex-col items-center lg:p-10 rounded-lg text-iw-industrial-green z-20 [&_em]:text-iw-fresh-paint">
          <div class="relative">
            <div>
              <Image
                class="rounded-xl sm:min-w-[325px] h-auto text-[transparent]"
                alt={photo}
                src={photo}
                width={240}
                height={300}
                loading={'lazy'}
                decoding={'async'}
              />
              <div class="bg-iw-fresh-paint rounded-lg flex items-center justify-center border-iw-industrial-green p-2 h-[100%] aspect-square absolute w-[88px] h-[88px] bottom-[5%] right-[5%]">
                <Image
                  class="text-[transparent]"
                  alt={logo}
                  src={logo}
                  width={72}
                  height={33}
                  loading={'lazy'}
                  decoding={'async'}
                />
              </div>
            </div>
          </div>
          <div class="h-full flex flex-col justify-center -sm:max-w-xs sm:pl-4">
            <div class="font-thin font-tobias sm:text-2xl -sm:pt-5 mb-7 lg:text-5xl" dangerouslySetInnerHTML={{
              __html: text
            }} />
            <div class="flex flex-row items-center md:space-x-4 -md:pt-2" dangerouslySetInnerHTML={{
              __html: description
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
