"use client";

import { motion } from "framer-motion";
import * as R from "remeda";
import { expressionColors } from "utils/expressionColors";
import { isExpressionColor } from "utils/expressionColors";

export default function Expressions({ values }) {
  const top3 = R.pipe(
    values,
    R.entries(),
    R.sortBy(R.pathOr([1], 0)),
    R.reverse(),
    R.take(3)
  );

  return (
    <div
      className={
        "border-border flex w-full flex-col gap-3 border-t p-3 text-xs md:flex-row"
      }
    >
      {top3.map(([key, value]) => (
        <div className={"w-full overflow-hidden"}>
          <div
            className={"flex items-center justify-between gap-1 pb-1 font-mono"}
          >
            <div className={"truncate font-medium"}>{key}</div>
            <div className={"tabular-nums opacity-50"}>{value.toFixed(2)}</div>
          </div>
          <div
            className={"relative h-1"}
            style={{
              "--bg": isExpressionColor(key)
                ? expressionColors[key]
                : "var(--bg)",
            }}
          >
            <div
              className={
                "size-full bg-[var(--bg)] absolute top-0 left-0 rounded-full opacity-10"
              }
            />
            <motion.div
              className={
                "bg-[var(--bg)] absolute top-0 left-0 h-full rounded-full"
              }
              initial={{ width: 0 }}
              animate={{
                width: `${R.pipe(
                  value,
                  R.clamp({ min: 0, max: 1 }),
                  (value) => `${value * 100}%`
                )}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
