"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, 300);
  }, []);

  return null;
}