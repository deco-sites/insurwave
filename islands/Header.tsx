import { useState, useEffect } from 'preact/hooks';
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";

export interface Notification {
  description: string;
  textLink: string;
  href: string;
}

export interface CTA {
  href: string;
  text: string;
  outline?: boolean;
  icon?: AvailableIcons;
}

export interface Drowpdown {
  side?: 'left' | 'right';
  imageContainer?: {
    image?: ImageWidget;
    videoURL?: string;
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
    href?: string;
  };
  contentContainer?: {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
    */
    title?: string;
    links?: {
      title: string;
      description?: string;
      href: string;
    }[]
  };
}

export interface Nav {
  notification?: Notification;
  logoSvg?: AvailableIcons;
  navigation?: {
    links?: {
      label?: string;
      url?: string;
      dropdown?: Drowpdown;
    }[];
  };
  buttons?: CTA[];
}

export default function Header({
  notification = {
    description: 'Turbulence ahead: how geopolitics is impacting aviation insurance',
    href: 'https://insurwave.com/blog/insights/turbulence-ahead-how-geopolitics-is-impacting-aviation-insurance',
    textLink: 'Read the article'
  },
  logoSvg = 'Logo',
  navigation = {
    links: [
      {
        label: 'Product',
        dropdown: {
          side: 'right',
          imageContainer: {
            href: '#',
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/ca31f07f-f4a8-4ab3-901a-c8031e2a380b',
            description: 'Our platform is designed with the insurance buyer front and centre. Consolidate and visualise your insurance data to make smarter risk transfer decisions.',
            title: '<a class="flex items-center gap-1 group text-base" href="/product">Product Overview<span class="transition group-hover:translate-x-0.5"><svg height="20" width="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M27.7 10.947C26.632 8.814 26 6.717 26 5h2c0 1.283.492 3.06 1.488 5.053.987 1.973 2.43 4.081 4.242 6.013C37.364 19.944 42.37 23 48 23v2c-5.63 0-10.635 3.056-14.27 6.934-1.811 1.932-3.255 4.04-4.242 6.013C28.492 39.94 28 41.717 28 43h-2c0-1.717.633-3.814 1.7-5.947 1.075-2.152 2.631-4.419 4.57-6.487 2.607-2.78 5.955-5.251 9.812-6.566-3.857-1.315-7.205-3.786-9.812-6.566-1.939-2.068-3.495-4.335-4.57-6.487z" fill="#FFFFFF" fill-rule="evenodd"></path><path d="M0 23h48v2H0v-2z" fill="#FFFFFF" fill-rule="evenodd"></path></g></svg></span></a>'
          },
          contentContainer: {
            links: [
              {
                title: 'Collect',
                description: 'All your insurance data in one place',
                href: '/product/collect'
              },
              {
                title: 'Manage',
                description: 'Get back to what you do best',
                href: '/product/manage'
              },
              {
                title: 'Visualise',
                description: 'Goodbye risk, Hello risk map',
                href: '/product/visualise'
              },
              {
                title: 'Analyse',
                description: 'Own your risk, own your outcome',
                href: '/product/analyse'
              },
              {
                title: 'Distribute',
                description: 'Stay connected',
                href: '/product/distribute'
              }
            ]
          }
        }
      },
      {
        label: 'Solutions',
        dropdown: {
          side: 'left',
          imageContainer: {
            href: '#',
            image: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10579/f7d067a7-6196-4e39-937e-bbf602c040ad',
            title: `<a class="bg-iw-hi-vis font-grotesk leading-5 px-1 text-base text-iw-industrial-green uppercase w-fit" href="/blog/product/whats-new-improved-documents-additional-currencies-and-more">What's New</a>`
          },
          contentContainer: {
            title: '<div class="bg-iw-industrial-green font-grotesk font-thin leading-5 px-1 text-base text-iw-hi-vis uppercase w-fit">By Role</div>',
            links: [
              {
                title: 'Insurance Buyer',
                description: 'Collect and analyse data to make better risk transfer decisions and unlock a new insurance buying experience',
                href: '/solutions/insurance-buyer'
              },
              {
                title: 'Insurance Broker',
                description: 'Enhance your insights with detailed, quality data and risk information to ensure your clients get the best deal',
                href: '/solutions/brokers'
              },
              {
                title: 'Insurer',
                description: 'Take the heavy lifting out of the equation when it comes to data by automating time-consuming tasks so you can focus on what you do best',
                href: '/solutions/insurers'
              }
            ]
          }
        }
      },
      {
        label: 'Customers',
        url: '/customers'
      },
      {
        label: 'Resources',
        dropdown: {
          side: 'left',
          imageContainer: {
            href: '#',
            videoURL: 'https://insurwave.com/assets/LogoVideo.mp4',
          },
          contentContainer: {
            links: [
              {
                title: 'Blog',
                description: 'Keep up to date with all things insurance, risk, and technology',
                href: '/blog'
              },
              {
                title: 'Newsroom',
                description: `Want to know what we've been up to? Find out here`,
                href: '/newsroom'
              }
            ]
          }
        }
      },
      {
        label: 'Company',
        dropdown: {
          side: 'left',
          imageContainer: {
            href: '#',
            videoURL: 'https://insurwave.com/assets/LogoVideo.mp4',
          },
          contentContainer: {
            links: [
              {
                title: 'About Us',
                description: 'Managing your risk data will never be the same',
                href: '/about-us'
              },
              {
                title: 'Careers',
                description: `Ride the wave and join Insurwave`,
                href: '/careers'
              }
            ]
          }
        }
      }
    ]
  },
  buttons = [
    {
      href: '/demo',
      text: 'Book a demo',
      outline: false
    },
    {
      href: 'https://platform.insurwave.com',
      text: 'Log In',
      icon: 'LogIn',
      outline: true
    },
  ]
}: Nav) {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // deno-lint-ignore no-explicit-any
  const handleClickOutside = (event: any) => {
    if (!event.target.closest('#nav')) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div class="fixed w-full z-50">
      <aside
        class="p-3 relative text-sm w-full z-20 bg-iw-orange-warm text-iw-industrial-green"
      >
        <div class="flex flex-col md:flex-row justify-center gap-1">
          <p class="md:pr-6">
            {notification.description}
          </p>
          <a
            class="flex items-center gap-1 group underline"
            href={notification.href}
          >
            {notification.textLink}
            <span class="transition group-hover:translate-x-0.5">
              <Icon
                width={16}
                height={16}
                id="ArrowRightSchema"
                strokeWidth={3}
              />
            </span>
          </a>
        </div>
      </aside>
      <header class="relative">
        <div class="backdrop-blur-[2px] bg-white border-b-[0.5px] border-iw-industrial-green flex items-center justify-between relative text-iw-industrial-green w-full xl:px-10 -xl:px-4 xl:py-5 -xl:py-4 z-50">
          <a
            id="logo"
            class="flex"
            aria-label="Primary Insurwave logo at the top"
            href="/"
          >
            <Icon
              width={150}
              height={33}
              id={logoSvg}
              strokeWidth={3}
            />
          </a>
          <div class="-lg:hidden lg:flex flex-row">
            <nav id="nav" class="flex flex-row gap-8 items-center">
              {
                navigation?.links?.map((link, index) => {
                  if (link.dropdown) {
                    return (
                      <>
                        <div class="relative">
                          <div class="border-b-2 border-b-[#ffffff] hover:border-b-[#002824] transition-all" onClick={() => toggleDropdown(index)}>
                            <div
                              class="text-iw-industrial-green flex flex-row items-center gap-2 cursor-pointer py-1"
                            >
                              {link.label}
                              <span class="pb-1">
                                <Icon
                                  width={15}
                                  height={15}
                                  id="ArrowBottomSchema"
                                  strokeWidth={3}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        {
                          openDropdown === index &&
                          <div class="absolute xl:top-[78px] md:top-[70px] flex bg-white w-fit h-fit rounded-b-xl overflow-hidden drop-shadow-lg text-sm transition-all duration-200 ease-in-out z-50 visible opacity-100"
                            style={{
                              flexDirection: link.dropdown?.side === 'right' ? 'row-reverse' : 'row'
                            }}
                          >
                            <div class="w-96 bg-white p-10 pt-5 flex flex-col">
                              {
                                link.dropdown?.contentContainer?.title &&
                                <span dangerouslySetInnerHTML={{
                                  __html: link.dropdown.contentContainer.title
                                }} />
                              }
                              <div class="flex flex-col">
                                {
                                  link.dropdown.contentContainer?.links?.map(linkChild => (
                                    <a class="flex flex-col gap-3 py-5 group border-b border-iw-industrial-green" href={linkChild.href}>
                                      <p class="flex items-center gap-1 text-base">
                                        {linkChild.title}
                                        <span class="transition group-hover:translate-x-0.5">
                                          <Icon
                                            width={16}
                                            height={20}
                                            id="ArrowRightSchema"
                                            strokeWidth={3}
                                          />  
                                        </span>
                                      </p>
                                      <span>{linkChild.description}</span>
                                    </a>
                                  ))
                                }
                              </div>
                            </div>
                            <div class="w-96 bg-iw-industrial-green text-white p-10 flex flex-col gap-4">
                              <>
                                {
                                  link.dropdown?.imageContainer?.title &&
                                  <span class="font-light" dangerouslySetInnerHTML={{
                                    __html: link.dropdown.imageContainer.title
                                  }} />
                                }
                                {
                                  link.dropdown?.imageContainer?.image &&
                                  <Image
                                    width={304}
                                    class="rounded-xl w-full"
                                    src={link.dropdown.imageContainer.image}
                                    alt={link.dropdown.imageContainer.image}
                                    decoding="sync"
                                    loading="eager"
                                  />
                                }
                                {
                                  link.dropdown?.imageContainer?.videoURL &&
                                  <video autoplay={true} loop={true} class="rounded-xl">
                                    <source src={link.dropdown.imageContainer.videoURL} />
                                  </video>
                                }
                                {
                                  link.dropdown?.imageContainer?.description &&
                                  <div class="flex flex-col gap-2">
                                    <span class="font-thin" dangerouslySetInnerHTML={{
                                    __html: link.dropdown.imageContainer.description
                                  }} />
                                  </div>
                                }
                              </>
                            </div>
                          </div>
                        }
                      </>
                    )
                  }

                  return (
                    <div>
                      <div class="border-b-2 border-b-[#ffffff] hover:border-[#002824] transition-all">
                        <a class="text-iw-industrial-green flex items-center gap-2 py-1" href={link.url}>
                          {link.label}
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </nav>
          </div>
          <div id="cta" class="-lg:hidden lg:flex">
          {
            buttons?.map(button => {
              if (button.outline) {
                return (
                  <a
                    target={button.href.includes("http") ? "_blank" : "_self"}
                    href={button.href}
                  >
                    <button
                      class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 text-iw-industrial-green hover:underline"
                      type="button"
                    >
                      <span class="flex flex-row items-center gap-2 uppercase">
                        {
                          button?.icon &&
                          <>
                            <Icon
                              width={21}
                              height={21}
                              id={button.icon}
                              strokeWidth={3}
                            />{" "}
                          </>
                        }
                        {button.text}
                      </span>
                    </button>
                  </a>
                )
              }

              return (
                <a 
                  target={button.href.includes("http") ? "_blank" : "_self"}
                  href={button.href}
                >
                  <button
                    class="rounded-full text-sm p-2 px-4 font-grotesk uppercase transition ease-in-out duration-300 !bg-iw-blue-bright text-iw-industrial-green hover:!bg-iw-blue-shade"
                    type="button"
                  >
                    <span class="uppercase">{button.text}</span>
                  </button>
                </a>
              )
            })
          }
          </div>
        </div>
        <button
          class="lg:hidden absolute right-4 top-2 z-50"
          type="button"
          title="open navigation"
        >
          {
            openMobileMenu ?
            <div id="mobile-close-icon" onClick={() => setOpenMobileMenu(false)}>
              <svg
                height="50"
                width="25"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M22.586 24L5.293 6.707l1.414-1.414L24 22.586 41.293 5.293l1.414 1.414L25.414 24l17.293 17.293-1.414 1.414L24 25.414 6.707 42.707l-1.414-1.414L22.586 24z"
                    fill="#002824"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
            :  
            <div id="mobile-menu-icon" onClick={() => setOpenMobileMenu(true)}>
              <svg
                height="50"
                width="25"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M44 11.105H4V9h40v2.105zm0 14.21H4V23.21h40v2.106zm0 14.738H4v-2.106h40v2.106z"
                    fill="#002824"
                    fill-rule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
          }
        </button>
        {
          openMobileMenu &&
          <nav
            class="absolute w-screen h-screen min-h-screen z-50 lg:hidden"
            id="nav"
          >
            <ul
              id="menu-overlay-ul"
              class="flex flex-col px-3 py-4 border-b-[1px] border-iw-industrial-green bg-iw-fresh-paint overflow-auto max-h-[calc(100vh-154px)]"
            >
              {
                navigation?.links?.map((link, index) => {
                  if (link.dropdown) {
                    return (
                      <>
                        <li class="lg:hidden py-2" onClick={() => toggleDropdown(index)}>
                          <button
                            class={`flex flex-row items-center justify-between w-full md:text-2xl -md:text-lg
                              ${openDropdown === index ? 'border-b-2 border-iw-industrial-green pb-2' : ''}
                            `}
                          >
                            {link.label}
                            <Icon
                              style={{
                                transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0)'
                              }}
                              width={20}
                              height={50}
                              id="ArrowBottomSchema"
                              strokeWidth={3}
                            />
                          </button>
                        </li>
                        {
                          openDropdown === index &&
                          <span>
                            {
                              link.dropdown?.imageContainer?.description &&
                              link.dropdown?.imageContainer?.title &&
                              link.dropdown?.imageContainer?.href &&
                              <li class="flex flex-row items-center justify-between border-b-[1px] border-iw-industrial-green pt-2 pb-3">
                                <a class="flex flex-col w-full" href={link.dropdown.imageContainer.href}>
                                  <span class="-md:text-base md:text-2xl py-1" dangerouslySetInnerHTML={{
                                    __html: link.dropdown.imageContainer.title
                                  }} />
                                  <span class="-md:text-sm md:text-lg max-w-[85vw]" dangerouslySetInnerHTML={{
                                    __html: link.dropdown.imageContainer.description
                                  }} />
                                </a>
                                <Icon
                                  width={20}
                                  height={20}
                                  id="ArrowRightSchema"
                                  strokeWidth={3}
                                />  
                              </li>
                            }
                            {
                              
                              link.dropdown?.contentContainer?.links?.map(childLink => (
                                  <li class="flex flex-row items-center justify-between border-b-[1px] border-iw-industrial-green pt-2 pb-3">
                                    <a class="flex flex-col w-full" href={childLink.href}>
                                      <span class="-md:text-base md:text-2xl py-1">{childLink.title}</span>
                                      <span class="-md:text-sm md:text-lg max-w-[85vw]">{childLink.description}</span>
                                    </a>
                                    <Icon
                                      width={20}
                                      height={20}
                                      id="ArrowRightSchema"
                                      strokeWidth={3}
                                    />  
                                  </li>
                              ))
                            }
                          </span>
                        }
                      </>
                    )
                  }

                  return (
                    <li class="lg:hidden py-2">
                      <a
                        class="flex flex-row justify-between items-center"
                        target={link?.url ? link.url.includes("http") ? "_blank" : "_self" : ""}
                        href={link?.url ?? ""}
                      >
                        <span class="md:text-2xl -md:text-lg">{link.label}</span>
                        <Icon
                          width={20}
                          height={20}
                          id="ArrowRightSchema"
                          strokeWidth={3}
                        />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        }
      </header>
    </div>
  );
}
