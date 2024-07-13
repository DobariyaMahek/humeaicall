import { VoiceProvider } from "@humeai/voice-react";
import { ComponentRef, useRef } from "react";
import Messages from "./Messages";
import Controls from "./Controls";
import StartCall from "./StartCall";

export default function Chat({ accessToken }) {
  const timeout = useRef(null);
  const ref = useRef(null);

  return (
    <div
    // className={
    //   "relative mx-auto flex h-[0px] w-full grow flex-col overflow-hidden"
    // }
    >
      <VoiceProvider
        auth={{ type: "accessToken", value: accessToken }}
        onMessage={() => {
          if (timeout.current) {
            window.clearTimeout(timeout.current);
          }

          timeout.current = window.setTimeout(() => {
            if (ref.current) {
              const scrollHeight = ref.current.scrollHeight;

              ref.current.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
              });
            }
          }, 200);
        }}
      >
        <Messages ref={ref} />
        <Controls />
        <StartCall />
      </VoiceProvider>
    </div>
  );
}
