import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  description: string;
  cta: {
    text: string;
  }
}

export interface Social {
  icon: AvailableIcons;
  href: string;
  width: string;
  height: string
}

export interface Security {
  image: ImageWidget;
  width: number;
  height: number;
}

export interface Props {
  logo: {
    svg: AvailableIcons;
    alt: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  copyright?: string;
  copyrightText?: string;
  address?: string;
  social?: Social[];
  images?: Security[];
}

export default function Footer(props: Props) {
  return (
    <footer
      class="flex-col flex gap-10 lg:!p-10 p-6 relative w-full z-10 snap-end bg-iw-industrial-green text-white"
    >
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start w-full lg:!gap-20 gap-8 justify-between"
      >
        <div
          class="flex flex-col items-center lg:!items-start gap-2 w-full max-w-max"
        >
          <a
            id="footer-logo"
            class="flex"
            aria-label={props.logo.alt ?? "Alternative Insurwave logo at the bottom"}
            href="/"
          >
            <Icon
              width={150}
              height={33}
              id={props.logo.svg ?? 'WhiteLogo'}
              strokeWidth={3}
            />
          </a>
          <div class="flex gap-8">
            {props.social?.map(social => (
              <a
                target="_blank"
                href={social.href}
              >
                <Icon
                  width={social.width}
                  height={social.height}
                  id={social.icon}
                  strokeWidth={3}
                />
              </a>
            ))}
          </div>
        </div>
        <div
          class="bg-white rounded-xl w-full flex flex-col lg:flex-row items-center p-7 max-w-[400px]"
        >
          <span
            class="font-tobias text-2xl text-iw-industrial-green w-full text-center mb-3 md:mt-3"
          >
            {props.subscribe?.description}
          </span>
          <div>
            <button
              class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-industrial-green text-iw-hi-vis hover:!bg-iw-seaweed w-fit"
            >
              {props.subscribe?.cta.text}
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 place-items-stretch"
      >
        <div class="flex flex-col gap-3 font-light">
          <span class="uppercase font-normal">{props.links?.[0].title}</span>
          {
            props.links?.[0].items.map(item => (
              <a href={item.href}>{item.label}</a>
            ))
          }
        </div>
        {
          props.links?.map((col, index) => {
            if (index === 0) return <></>;

            return (
            <div class="flex flex-col gap-3 font-light lg:justify-self-center">
              <span class="uppercase font-normal">{col.title}</span>
              {
                col.items.map(item => (
                  <a href={item.href}>{item.label}</a>
                ))
              }
            </div>
          )})
        }
        {
          props.images?.map(image => (
            <Image
              class="w-[89px] h-[134px] lg:justify-self-end text-[transparent]"
              alt={image.image}
              src={image.image}
              width={image.width}
              height={image.height}
              loading={'lazy'}
              decoding={'async'}
            />
          ))
        }
      </div>
      <div
        class="flex flex-col text-center lg:text-start lg:flex-row content gap-10 justify-between items-center"
      >
        <div class="flex flex-col lg:flex-row gap-3 items-center">
          <span>{props.copyright}</span>
          <span class="font-light">
            {props.copyrightText}
          </span>
        </div>
        <div class="flex flex-col lg:flex-row gap-2 items-center">
          <Icon
            width={18}
            height={18}
            id={'pin'}
            strokeWidth={3}
          />
          <span>{props.address}</span>
        </div>
      </div>
    </footer>
  );
}
