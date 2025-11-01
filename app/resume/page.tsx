import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Download, Eye } from "lucide-react";

export const revalidate = 60;

export default function ResumePage() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black pb-16">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-3xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl font-display">
            Resume
          </h1>
          <p className="mt-4 text-zinc-400 text-sm">
            Choose a version to download.
          </p>
        </div>

        <div className="flex flex-col gap-6 mx-auto max-w-md">
          {/* English Resume */}
          <Card>
            <div className="p-6 flex flex-col items-center text-center">
              <h2 className="text-2xl font-display font-semibold text-zinc-100">
                English
              </h2>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/resume/Yacine_Zendaoui_Resume_English.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700 hover:text-white duration-200"
                >
                  <Download className="w-4 h-4" strokeWidth={1.5} />
                  Download
                </Link>
              </div>
            </div>
          </Card>

          {/* French Resume */}
          <Card>
            <div className="p-6 flex flex-col items-center text-center">
              <h2 className="text-2xl font-display font-semibold text-zinc-100">
                French
              </h2>
              <div className="mt-6 flex gap-4">
                <Link
                  href="/resume/Yacine_Zendaoui_Resume_French.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700 hover:text-white duration-200"
                >
                  <Download className="w-4 h-4" strokeWidth={1.5} />
                  Download
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
