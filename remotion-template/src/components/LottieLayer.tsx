import React, {useEffect, useMemo, useState} from 'react';
import {Lottie, type LottieAnimationData} from '@remotion/lottie';
import {
  cancelRender,
  continueRender,
  delayRender,
  getRemotionEnvironment,
  staticFile,
  useCurrentFrame,
} from 'remotion';

type LottieLayerProps = {
  fileName: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  opacity?: number;
  loop?: boolean;
  playbackRate?: number;
  startFrame?: number;
  endFrame?: number;
  visible?: boolean;
  zIndex?: number;
};

export const LottieLayer: React.FC<LottieLayerProps> = ({
  fileName,
  width = 360,
  height = 360,
  style,
  opacity = 0.78,
  loop = true,
  playbackRate = 1,
  startFrame,
  endFrame,
  visible = true,
  zIndex = 1,
}) => {
  const frame = useCurrentFrame();
  const [animationData, setAnimationData] = useState<LottieAnimationData | null>(null);
  const shouldRenderThisFrame =
    visible &&
    Boolean(fileName) &&
    (startFrame === undefined || frame >= startFrame) &&
    (endFrame === undefined || frame <= endFrame);

  const src = useMemo(() => {
    if (!fileName) {
      return null;
    }

    return staticFile(`/lottie/${fileName}`);
  }, [fileName]);

  useEffect(() => {
    if (!visible || !fileName || !src) {
      setAnimationData(null);
      return;
    }

    const handle = delayRender(`Loading Lottie animation: ${fileName}`);
    let cleanedUp = false;

    const finish = () => {
      if (cleanedUp) {
        return;
      }

      cleanedUp = true;
      continueRender(handle);
    };

    const fail = (error: Error) => {
      const env = getRemotionEnvironment();

      if (env.isRendering && !env.isStudio) {
        cancelRender(error);
        return;
      }

      console.error(error);
      setAnimationData(null);
      finish();
    };

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          console.warn(
            `Skipping missing Lottie JSON "${fileName}". Add the file to public/lottie/ if you want this animation.`,
          );
          return null;
        }

        return response.json() as Promise<LottieAnimationData>;
      })
      .then((json) => {
        if (!json) {
          setAnimationData(null);
          finish();
          return;
        }

        if (cleanedUp) {
          return;
        }

        setAnimationData(json);
        finish();
      })
      .catch((error: unknown) => {
        const normalizedError =
          error instanceof Error
            ? error
            : new Error(`Unknown Lottie loading error for "${fileName}"`);

        fail(normalizedError);
      });

    return () => {
      finish();
    };
  }, [fileName, src, visible]);

  if (!shouldRenderThisFrame || !animationData) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        width,
        height,
        opacity,
        zIndex,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        playbackRate={playbackRate}
        renderer="svg"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
