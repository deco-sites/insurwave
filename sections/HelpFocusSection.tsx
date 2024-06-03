import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  description?: string;
  firstImage: ImageWidget;
  secondImage: ImageWidget;
  thirdImage: ImageWidget;
}

export default function HelpFocusSection({ 
  description = '<p>We help you<em> focus</em> on what you do best</p>',
  firstImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/6ce01478-891e-4f91-9842-aaea2be1dbcf',
  secondImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/c7614b03-dec4-40cb-a6b2-4405a7e5cabc',
  thirdImage = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/167efcb8-0395-4413-94f1-fcabdce47900'
}: Props) {
  return (
    <div class="bg-iw-blue-bright">
      <div class="container mx-auto py-20 flex lg:flex-row -xl:px-2 -lg:px-5 -lg:flex-col -lg:items-center space-x-4 justify-center">
        <div class="flex space-y-4 flex-col">
          <h1 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-fresh-paint text-iw-industrial-green max-w-[693px] -lg:text-center" dangerouslySetInnerHTML={{
            __html: description
          }} />
          <div class="lg:flex md:grid md:grid-cols-2 md:items-start md:justify-items-center md:gap-4 -md:flex -md:flex-col -md:items-center -md:space-y-4">
            <Image
              class="-lg:col-span-2 -md:w-full text-[transparent]"
              alt={firstImage}
              src={firstImage}
              width={445}
              height={292}
              loading={'lazy'}
              decoding={'async'}
            />
            <Image
              class="-lg:w-full text-[transparent]"
              alt={secondImage}
              src={secondImage}
              width={298}
              height={292}
              loading={'lazy'}
              decoding={'async'}
            />
            <Image
              class="lg:hidden -lg:flex text-[transparent]"
              alt={thirdImage}
              src={thirdImage}
              width={241}
              height={500}
              loading={'lazy'}
              decoding={'async'}
            />
          </div>
        </div>
        <Image
          class="-lg:hidden lg:flex text-[transparent]"
          alt={thirdImage}
          src={thirdImage}
          width={241}
          height={500}
          loading={'lazy'}
          decoding={'async'}
        />
      </div>
    </div>
  );
}
