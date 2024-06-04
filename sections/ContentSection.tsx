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
  cta?: {
    href: string,
    text: string
  }
}

export default function ContentSection({ 
  title,
  description = '<p dir="ltr">Designed to satisfy the needs of risk managers, engineered with the latest tech.</p>',
  cta = {
    href: '/product',
    text: 'Product Overview'
  }
}: Props) {
  return (
    <div class="bg-iw-industrial-green overflow-hidden relative top-[-2px]">
      <div class="text-center container mx-auto pb-40 px-10 flex flex-col items-center space-y-10">
        {
          title &&
          <h2 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-hi-vis text-iw-fresh-paint" dangerouslySetInnerHTML={{
            __html: title
          }} />
        }
        {
          description &&
          <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-fresh-paint font-thin max-w-5xl" dangerouslySetInnerHTML={{
            __html: description
          }} />
        }
        {
          cta &&
          <div>
            <a href={cta.href}>
              <button class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-hi-vis text-iw-industrial-green hover:!bg-iw-hi-vis-shade z-10 uppercase" type="button">
                {cta.text}
              </button>
            </a>
          </div>
        }
      </div>
    </div>
  );
}
