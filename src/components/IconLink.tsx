import { GithubLogo } from "../../svg/Github";
import { FacebookLogo } from "../../svg/Facebook";
import { InstagramLogo } from "../../svg/Instagram";
import { TwitterLogo } from "../../svg/Twitter";

export const IconLink = () => {
  return (
    <>
      <a
        href="https://github.com/MasterIceZ"
        className="hover:bg-slate-200 dark:bg-purple-800 hover:dark:bg-purple-900 rounded-lg p-2"
        target="_blank"
        rel="noopener noreferrer">
        <GithubLogo className="text-slate-700 dark:text-gray-100" />
      </a>
      <a
        href="https://www.instagram.com/iicxx.exe_/?hl=th"
        className="hover:bg-slate-200 dark:bg-purple-800 hover:dark:bg-purple-900 rounded-lg p-2"
        target="_blank"
        rel="noopener noreferrer">
        <InstagramLogo className="text-slate-700 dark:text-gray-100" />
      </a>
      <a
        href="https://www.facebook.com/Borworntat.D/"
        className="hover:bg-slate-200 dark:bg-purple-800 hover:dark:bg-purple-900 rounded-lg p-2"
        target="_blank"
        rel="noopener noreferrer">
        <FacebookLogo className="text-slate-700 dark:text-gray-100" />
      </a>
      <a
        href="https://twitter.com/_ibwt"
        className="hover:bg-slate-200 dark:bg-purple-800 hover:dark:bg-purple-900 rounded-lg p-2"
        target="_blank"
        rel="noopener noreferrer">
        <TwitterLogo className="text-slate-700 dark:text-gray-100" size={30} />
      </a>
    </>
  );
};
