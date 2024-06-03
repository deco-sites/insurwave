import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  text: string;
  href: string;
}

export interface Card {
  image: ImageWidget;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  title: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  description: string;
  cta: CTA;
}

export interface Props {
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
  cards?: Card[];
}

export default function TrioCards({ 
  title = '<p>Keep everyone connected</p>',
  description = '<p dir="ltr">Insurers, brokers and corporates buying and selling risk benefit from an integrated insurance management experience.</p>',
  cards = [
    {
      title: 'Insurance Buyer',
      description: '<p>View historical performance and share renewal-ready data in one platform.</p>',
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/6c3f8e9b-fe92-42f7-9f05-2c90d8e2e06b',
      cta: {
        href: '/solutions/insurance-buyer',
        text: 'Key benefits for buyers'
      }
    },
    {
      title: 'Insurer',
      description: '<p>Get portfolio insights in seconds, identify trends and make better decisions.</p>',
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/463005d9-0ab7-4ba3-a0cf-faebbb2c088e',
      cta: {
        href: '/solutions/insurers',
        text: 'Key benefits for insurers'
      }
    },
    {
      title: 'Brokers',
      description: '<p>Optimise your workflow and rely on a single source of truth for your client’s data.</p>',
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/4f667816-242a-444a-808b-9aa0771dc437',
      cta: {
        href: '/solutions/brokers',
        text: 'Key benefits for brokers'
      }
    }
  ]
}: Props) {
  return (
    <div class="bg-iw-forecast">
      <div class="text-center container mx-auto py-20 px-10 flex flex-col items-center space-y-8">
        <h1 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias text-iw-industrial-green" dangerouslySetInnerHTML={{
          __html: title
        }} />
        <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-industrial-green max-w-3xl pb-10" dangerouslySetInnerHTML={{
          __html: description
        }} />
        <div class="flex items-center lg:flex-row lg:space-x-8 -lg:flex-col -lg:space-y-8">
          {
            cards?.map(card => (
              <div class="w-full flex flex-col-reverse">
                <div class="flex flex-col gap-4 justify-evenly w-full md:text-left -md:text-center">
                  <h4 class="leading-tight text-[36px] font-tobias text-iw-industrial-green z-20 pt-5">Insurance Buyer</h4>
                  <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-industrial-green text-lg">
                    <p>View historical performance and share renewal-ready data in one platform.</p>
                  </h5>
                  <a data-testid="cta_/solutions/insurance-buyer" href="/solutions/insurance-buyer">
                    <button class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-industrial-green text-iw-hi-vis hover:!bg-iw-seaweed mt-3" type="button">Key benefits for buyers</button>
                  </a>
                </div>
                <Image
                  class="rounded-xl z-20"
                  alt={card.image}
                  src={card.image}
                  width={376}
                  height={220}
                  loading={'lazy'}
                  decoding={'async'}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
