import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Card {
  image: ImageWidget;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  descriptionTop?: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  descriptionBottom?: string;
  cards?: Card[];
}

export default function PoweringSection({ 
  descriptionTop = 'Powering the industry leaders reshaping the insurance market. From insurance buyers to brokers and insurers.',
  descriptionBottom = 'and more...',
  cards = [
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/ab18723f-4097-4a69-a56d-c096835a7042'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/fd65e007-080d-4ffc-af76-eaaa475122d3'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/eb0a84e4-9416-4239-aebc-4c7f7d22aa7d'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/0951bbe6-251f-432d-96cc-07f99704c619'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/8dc00345-90db-478e-8232-dea05743c48c'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/6df3842c-f494-40d2-a5d7-96a67be7c3ba'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/0cbd69e8-b365-4b13-9ee7-fa8017369c54'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/8b044068-0ebe-4a5c-9faa-2c5913b8ee49'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/b2721a0b-0209-461c-b9a7-421c50adf33a'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/ad0f535f-c036-4c48-ac4f-9419b0129438'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/412c3889-b189-4d8a-8343-54067bf47102'
    },
    {
      image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/9564dbc5-6d8f-4b7a-805a-876af5926177'
    }
  ]
}: Props) {
  return (
    <div class="bg-iw-forecast">
      <div class="text-center container mx-auto py-20 xl:py-40 px-2 flex flex-col items-center space-y-8">
        <h4 class="leading-tight text-[36px] font-tobias text-iw-industrial-green max-w-5xl" dangerouslySetInnerHTML={{
          __html: descriptionTop
        }} />
        <div class="grid gap-4 lg:grid-cols-6 md:grid-cols-3 -md:grid-cols-2">
          {
            cards?.map(card => (
              <div class="bg-iw-fresh-paint rounded-lg border flex items-center justify-center border-iw-industrial-green p-5 h-[100%] aspect-square">
                <Image
                  alt={card.image}
                  src={card.image}
                  width={200}
                  height={200}
                  loading={'lazy'}
                  decoding={'async'}
                />
              </div>
            ))
          }
        </div>
        <h5 class="leading-tight text-[24px] font-tobias text-iw-industrial-green text-[28px] max-w-5xl" dangerouslySetInnerHTML={{
          __html: descriptionBottom
        }} />
      </div>
    </div>
  );
}
