import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  username: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  username: "Peppyhop",
};

export const DURATION_IN_FRAMES = 200;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const VIDEO_FPS = 30;
