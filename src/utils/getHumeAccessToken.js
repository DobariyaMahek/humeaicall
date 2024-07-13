// import "server-only";
import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: "uVq4xJ2pIRVGeEGhsC8eFbj1HhjsZ4YCpKSI5gbmyUruyMkH",
    secretKey:
      "oX7Er4x4WEQiEJUxjVDtZNuxmBGDWUVX2FnZ2hfn908Nqxw6YAoQAHfZCzASaGXE",
  });
  if (accessToken === "undefined") {
    return null;
  }

  return accessToken ?? null;
};
