"use client"

import Head from "next/head";
import { useEffect } from "react";

import { useState } from "react";

export default function RequestQuote() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Evita duplicar el script si ya existe
    if (!document.getElementById("jobber-embed-script")) {
      const script = document.createElement("script");
      script.id = "jobber-embed-script";
      script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
      script.async = true;
      script.setAttribute("clienthub_id", "40b56a75-dbed-4f70-b807-d9a216f025a3");
      script.setAttribute("form_url", "https://clienthub.getjobber.com/client_hubs/40b56a75-dbed-4f70-b807-d9a216f025a3/public/work_request/embedded_work_request_form");
      document.body.appendChild(script);
    }

    // Detectar cuando el formulario está cargado
    const interval = setInterval(() => {
      const form = document.querySelector(".embedded-work-request-form");
      if (form) {
        setLoading(false);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background px-2 sm:px-4">
      <Head>
        <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
      </Head>
      <div className="w-full max-w-4xl rounded shadow-lg overflow-hidden bg-white border mx-auto my-8 p-4">
        <div id="40b56a75-dbed-4f70-b807-d9a216f025a3"></div>
      </div>
    </main>
  );
}


