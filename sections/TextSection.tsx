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
}

export default function TextSection({ 
  title = '<p>Turn your risk data into <em>better</em> decisions</p>',
  description = '<p>With real-time asset tracking, exposure monitoring and detailed reports, Insurwave elevates your decision-making and gives you clarity, unlike any tool you’ve used before.</p>'
}: Props) {
  return (
    <div class="bg-iw-industrial-green overflow-hidden">
      <div class="text-center container mx-auto py-40 px-10 flex flex-col items-center space-y-20 xl:space-y-40">
        <div class="flex flex-col space-y-8 items-center">
          <h1 class="leading-tight text-[80px] -md:text-[48px] lg:text-[80px] font-tobias [&_em]:font-kern [&_em]:font-light [&_em]:not-italic [&_em]:text-iw-hi-vis text-iw-fresh-paint" dangerouslySetInnerHTML={{
            __html: title
          }} />
          <h5 class="leading-tight text-[24px] tracking-[-0.48px] font-kern text-iw-fresh-paint font-thin max-w-5xl" dangerouslySetInnerHTML={{
            __html: description
          }} />
        </div>
      </div>
    </div>
  );
}
