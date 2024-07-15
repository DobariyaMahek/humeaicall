"use client";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Mic, MicOff, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "./ui/toggle";
import MicFFT from "./MicFFT";
import { cn } from "utils";

export default function Controls() {
  const { disconnect, status, isMuted, unmute, mute, micFft } = useVoice();

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 flex w-full items-center justify-center p-4",
        "from-card via-card/90 to-card/0 bg-gradient-to-t "
      )}
    >
      <AnimatePresence>
        {status.value === "connected" ? (
          <motion.div
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "100%",
              opacity: 0,
            }}
            className={
              "mb-2 flex items-center gap-4 rounded-lg rounded-lg border   border-gray-600  from-purple-600 to-blue-500 p-4 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm me-2  focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-none dark:bg-gradient-to-br dark:focus:ring-blue-800"
            }
          >
            <Toggle
              pressed={!isMuted}
              onPressedChange={() => {
                if (isMuted) {
                  unmute();
                } else {
                  mute();
                }
              }}
            >
              {isMuted ? (
                <MicOff className={"size-4 text-gray-800 "} />
              ) : (
                <Mic className={"size-4 text-gray-800"} />
              )}
            </Toggle>

            <div className={"relative grid h-8 w-48 shrink grow-0"}>
              <MicFFT fft={micFft} className={"fill-current"} />
            </div>

            <Button
              className={
                "flex items-center gap-1 border border-red-500 text-white  dark:border dark:border-white"
              }
              onClick={() => {
                disconnect();
              }}
              variant={"destructive"}
            >
              <span>
                <Phone
                  className={"size-4 text-red-500 opacity-50 dark:text-white"}
                  strokeWidth={2}
                  stroke={"currentColor"}
                />
              </span>
              <span className="text-red-500 dark:text-white">End Call</span>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
