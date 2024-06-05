import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Post {
  title: string;
  image: ImageWidget;
  date: string;
  readingTime: string;
  tags: {
    /** @format color-input */
    color: string;
    text: string;
    href: string;
  }[];
  href: string;
}

export interface Props {
  title?: string;
  posts?: Post[];
}

function SliderItem(
  { post, id }: { post: Post; id: string },
) {

  return (
    <div id={id} class="px-4 pt-4 pb-12 sm:!pb-4" style="width:100%;display:inline-block">
      <div class="col-span-1 flex flex-col items-center sm:items-start space-y-6">
        <a
          aria-label={post.title}
          class="w-full transition duration-200 hover:scale-[1.03]"
          href={post.href}
        >
          <Image
            class="rounded-xl w-full text-[transparent]"
            alt={post.title}
            src={post.image}
            width={640}
            height={420}
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          class="font-grotesk inline-block px-1 uppercase w-fit  text-iw-industrial-green"
          href={post.tags[0].href}
          style={{
            backgroundColor: post.tags[0].color
          }}
        >
          {post.tags[0].text}
        </a>
        <a
          class="font-normal font-tobias min-h-[100px] sm:text-left text-2xl text-center text-iw-industrial-green hover:underline"
          href={post.href}
        >
          {post.title}
        </a>
        <span class="space-x-2 font-grotesk font-light uppercase text-iw-industrial-green">
          <time datetime="2024-06-03T11:45:00Z">
          {post.date}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </span>
        <a
          aria-label={post.title}
          href={post.href}
        >
          <button class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-industrial-green text-iw-hi-vis hover:!bg-iw-seaweed uppercase" type="button">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
}

function Dots({ posts }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10 lg:hidden">
        {posts?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-5 h-5 rounded-full bg-[transparent] group-disabled:bg-[#61aaff] border border-[#61aaff] dot"
                  style={{ animationDuration: `${1}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

export default function BlogPosts({
  title = "Latest on our blog",
  posts = [
    {
      title: "How well do you understand your exposures?",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/a6232750-9992-48f1-ba0b-eb0d70f1ac85",
      date: "June 3, 2024",
      readingTime: "6 mins read",
      href: '/blog/insights/how-well-do-you-understand-your-exposures',
      tags: [{
        text: 'Insights',
        color: '#61aaff',
        href: '/blog/insights'
      }],
    },
    {
      title: "Dynamic exposure monitoring: What are the opportunities?",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/bb77d1d5-97f7-4895-9e47-ca2b0ee60125",
      date: "May 23, 2024",
      readingTime: "6 mins read",
      href: '/blog/insights/dynamic-exposure-monitoring-what-are-the-opportunities',
      tags: [{
        text: 'Insights',
        color: '#61aaff',
        href: '/blog/insights'
      }],
    },
    {
      title: "Managing risk with data-driven insurance solutions",
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/e121a3d7-bd1c-4fe6-943b-a72edf7bf238",
      date: "May 20, 2024",
      readingTime: "21 mins read",
      href: '/blog/events/managing-risk-with-data-driven-insurance-solutions',
      tags: [{
        text: 'Events',
        color: '#e6f849',
        href: '/blog/events'
      }],
    },
  ],
}: Props) {
  const id = useId();
  return (
    <section class="bg-iw-forecast bg-iw-fresh-paint -md:px-5">
      <div class="container mx-auto py-10 pb-0 lg:py-16 relative">
        <div class="flex flex-col gap-8 ">
          <div class="flex justify-between items-center px-4 w-full">
              <div class="flex gap-3 items-center">
                  <figure class="flex bg-iw-blue-bright rounded-full p-1 w-[50px] h-[50px]">
                    <svg height="42" width="42" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M24 4v40M6 13l36 21m0-21L6 34" stroke="#002824" stroke-width="2"></path></g></svg>
                  </figure>
                  <h3 class="leading-tight text-[48px] font-tobias">{title}</h3>
              </div>
          </div>
          <div class="pb-4 sm:pb-0">
            <div id={id} class="relative pb-0">
              <Slider
                class="carousel carousel-center w-full col-span-full row-span-full gap-1"
                rootId={id}
                interval={1000 * 1e3}
                infinite
              >
                {posts?.map((slide, index) => (
                  <Slider.Item
                    index={index}
                    class="carousel-item max-w-full md:max-w-[50%] lg:max-w-[33%] w-full"
                  >
                    <SliderItem
                      post={slide}
                      id={`${id}::${index}`}
                    />
                  </Slider.Item>
                ))}
              </Slider>

              <div class="flex justify-center pt-8 lg:px-16">
                {true && <Dots posts={posts} />}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}
