
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Sound = "hover" | "click";

export function useInterfaceSound() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const lastSound = useRef(0);

  useEffect(() => {
    return () => {
      if (audioRef.current) void audioRef.current.close();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = useCallback(async () => {
    if (enabled) {
      setEnabled(false);
      return;
    }

    try {
      const audio = audioRef.current ?? new AudioContext();
      audioRef.current = audio;
      await audio.resume();
      setEnabled(audio.state === "running");
    } catch {
      setEnabled(false);
    }
  }, [enabled]);

  const playSound = useCallback((sound: Sound) => {
    const audio = audioRef.current;
    if (!enabled || !audio || audio.state !== "running") return;

    const now = audio.currentTime;

    // Prevent rapid, overlapping hover sounds.
    if (now - lastSound.current < 0.07) return;
    lastSound.current = now;

    const oscillator = audio.createOscillator();
    const volume = audio.createGain();

    oscillator.type = sound === "hover" ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(
      sound === "hover" ? 610 : 330,
      now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      sound === "hover" ? 460 : 540,
      now + 0.09
    );

    volume.gain.setValueAtTime(0.0001, now);
    volume.gain.exponentialRampToValueAtTime(0.025, now + 0.009);
    volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    oscillator.connect(volume);
    volume.connect(audio.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.13);
  }, [enabled]);

  return { enabled, toggleSound, playSound };
}
