import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BookmarkIcon,
  BookmarkSquareIcon,
  ChevronUpIcon, FireIcon,
  HomeIcon,
  InboxStackIcon, UserIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const NavigationItems = [
  { name: "Page 1", href: "/", icon: HomeIcon },
  { name: "Page 2", href: "/", icon: FireIcon },
  { name: "Page 3", href: "/", icon: BookmarkIcon },
  {
    name: "Page 4",
    href: "/",
    icon: UserIcon,
  },
];

export const Layout = (props: { children: ReactNode; }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary-content">
      <NewLayout>
          {props.children}
      </NewLayout>
      <NavigationBottom />
    </main>
  );
};

const NavigationBottom = () => {
  return (
    <>
      <nav className="btm-nav lg:hidden">
        <Link href="/">
          <HomeIcon className={"h-5 w-5"} />{" "}
        </Link>
        <Link href="/relays">
          <InboxStackIcon className={"h-5 w-5"} />
        </Link>
        <Link href="/saved">
          <BookmarkSquareIcon className={"h-5 w-5"} />
        </Link>
        <label htmlFor="my-modal-6">
          <ChevronUpIcon className={"h-5 w-5"} />
        </label>
      </nav>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <button className={"btn-primary btn"}>
            <Link href="/settings">Settings</Link>
          </button>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              🚀
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const NewLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="mb-10 mt-10 px-2 py-10 sm:px-0">
      <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
          <nav
            aria-label="Sidebar"
            className="sticky top-24 divide-y divide-accent-300"
          >
            <div className="space-y-1 pb-8">
              {NavigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.href === router.asPath
                      ? "bg-secondary-content text-base"
                      : "hover:bg-primary-content hover:text-accent",
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={
                    item.href === router.asPath ? "page" : undefined
                  }
                >
                  <item.icon
                    className={clsx(
                      item.href === router.asPath
                        ? "text-accent"
                        : "text-primary-content group-hover:text-accent",
                      "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <main className="lg:col-span-9 xl:col-span-9">{children}</main>
      </div>
    </div>
  );
};
